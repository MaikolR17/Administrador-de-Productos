import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import "./ProductList.css"

const ListaProductos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/productos')
            .then(res => setProductos(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h2> Product List: </h2>
            {productos.map((productos, index) => (
                <div key={index}>
                    <Link to={`/productos/${productos._id}`}> <h3> {productos.title} </h3>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ListaProductos;