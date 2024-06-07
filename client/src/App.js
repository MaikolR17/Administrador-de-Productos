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
        <Routes>
          <Route path="/" element={
            <>
              <h1> Product Manager </h1>
              <FormularioProducto />
              <hr></hr>
              <ListaProductos />
            </>
          } />
          
          <Route  path="/productos/:id" element={<DetallesProducto />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
