function Item({ item, eliminarItem }) {
  return (
    <div style={{ marginTop: "10px" }}>
      {item.nombre} - {item.cantidad}

      <button onClick={() => eliminarItem(item.id)}>
        Eliminar
      </button>
    </div>
  );
}

export default Item;