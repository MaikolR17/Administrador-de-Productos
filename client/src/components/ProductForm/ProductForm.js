import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import "./Producto.css";

const FormularioProducto = ({ isEdit = false}) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (isEdit) {
      axios.get(`http://localhost:8000/api/productos/${id}`)
        .then(res => {
          setTitle(res.data.title);
          setPrice(res.data.price);
          setDescription(res.data.description);
        })
        .catch(err => console.log(err));
    }
  }, [id, isEdit]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const producto = {
      title,
      price,
      description,
    };

    if (isEdit) {
      axios
        .put(`http://localhost:8000/api/productos/${id}`, producto)
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      axios.post("http://localhost:8000/api/productos", producto)
        .then((res) => {
          console.log(res);
          setTitle("");
          setPrice("");
          setDescription("");
        })
        .catch((err) => console.error(err));
    }
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
      <button type="submit"> {isEdit ? "Update" : "Create"} </button>
    </form>
  );
};

export default FormularioProducto;