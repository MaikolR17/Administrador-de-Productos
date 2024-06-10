import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

import "./ProductDetails.css";

const DetallesProducto = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/productos/${id}`)
            .then(res => setProducto(res.data))
            .catch(err => console.log(err));
    }, [id]);

    const eliminarProducto = () => {
        axios.delete(`http://localhost:8000/api/productos/${id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err));
    };

    return (
        <div>
            {producto ? (
                <div>
                    <h2>{producto.title}</h2>
                    <p> Price: {producto.price}</p>
                    <p>{producto.description}</p>
                    <button onClick={eliminarProducto}> Delete </button>
                    <button onClick={() => navigate(`/productos/${producto._id}/edit`)}> Edit </button>
                </div>
            ) : (
                <p> Loading... </p>
            )}
        </div>
    );
};

export default DetallesProducto;