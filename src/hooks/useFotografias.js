import { collection, query, getDocs, addDoc, doc, updateDoc, getDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "../services/firebase";

export const useFotografias = () => {
    
    const refFotografias = collection(db, 'fotografias');

    const fetchFotografias = async () => {
        try {
            const qFotografias = query(refFotografias);
            const dataFotografias = await getDocs(qFotografias);
            const resultsFotografias = dataFotografias.docs.map(doc => ({
                docId: doc.id,
                ...doc.data()
            }));
            return resultsFotografias;
        } catch (error) {
            console.error("Error al obtener fotografías:", error);
            return [];
        }
    };

    const crearFotografia = async (fotografia) => {
        try {
            const newFotografia = {
                URL: fotografia.URL
            };
            const responseFotografia = await addDoc(refFotografias, newFotografia);
            return {
                id: responseFotografia.id,
                newFotografia
            };
        } catch (error) {
            console.error("Error al crear fotografía:", error);
            return { success: false, message: "Error al crear fotografía" };
        }
    };

    const removeFotografia = async (id) => {
        try {
            const documentFotografia = doc(db, 'fotografias', id);
            await deleteDoc(documentFotografia);
            return { success: true, id };
        } catch (error) {
            console.error("Error al eliminar fotografía:", error);
            return { success: false, message: "Error al eliminar fotografía" };
        }
    };

    const obtenerFotografia = async (id) => {
        try {
            const documentObtenerFotografia = doc(db, 'fotografias', id);
            const fotografia = await getDoc(documentObtenerFotografia);

            if (!fotografia.exists()) {
                return { success: false, message: "Fotografía no encontrada" };
            }

            return { id: fotografia.id, ...fotografia.data() };
        } catch (error) {
            console.error("Error al obtener fotografía:", error);
            return { success: false, message: "Error al obtener fotografía" };
        }
    };

    const editarFotografia = async (form, id) => {
        try {
            const documentEditarFotografia = doc(db, 'fotografias', id);
            await updateDoc(documentEditarFotografia, form);
            
            return {
                success: true,
                message: "Fotografía editada correctamente"
            };
        } catch (error) {
            console.error("Error al editar fotografía:", error);
            return { success: false, message: "Error al editar fotografía" };
        }
    };

    return {
        fetchFotografias,
        crearFotografia,
        removeFotografia,
        obtenerFotografia,
        editarFotografia
    };
};

export default useFotografias;