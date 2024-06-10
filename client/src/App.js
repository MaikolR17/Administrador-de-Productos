import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormularioProducto from "./components/ProductForm/ProductForm";
import ListaProductos from "./components/ProductList/ProductList";
import DetallesProducto from "./components/ProductDetails/ProductDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1> Product Manager </h1>
        <Routes>
          <Route path="/" element={<ListaProductos />} />
          <Route path="/productos/:id" element={<DetallesProducto />} />
          <Route path="/productos/:id/edit" element={<FormularioProducto isEdit={true} /> } />
          <Route path="/crear" element={<FormularioProducto />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
