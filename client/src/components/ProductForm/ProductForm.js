import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import "./Producto.css";

const FormularioProducto = ({ isEdit = false}) => {
  const [product, setProduct] = useState({ title: "", price: "", description: "", });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (isEdit) {
      axios.get(`https://administrador-de-productos.onrender.com/api/productos/${id}`)
        .then(res => {
          setProduct(res.data);
        })
        .catch(err => console.log(err));
    }
  }, [id, isEdit]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const apiCall = isEdit
      ? axios.put(`https://administrador-de-productos.onrender.com/api/productos/${id}`, product)
      : axios.post("https://administrador-de-productos.onrender.com/api/productos", product);
    
    apiCall.then(res => {
      console.log(res);
      navigate("/");
    }).catch(err => console.error(err));
  };

  const OnChangeHandler = (e) => {
    setProduct({
     ...product,
      [e.target.name]: e.target.value});
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label> Title: </label>
        <input
          type="text"
          name="title"
          onChange={OnChangeHandler}
          value={product.title} />
      </div>
      <div>
        <label> Price: </label>
        <input
          type="number"
          name="price"
          onChange={OnChangeHandler}
          value={product.price} />
      </div>
      <div>
        <label> Description: </label>
        <input
          type="text"
          name="description"
          onChange={OnChangeHandler}
          value={product.description} />
      </div>
      <button type="submit"> {isEdit ? "Update" : "Create"} </button>
    </form>
  );
};

export default FormularioProducto;