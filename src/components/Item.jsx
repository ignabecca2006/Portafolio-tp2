function Item({ item, eliminarItem }) {
  return (
    <div style={{ marginTop: "10px" }}>
      {item.nombre} : {item.cantidad}

      <button onClick={() => eliminarItem(item.id)}
          style={{ marginLeft: "20px" }}
          >
        Eliminar
      </button>
    </div>
  );
}

export default Item;