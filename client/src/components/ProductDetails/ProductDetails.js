import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const DetallesProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/productos/${id}`)
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
                </div>
            ) : (
                <p> Loading... </p>
            )}
        </div>
    );
};

export default DetallesProducto;