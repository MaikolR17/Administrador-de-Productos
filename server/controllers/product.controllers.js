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

module.exports.obtenerProducto = (req, res) => {
  Producto.findById(req.params.id)
    .then((producto) => res.json(producto))
    .catch((err) => res.json(err));
};

module.exports.actualizarProducto = (req, res) => {
  Producto.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then((producto) => res.json(producto))
    .catch((err) => res.json(err));
};

module.exports.eliminarProducto = (req, res) => { 
  Producto.findByIdAndDelete(req.params.id)
   .then((producto) => res.json(producto))
   .catch((err) => res.json(err));
}