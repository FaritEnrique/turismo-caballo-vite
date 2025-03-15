import { 
    collection, query, getDocs, addDoc, doc, updateDoc, getDoc, deleteDoc 
} from "firebase/firestore"; 
import { db } from "../services/firebase";

export const usePromociones = () => {
    
    const refPromociones = collection(db, "promociones");

    const fetchPromociones = async () => {
        try {
            const qPromociones = query(refPromociones);
            const dataPromociones = await getDocs(qPromociones);
            return dataPromociones.docs.map(doc => ({
                docId: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error("Error al obtener promociones:", error);
            return [];
        }
    };

    const crearPromocion = async (promocion) => {
        try {
            // Validación básica
            if (!promocion.titulo || !promocion.descripcion || !promocion.imagenURL) {
                throw new Error("Todos los campos son obligatorios.");
            }
            if (isNaN(promocion.descuento) || promocion.descuento < 0 || promocion.descuento > 100) {
                throw new Error("El descuento debe ser un número entre 0 y 100.");
            }

            const newPromocion = {
                titulo: promocion.titulo,
                descripcion: promocion.descripcion,
                imagenURL: promocion.imagenURL,
                descuento: promocion.descuento,
                precioOriginal: promocion.precioOriginal,
                precioFinal: promocion.precioFinal,
                fechaInicio: promocion.fechaInicio,  // Aquí puedes convertir a Timestamp si lo decides
                fechaFin: promocion.fechaFin         // Aquí puedes convertir a Timestamp si lo decides
            };

            const responsePromocion = await addDoc(refPromociones, newPromocion);
            return { success: true, id: responsePromocion.id, newPromocion };
        } catch (error) {
            console.error("Error al crear promoción:", error);
            return { success: false, message: error.message };
        }
    };

    const removePromocion = async (id) => {
        try {
            if (!id) throw new Error("ID de promoción no proporcionado.");

            const documentPromocion = doc(db, "promociones", id);
            await deleteDoc(documentPromocion);

            return { success: true, id };
        } catch (error) {
            console.error("Error al eliminar promoción:", error);
            return { success: false, message: error.message };
        }
    };

    const obtenerPromocion = async (id) => {
        try {
            if (!id) throw new Error("ID de promoción no proporcionado.");

            const documentObtenerPromocion = doc(db, "promociones", id);
            const promocion = await getDoc(documentObtenerPromocion);

            if (!promocion.exists()) {
                return { success: false, message: "Promoción no encontrada" };
            }

            return { success: true, id: promocion.id, ...promocion.data() };
        } catch (error) {
            console.error("Error al obtener promoción:", error);
            return { success: false, message: error.message };
        }
    };

    const editarPromocion = async (form, id) => {
        try {
            if (!id) throw new Error("ID de promoción no proporcionado.");

            const documentEditarPromocion = doc(db, "promociones", id);
            await updateDoc(documentEditarPromocion, form);
            
            return { success: true, message: "Promoción editada correctamente" };
        } catch (error) {
            console.error("Error al editar promoción:", error);
            return { success: false, message: error.message };
        }
    };

    return {
        fetchPromociones,
        crearPromocion,
        removePromocion,
        obtenerPromocion,
        editarPromocion
    };
};

export default usePromociones;