import React from 'react'
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import { HelmetProvider } from 'react-helmet-async';
import FaunaPage from './pages/FaunaPage';
import FloraPage from './pages/FloraPage';
import FestividadesPage from './pages/FestividadesPage';
import LocationPage from './pages/LocationPage';
import LocalidadesPage from './pages/LocalidadesPage';
import PaquetesPage from './pages/PaquetesPage';
import PromocionesPage from './pages/PromocionesPage';

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/fauna" element={<FaunaPage />} />
            <Route path="/flora" element={<FloraPage />} />
            <Route path="/festividades" element={<FestividadesPage />} />
            <Route path="/ubicacion" element={<LocationPage />} />
            <Route path="/localidades" element={<LocalidadesPage />} />
            <Route path="/paquetes" element={<PaquetesPage />} />
            <Route path="/promociones" element={<PromocionesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App