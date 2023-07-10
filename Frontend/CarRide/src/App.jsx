import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "../src/Pages/Home/Home";
import RegistroUsuario from "./Components/RegistroUsuario/RegistroUsuario";
import CrearProducto from "./Components/CrearProducto/CrearProducto";
import DetalleProducto from "./Components/Detalle/detalle-producto";
import Resultados from "./Components/Categorias/Resultados";
import CrearCategoria from "./Components/Categorias/Categorias";
import Eliminar from "./Components/Eliminar/EliminarVehiculo";
import Panel from "./Components/Panel/Panel";
import Login from "./Components/Login/Login";
import Cerrar from "./Components/Cerrar/cerrar";
import AsignarRoles from "./Components/AsignarRoles/AsignarRoles";
import FiltroFechasProvider from "./Components/FiltroFechas/context";
import { AuthProvider } from "./Hooks/useAuth";

function App() {
  return (
  <AuthProvider>
    <FiltroFechasProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RegistroUsuario" element={<RegistroUsuario />} />
          <Route path="/CrearProducto" element={<CrearProducto />} />
          <Route path="/detalle-producto/:id" element={<DetalleProducto />} />
          <Route path="/resultados/:categoria" element={<Resultados />} />
          <Route path="/CrearCategoria" element={<CrearCategoria />} />
          <Route path="Eliminar" element={<Eliminar />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/InicioSesion" element={<Login />} />
          <Route path="/Cerrar" element={<Cerrar />} />
          <Route path="/AsignarRoles" element={<AsignarRoles />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </FiltroFechasProvider>
  </AuthProvider>
  );
}

export default App;
