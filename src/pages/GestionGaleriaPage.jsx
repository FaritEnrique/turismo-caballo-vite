// pages/GestionGaleriaPage.jsx
import { useEffect, useState } from "react";
import useFotografias from "../hooks/useFotografias";
import { toast, Toaster } from "react-hot-toast";

const GestionGaleriaPage = () => {
  const {
    fetchFotografias,
    crearFotografia,
    removeFotografia
  } = useFotografias();

  const [fotografias, setFotografias] = useState([]);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const obtenerFotografias = async () => {
    setLoading(true);
    const data = await fetchFotografias();
    setFotografias(data);
    setLoading(false);
  };

  useEffect(() => {
    obtenerFotografias();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) {
      toast.error("Por favor ingresa una URL válida");
      return;
    }

    const response = await crearFotografia({ URL: url.trim() });
    if (response.id) {
      toast.success("Fotografía creada correctamente");
      setUrl("");
      obtenerFotografias();
    } else {
      toast.error("Error al crear fotografía");
    }
  };

  const handleEliminar = async (id) => {
    const confirm = window.confirm("¿Estás seguro de eliminar esta fotografía?");
    if (!confirm) return;

    const result = await removeFotografia(id);
    if (result.success) {
      toast.success("Fotografía eliminada");
      obtenerFotografias();
    } else {
      toast.error("Error al eliminar fotografía");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-lg p-6 space-y-10">
        {/* Título */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-teal-900">Gestión de Fotografías</h1>
          <p className="text-gray-600 mt-2">Sube, visualiza y elimina fotografías fácilmente</p>
        </section>

        {/* Formulario */}
        <section>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center gap-4"
          >
            <input
              type="text"
              placeholder="Ingresa la URL de la fotografía"
              className="w-full md:flex-1 px-4 py-2 border border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              type="submit"
              className="bg-teal-700 text-white px-6 py-2 rounded-lg hover:bg-teal-800 transition"
            >
              Crear
            </button>
          </form>
        </section>

        {/* Listado */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-teal-900">Listado de Fotografías</h2>

          {loading ? (
            <p className="text-gray-500">Cargando fotografías...</p>
          ) : fotografias.length === 0 ? (
            <p className="text-gray-500">No hay fotografías registradas.</p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {fotografias.map((foto) => (
                <div
                  key={foto.docId}
                  className="bg-white border border-green-600 rounded-lg shadow-md p-3 flex flex-col items-center"
                >
                  <img
                    src={foto.URL}
                    alt="Fotografía"
                    className="w-full h-40 object-cover rounded-lg mb-3 shadow"
                  />
                  <button
                    onClick={() => handleEliminar(foto.docId)}
                    className="bg-red-500 text-white text-sm px-4 py-1 rounded hover:bg-red-600 transition"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <div className="flex justify-center">
          <a href="/admin" className="px-6 py-3 bg-teal-800 text-white rounded-lg shadow-md hover:bg-teal-900 transition">
            Ir a Administración
          </a>
        </div>
      </div>

      <Toaster position="top-right" />
    </main>
  );
};

export default GestionGaleriaPage;