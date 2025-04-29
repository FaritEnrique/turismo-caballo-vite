import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import useFormulario from '../hooks/useFormulario';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

const MensajesPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const { fetchFormularios, editarFormulario, removeFormulario } = useFormulario();
  const [formularios, setFormularios] = useState([]);
  const [respuesta, setRespuesta] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        navigate('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      const cargarFormularios = async () => {
        try {
          const formulariosObtenidos = await fetchFormularios();
          setFormularios(formulariosObtenidos);
        } catch (error) {
          console.error('Error al cargar formularios:', error);
          toast.error('Error al cargar los mensajes.');
        } finally {
          setLoading(false);
        }
      };

      cargarFormularios();
    }
  }, [isAuthenticated, fetchFormularios]);

  const enviarCorreo = async (email, mensajeRespuesta, nombre, mensajeOriginal, fechaMensaje) => {
    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || !import.meta.env.VITE_EMAILJS_USER_ID) {
      console.error('Faltan variables de entorno para EmailJS');
      toast.error('Error de configuración al enviar correo.');
      return false;
    }
    const fechaFormateada = new Date(fechaMensaje).toLocaleString();
    const templateParams = {
      name: 'Danikah Travel Turismo Caballococha',
      nombre: nombre,
      email: email,
      time: fechaFormateada,
      subject: 'Respuesta a tu mensaje',
      message: mensajeOriginal,
      respuesta: mensajeRespuesta,
    };

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      console.log('Correo enviado:', response);
      return true;
    } catch (error) {
      console.error('Error al enviar correo:', error);
      return false;
    }
  };

  const handleResponder = async (formulario) => {
    const { docId, email, nombre, mensaje, fecha } = formulario;
    const respuestaTexto = respuesta[docId]?.trim();
    if (!respuestaTexto) {
      toast.error("Por favor, ingrese una respuesta válida.");
      return;
    }
  
    try {
      const correoEnviado = await enviarCorreo(email, respuestaTexto, nombre, mensaje, fecha);
      if (!correoEnviado) return;
  
      await editarFormulario({ respondido: true, respuesta: respuestaTexto }, docId);
  
      setFormularios(prevFormularios =>
        prevFormularios.map(formulario =>
          formulario.docId === docId
            ? { ...formulario, respondido: true, respuesta: respuestaTexto }
            : formulario
        )
      );
  
      setRespuesta(prev => {
        const updated = { ...prev };
        delete updated[docId];
        return updated;
      });
  
      toast.success("Respuesta enviada correctamente.");
    } catch (error) {
      console.error('Error al responder el mensaje:', error);
      toast.error("Hubo un error al enviar la respuesta.");
    }
  };

  const handleEliminar = (docId) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300 max-w-sm mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-teal-700">¿Eliminar mensaje?</h2>
            <p className="text-gray-700 mb-6">¿Estás seguro de que deseas eliminar este mensaje? Esta acción no se puede deshacer.</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={async () => {
                  try {
                    const result = await removeFormulario(docId);
                    if (result.success) {
                      setFormularios(prevFormularios =>
                        prevFormularios.filter(formulario => formulario.docId !== docId)
                      );
                      toast.success("Formulario eliminado correctamente.");
                    } else {
                      toast.error("Hubo un problema al eliminar el formulario.");
                    }
                  } catch (error) {
                    console.error('Error al eliminar el formulario:', error);
                    toast.error("Hubo un error al eliminar el formulario.");
                  }
                  onClose();
                }}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
              >
                Sí, eliminar
              </button>
              <button
                onClick={onClose}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
              >
                Cancelar
              </button>
            </div>
          </div>
        );
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold animate-pulse">Cargando mensajes...</p>
      </div>
    );
  }

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-teal-800">Mensajes de Contacto</h1>
      <div className="space-y-6 max-w-3xl mx-auto">
        {formularios.length > 0 ? (
          formularios.map((formulario) => (
            <div
              key={formulario.docId}
              className="border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <p className="mb-2"><strong>Nombre:</strong> {formulario.nombre}</p>
              <p className="mb-2"><strong>Correo:</strong> {formulario.email}</p>
              <p className="mb-4"><strong>Mensaje:</strong> {formulario.mensaje}</p>

              {formulario.respondido ? (
                <p className="text-green-600 font-semibold">
                  <strong>Respuesta:</strong> {formulario.respuesta}
                </p>
              ) : (
                <div className="flex flex-col space-y-4">
                  <textarea
                    value={respuesta[formulario.docId] || ''}
                    onChange={(e) => setRespuesta(prev => ({
                      ...prev,
                      [formulario.docId]: e.target.value
                    }))}
                    placeholder="Escribe tu respuesta..."
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    rows="4"
                  />
                  <div className="flex flex-col sm:flex-row sm:space-x-4 sm:justify-between">
                    <button
                      onClick={() => handleResponder(formulario)}
                      className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2 px-6 rounded transition duration-300 w-full sm:w-auto"
                    >
                      Responder
                    </button>
                    
                  </div>
                </div>
              )}
              {formulario.respondido && (
                <div className="mt-4">
                  <button
                    onClick={() => handleEliminar(formulario.docId)}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition duration-300 w-full sm:w-auto"
                  >
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No hay mensajes para mostrar.</p>
        )}
      </div>
    </section>
  );
};

export default MensajesPage;