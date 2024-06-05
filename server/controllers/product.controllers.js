const Producto = require("../models/product.model");

module.exports.crearProducto = (req, res) => {
  Producto.create(req.body)
    .then((producto) => res.json(producto))
    .catch((err) => res.json(err));
};

module.exports.obtenerProductos = (req, res) => {
  Producto.find()
    .then((productos) => res.json(productos))
    .catch((err) => res.json(err));
};
