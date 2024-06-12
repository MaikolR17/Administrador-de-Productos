import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from '../DeleteButton/DeleteButton';

import "./ProductList.css"

const ListaProductos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/productos')
            .then(res => setProductos(res.data))
            .catch(err => console.log(err));
    }, []);

    const eliminarDelDom = productId => {
        setProductos(productos.filter(product => product._id !== productId));
    };

    return (
      <div>
        <h2> Product List: </h2>
        {productos.map((productos, index) => (
          <div key={index}>
            <Link to={`/productos/${productos._id}`}>
              <h3> {productos.title} </h3>
            </Link>
            <Link to={`/productos/${productos._id}/edit`} className='edit'>Edit</Link>
            <DeleteButton
              productId={productos._id}
              onSuccess={() => eliminarDelDom(productos._id)}
            />
          </div>
        ))}
      </div>
    );
};

export default ListaProductos;