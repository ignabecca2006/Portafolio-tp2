import Item from "./Item";

function ListaItems({ items, eliminarItem }) {
  return (
    <div>
      <h2>Lista</h2>

      {items.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        items.map((item) => (
          <Item 
            key={item.id} 
            item={item} 
            eliminarItem={eliminarItem} 
          />
        ))
      )}
    </div>
  );
}

export default ListaItems;