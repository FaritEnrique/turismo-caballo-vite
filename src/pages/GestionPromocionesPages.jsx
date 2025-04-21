import { useEffect, useState } from "react";
import usePromociones from "../hooks/usePromociones";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Timestamp } from "firebase/firestore";

const GestionPromocionesPage = () => {
  const {
    fetchPromociones,
    crearPromocion,
    removePromocion,
    actualizarPromocion,
  } = usePromociones();

  const [promociones, setPromociones] = useState([]);
  const [form, setForm] = useState({
    docId: null,
    titulo: "",
    descripcion: "",
    imagenURL: "",
    descuento: 0,
    precioOriginal: 0,
    precioFinal: 0,
    fechaInicio: "",
    fechaFin: "",
  });

  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState(null);
  
  const mostrarConfirmacion = (mensaje, callback) => {
    confirmAlert({
      title: "Éxito",
      message: mensaje,
      buttons: [
        {
          label: "Aceptar",
          onClick: callback
        }
      ],
      overlayClassName: "custom-confirm-alert-overlay"
    });
  };

  const obtenerPromociones = async () => {
    const data = await fetchPromociones();
    setPromociones(data);
  };

  useEffect(() => {
    obtenerPromociones();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensaje(null);
  
    const datosParaGuardar = {
      ...form,
      fechaInicio: Timestamp.fromDate(new Date(form.fechaInicio)),
      fechaFin: Timestamp.fromDate(new Date(form.fechaFin)),
    };
  
    let response;
    if (form.docId) {
      response = await actualizarPromocion(form.docId, datosParaGuardar);
    } else {
      response = await crearPromocion(datosParaGuardar);
    }
  
    if (response.success) {
      mostrarConfirmacion(
        form.docId ? "¡Promoción actualizada con éxito!" : "¡Promoción registrada con éxito!",
        () => {
          setForm({
            docId: null,
            titulo: "",
            descripcion: "",
            imagenURL: "",
            descuento: 0,
            precioOriginal: 0,
            precioFinal: 0,
            fechaInicio: "",
            fechaFin: "",
          });
          obtenerPromociones();
        }
      );
    } else {
      setMensaje(`Error: ${response.message}`);
    }
  
    setLoading(false);
  };

  const handleEliminar = (id) => {
    confirmAlert({
      title: "¿Estás seguro?",
      message: "Esta acción eliminará la promoción.",
      buttons: [
        {
          label: "Sí",
          onClick: async () => {
            const res = await removePromocion(id);
            if (res.success) {
              obtenerPromociones();
            } else {
              alert("Error al eliminar: " + res.message);
            }
          },
        },
        {
          label: "Cancelar",
        },
      ],
    });
  };

  const handleEditar = (promo) => {
    setForm({
      ...promo,
      fechaInicio: promo.fechaInicio?.toDate().toISOString().split('T')[0] || '',
      fechaFin: promo.fechaFin?.toDate().toISOString().split('T')[0] || '',
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-[1300px] bg-white mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Gestión de Promociones</h1>

      <div className="w-full max-w-[700px] mx-auto mb-8 bg-gradient-to-r from-green-400 via-green-500 to-green-600 border border-green-600 rounded-lg shadow-lg p-6 bg-gray-50">

      <form onSubmit={handleSubmit} className="grid gap-4 mb-4 bg-white p-4 rounded shadow border border-blue-400">
        <h2 className="text-xl font-semibold text-center">
            {form.docId ? "Editar promoción" : "Crear nueva promoción"}
        </h2>

        {mensaje && (
            <div className="text-center text-white bg-green-600 p-2 rounded">
            {mensaje}
            </div>
        )}

        <div>
            <label className="block text-sm mb-1">Título</label>
            <input
            type="text"
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            placeholder="Título"
            className="w-full border border-green-600 p-2 rounded"
            required
            />
        </div>

        <div>
            <label className="block text-sm mb-1">Descripción</label>
            <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            placeholder="Descripción"
            className="w-full border border-green-600 p-2 rounded"
            required
            />
        </div>

        <div>
            <label className="block text-sm mb-1">URL de la imagen</label>
            <input
            type="url"
            name="imagenURL"
            value={form.imagenURL}
            onChange={handleChange}
            placeholder="URL de la imagen"
            className="w-full border border-green-600 p-2 rounded"
            required
            />
        </div>

        <div>
            <label className="block text-sm mb-1">Descuento (%)</label>
            <input
            type="number"
            name="descuento"
            value={form.descuento}
            onChange={handleChange}
            placeholder="Descuento (%)"
            className="w-full border border-green-600 p-2 rounded"
            required
            />
        </div>

        <div>
            <label className="block text-sm mb-1">Precio original</label>
            <input
            type="number"
            name="precioOriginal"
            value={form.precioOriginal}
            onChange={handleChange}
            placeholder="Precio original"
            className="w-full border border-green-600 p-2 rounded"
            />
        </div>

        <div>
            <label className="block text-sm mb-1">Precio con descuento</label>
            <input
            type="number"
            name="precioFinal"
            value={form.precioFinal}
            onChange={handleChange}
            placeholder="Precio con descuento"
            className="w-full border border-green-600 p-2 rounded"
            />
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div>
            <label className="block text-sm mb-1">Fecha de inicio (dd/mm/yyyy)</label>
            <input
                type="date"
                name="fechaInicio"
                value={form.fechaInicio}
                onChange={handleChange}
                className="border border-green-600 p-2 rounded"
                required
            />
            </div>
            <div>
            <label className="block text-sm mb-1">Fecha de fin (dd/mm/yyyy)</label>
            <input
                type="date"
                name="fechaFin"
                value={form.fechaFin}
                onChange={handleChange}
                className="border border-green-600 p-2 rounded"
                required
            />
            </div>
        </div>

        <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
            {loading
            ? form.docId
                ? "Actualizando..."
                : "Guardando..."
            : form.docId
            ? "Actualizar promoción"
            : "Crear promoción"}
        </button>
        </form>
      </div>


      <h2 className="text-2xl text-center bold mb-4">Promociones registradas</h2>
      {promociones.length === 0 ? (
        <p>No hay promociones registradas.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 border border-green-950 p-4 rounded shadow">
          {promociones.map((promo) => (
            <div key={promo.docId} className="bg-white p-4 rounded shadow border border-green-950">
              <img
                src={promo.imagenURL}
                alt={promo.titulo}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="font-bold text-lg">{promo.titulo}</h3>
              <p className="text-sm">{promo.descripcion}</p>
              <p className="text-sm mt-1">
                Descuento: <strong>{promo.descuento}%</strong>
              </p>
              <p className="text-sm">
                Precio:{" "}
                <del className="text-red-500">S/ {promo.precioOriginal}</del>{" "}
                <strong className="text-green-600">S/ {promo.precioFinal}</strong>
              </p>
              <p className="text-xs mt-1">
                Vigencia: {promo.fechaInicio?.toDate().toLocaleDateString()} - {promo.fechaFin?.toDate().toLocaleDateString()}
              </p>
              <div className="flex justify-between mt-2 text-sm">
                <button
                  onClick={() => handleEditar(promo)}
                  className="text-blue-600 hover:underline border border-blue-600 rounded px-2 py-1"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleEliminar(promo.docId)}
                  className="text-red-600 hover:underline border border-red-600 rounded px-2 py-1"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GestionPromocionesPage;