import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import useFormulario from '../hooks/useFormulario';
import emailjs from '@emailjs/browser';  // Usar el nuevo SDK

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
        const formulariosObtenidos = await fetchFormularios();
        setFormularios(formulariosObtenidos);
        setLoading(false);
      };

      cargarFormularios();
    }
  }, [isAuthenticated, fetchFormularios]);

  // Función para enviar el correo usando EmailJS
  const enviarCorreo = async (email, mensajeRespuesta) => {
    const templateParams = {
      to_email: email,  // Correo del destinatario
      subject: 'Respuesta a tu mensaje', // Asunto del correo
      message: mensajeRespuesta, // Cuerpo del mensaje
    };

    try {
      const response = await emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id');
      console.log('Correo enviado:', response);
      return true; // Si el correo se envía correctamente
    } catch (error) {
      console.error('Error al enviar correo:', error);
      return false; // Si ocurre un error
    }
  };

  const handleResponder = async (docId, email) => {
    const respuestaTexto = respuesta[docId]?.trim();
    if (!respuestaTexto) {
      alert("Por favor, ingrese una respuesta válida.");
      return;
    }

    try {
      // Enviar correo
      const correoEnviado = await enviarCorreo(email, respuestaTexto);
      if (!correoEnviado) return;

      // Actualizar el formulario en Firebase
      await editarFormulario(docId, { respondido: true, respuesta: respuestaTexto });

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
    } catch (error) {
      console.error('Error al responder el mensaje:', error);
    }
  };

  const handleEliminar = async (docId) => {
    try {
      const result = await removeFormulario(docId);
      if (result.success) {
        setFormularios(prevFormularios =>
          prevFormularios.filter(formulario => formulario.docId !== docId)
        );
        console.log('Formulario eliminado');
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error al eliminar el formulario:', error);
    }
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
                <div className="flex flex-col">
                  <textarea
                    value={respuesta[formulario.docId] || ''}
                    onChange={(e) => setRespuesta(prev => ({
                      ...prev,
                      [formulario.docId]: e.target.value
                    }))} 
                    placeholder="Escribe tu respuesta..."
                    className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    rows="4"
                  />
                  <div className="flex justify-between">
                    <button
                      onClick={() => handleResponder(formulario.docId, formulario.email)}
                      className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2 px-6 rounded transition duration-300"
                    >
                      Responder
                    </button>
                    <button
                      onClick={() => handleEliminar(formulario.docId)}
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
                    >
                      Eliminar
                    </button>
                  </div>
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