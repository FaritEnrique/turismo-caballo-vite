import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useFormulario from '../hooks/useFormulario';  // Asegúrate de que el hook esté en la ruta correcta

const FormularioContacto = () => {
  const { t } = useTranslation('contacto');
  const { crearFormulario } = useFormulario(); // Hook para crear formulario en Firebase

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Handle change en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "message") {
      // Autoexpandir textarea
      e.target.style.height = "auto"; // Reset primero
      e.target.style.height = `${e.target.scrollHeight}px`; // Ajusta al contenido
    }
  
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { id, newFormulario } = await crearFormulario(formData);
      setIsSubmitting(false);
      setSubmitMessage(t('mensajeExito')); // Mensaje de éxito al crear el formulario
      setFormData({ name: '', email: '', message: '' }); // Limpiar el formulario
    } catch (error) {
      setIsSubmitting(false);
      setSubmitMessage(t('mensajeError')); // Mensaje de error si falla
    }
  };

  return (
    <section className="w-full max-w-lg mx-auto mb-6">
      <h3 className="text-2xl font-bold text-teal-900 mb-4">{t('tituloFormulario')}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium text-gray-800">{t('nombre')}</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-medium text-gray-800">{t('correo')}</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg font-medium text-gray-800">{t('mensaje')}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="min-h-[120px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
            /* className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" */
            required
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 text-white rounded-xl ${isSubmitting ? 'bg-gray-400' : 'bg-teal-800 hover:bg-teal-900'}`}
          >
            {isSubmitting ? t('enviando') : t('enviar')}
          </button>
        </div>
      </form>
      {submitMessage && <p className="text-center text-green-500 mt-4">{submitMessage}</p>}
    </section>
  );
};

export default FormularioContacto;