import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../services/firebase";

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { resetPassword } from "../hooks/useAuth";
import { toast, Toaster } from 'react-hot-toast'; // Usamos 'react-hot-toast' para las notificaciones
import Modal from 'react-modal';

const FormularioLogin = () => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  const [loginError, setLoginError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [emailForReset, setEmailForReset] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuario autenticado exitosamente");
      navigate("/admin");
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      setLoginError("Credenciales incorrectas o usuario no registrado.");
      toast.error("Credenciales incorrectas o usuario no registrado."); // Mostramos el error con Toaster
    }
  };

  const handlePasswordReset = async () => {
    if (!emailForReset) {
      toast.error("Por favor, ingresa un correo."); // Error si el campo está vacío
      return;
    }

    try {
      const result = await resetPassword(emailForReset); // Llamada a la función de recuperación
      if (result.success) {
        toast.success("Correo de recuperación enviado exitosamente."); // Mensaje de éxito
        setIsModalOpen(false); // Cerrar el modal si es exitoso
      } else {
        toast.error(result.error); // Mostrar error si algo salió mal
      }
    } catch (error) {
      toast.error("Hubo un error al intentar recuperar la contraseña."); // Error general si la función falla
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 my-10">
      <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 py-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-yellow-300 text-center">Iniciar Sesión</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700">Correo electrónico</label>
            <input
              type="email"
              placeholder="tucorreo@dominio.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Correo inválido"
                }
              })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Contraseña</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="*****"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("password", {
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 6,
                    message: "Mínimo 6 caracteres"
                  }
                })}
              />
              <button 
                type="button" 
                onClick={() => setPasswordVisible(!passwordVisible)}  
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {loginError && <p className="text-red-500 text-sm text-center">{loginError}</p>}

          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Iniciar sesión
          </button>

          <div className="flex justify-between items-center gap-8">
            <span className="text-sm text-gray-600">¿Olvidaste tu contraseña?</span>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)} 
              className="text-sm text-white border rounded-lg px-2 py-1 bg-blue-600"
            >
              Recuperar
            </button>
          </div>
        </form>
      </div>

      {/* Modal para recuperar contraseña */}
      <Modal 
        isOpen={isModalOpen} 
        onRequestClose={() => setIsModalOpen(false)} 
        className="max-w-md w-full bg-white rounded-lg p-6 shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="p-6 rounded-md bg-white">
          <h3 className="text-xl font-semibold text-center mb-4">Recuperar contraseña</h3>
          <p className="text-sm text-gray-600 mb-4">Por favor ingresa tu correo para recibir las instrucciones para recuperar tu contraseña.</p>
          <input
            type="email"
            placeholder="tucorreo@dominio.com"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={emailForReset}
            onChange={(e) => setEmailForReset(e.target.value)}  // Actualizamos el estado con el correo
          />
          <div className="flex justify-end mt-4">
            <button 
              type="button"
              onClick={handlePasswordReset}
              className="bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700"
            >
              Enviar
            </button>
          </div>
        </div>
      </Modal>

      {/* Toaster para mostrar las notificaciones */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default FormularioLogin;