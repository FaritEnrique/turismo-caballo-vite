import React from 'react'
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import ContactoPage from './pages/ContactoPage';
import { AuthProvider } from '../src/hooks/useAuth';
import { HelmetProvider } from 'react-helmet-async';
import FaunaPage from './pages/FaunaPage';
import FloraPage from './pages/FloraPage';
import FestividadesPage from './pages/FestividadesPage';
import LocationPage from './pages/LocationPage';
import LocalidadesPage from './pages/LocalidadesPage';
import PaquetesPage from './pages/PaquetesPage';
import PromocionesPage from './pages/PromocionesPage';
import GaleriaPage from './pages/GaleriaPage';
import LoginForm from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import NewHomePage from './pages/NewHomePage';
import NosotrosPage from './pages/NosotrosPage';
import GestionGaleriaPage from './pages/GestionGaleriaPage';
import GestionPromocionesPage from './pages/GestionPromocionesPages';
import MensajesPage from './pages/MensajesPage';
import ProtectedRoute from './components/ProtectedRoute';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <AuthProvider>
      <HelmetProvider>
        <BrowserRouter>
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 5000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                style: {
                  background: 'green',
                },
              },
              error: {
                style: {
                  background: 'red',
                },
              },
            }}
          />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<NewHomePage />} />
              <Route path="/nosotros" element={<NosotrosPage />} />
              <Route path="/contacto" element={<ContactoPage />} />
              <Route path="/fauna" element={<FaunaPage />} />
              <Route path="/flora" element={<FloraPage />} />
              <Route path="/festividades" element={<FestividadesPage />} />
              <Route path="/ubicacion" element={<LocationPage />} />
              <Route path="/localidades" element={<LocalidadesPage />} />
              <Route path="/paquetes" element={<PaquetesPage />} />
              <Route path="/promociones" element={<PromocionesPage />} />
              <Route path="/galeria" element={<GaleriaPage />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
              <Route path="/gestion-galeria" element={<ProtectedRoute><GestionGaleriaPage /></ProtectedRoute>} />
              <Route path="/gestion-promociones" element={<ProtectedRoute><GestionPromocionesPage /></ProtectedRoute>} />
              <Route path="/gestion-mensajes" element={<ProtectedRoute><MensajesPage /></ProtectedRoute>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </AuthProvider>
  )
}

export default App