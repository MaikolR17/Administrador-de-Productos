const ControladorProducto = require("../controllers/product.controllers");

module.exports = function (app) {
  app.get("/api/productos", ControladorProducto.obtenerProductos);
  app.post("/api/productos", ControladorProducto.crearProducto);
  app.get("/api/productos/:id", ControladorProducto.obtenerProducto);
  app.put("/api/productos/:id", ControladorProducto.actualizarProducto);
  app.delete("/api/productos/:id", ControladorProducto.eliminarProducto);
};