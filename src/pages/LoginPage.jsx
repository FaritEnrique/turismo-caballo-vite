import { useForm } from "react-hook-form";
import FormularioLogin from "../components/FormularioLogin";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <FormularioLogin />
    </div>
  );
};

export default LoginForm;
