import { collection, query, getDocs, addDoc, doc, updateDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../services/firebase"; // Asegúrate de tener correctamente configurado el archivo de Firebase

export const useFormulario = () => {
    
    const refFormularios = collection(db, 'formularios');

    // Obtener todos los formularios
    const fetchFormularios = async () => {
        try {
            const qFormularios = query(refFormularios);
            const dataFormularios = await getDocs(qFormularios);
            const resultsFormularios = dataFormularios.docs.map(doc => ({
                docId: doc.id,
                ...doc.data()
            }));
            return resultsFormularios;
        } catch (error) {
            console.error("Error al obtener formularios:", error);
            return [];
        }
    };

    // Crear un nuevo formulario
    const crearFormulario = async (formulario) => {
        try {
          const newFormulario = {
            nombre: formulario.name,
            email: formulario.email,
            mensaje: formulario.message,
            fecha: new Date().toISOString()
          };
          const responseFormulario = await addDoc(refFormularios, newFormulario);
          return {
            id: responseFormulario.id,
            newFormulario
          };
        } catch (error) {
          console.error("Error al crear formulario:", error);
          throw new Error("No se pudo guardar el formulario. Intenta de nuevo."); // Añadí este mensaje
        }
    };

    // Eliminar un formulario por ID
    const removeFormulario = async (id) => {
        try {
            const documentFormulario = doc(db, 'formularios', id);
            await deleteDoc(documentFormulario);
            return { success: true, id };
        } catch (error) {
            console.error("Error al eliminar formulario:", error);
            return { success: false, message: "Error al eliminar formulario" };
        }
    };

    // Obtener un formulario específico por ID
    const obtenerFormulario = async (id) => {
        try {
            const documentObtenerFormulario = doc(db, 'formularios', id);
            const formulario = await getDoc(documentObtenerFormulario);

            if (!formulario.exists()) {
                return { success: false, message: "Formulario no encontrado" };
            }

            return { id: formulario.id, ...formulario.data() };
        } catch (error) {
            console.error("Error al obtener formulario:", error);
            return { success: false, message: "Error al obtener formulario" };
        }
    };

    // Editar un formulario
    const editarFormulario = async (form, id) => {
        try {
            const documentEditarFormulario = doc(db, 'formularios', id);
            await updateDoc(documentEditarFormulario, form);
            
            return {
                success: true,
                message: "Formulario editado correctamente"
            };
        } catch (error) {
            console.error("Error al editar formulario:", error);
            return { success: false, message: "Error al editar formulario" };
        }
    };

    return {
        fetchFormularios,
        crearFormulario,
        removeFormulario,
        obtenerFormulario,
        editarFormulario
    };
};

export default useFormulario;