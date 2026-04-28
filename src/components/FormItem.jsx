import { useState } from "react";

function FormItem({ agregarItem }) {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "" || Number(cantidad) <= 0) {
      alert("Datos inválidos");
      return;
    }

    const nuevoItem = {
      id: Date.now(),
      nombre,
      cantidad: Number(cantidad),
      comprado: false
    };

    agregarItem(nuevoItem);

    setNombre("");
    setCantidad("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Producto"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="number"
        placeholder="Cantidad"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />

      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormItem;