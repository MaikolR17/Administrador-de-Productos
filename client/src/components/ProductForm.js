import React, { useState } from "react";
import axios from "axios";

import "./Producto.css";

const FormularioProducto = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const NuevoProducto = {
      title,
      price,
      description,
    };

    axios.post("http://localhost:8000/api/productos", NuevoProducto)
      .then((res) => {
        console.log(res);
        setTitle("");
        setPrice("");
        setDescription("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label> Title: </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title} />
      </div>
      <div>
        <label> Price: </label>
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price} />
      </div>
      <div>
        <label> Description: </label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description} />
      </div>
      <button type="submit"> Create </button>
    </form>
  );
};

export default FormularioProducto;