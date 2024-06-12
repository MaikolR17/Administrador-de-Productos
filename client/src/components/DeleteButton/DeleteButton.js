import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteButton = ({ productId, onSucess }) => {
    const navigate = useNavigate();

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/productos/${productId}`)
            .then(res => {
                console.log(res);
                onSucess && onSucess();
                navigate("/")
            })
            .catch(err => console.log(err));
    };

    return (
        <button onClick={deleteProduct}> Delete </button>
    );
};

export default DeleteButton;