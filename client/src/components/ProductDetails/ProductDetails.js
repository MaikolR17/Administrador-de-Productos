import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import DeleteButton from "../DeleteButton/DeleteButton";

import "./ProductDetails.css";

const DetallesProducto = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        axios.get(`https://administrador-de-productos.onrender.com/api/productos/${id}`)
            .then(res => setProducto(res.data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            {producto ? (
                <div>
                    <h2>{producto.title}</h2>
                    <p> Price: {producto.price}</p>
                    <p>{producto.description}</p>
                    <button onClick={() => navigate(`/productos/${producto._id}/edit`)}> Edit </button>
                    <DeleteButton productId={producto._id} onSuccess={() => navigate('/')} />
                </div>
            ) : (
                <p> Loading... </p>
            )}
        </div>
    );
};

export default DetallesProducto;