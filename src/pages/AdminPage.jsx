import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="flex items-center justify-center py-8 bg-gray-100">
      <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 py-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-yellow-300 text-center">Administración</h2>
        </div>
        <div className="space-y-4 mt-6">
          <Link 
            to="/gestion-galeria" 
            className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Galería
          </Link>
          <Link 
            to="/gestion-promociones" 
            className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Promociones
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
