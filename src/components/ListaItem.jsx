function ListaItems({ items }) {
  return (
    <div>
      <h2>Lista</h2>

      {items.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        items.map((item) => (
          <div key={item.id}>
            {item.nombre} - {item.cantidad}
          </div>
        ))
      )}
    </div>
  );
}

export default ListaItems;