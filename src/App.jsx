import { useState } from "react";
import FormItem from "./components/FormItem";
import "./App.css";
import ListaItems from "./components/ListaItem";
function App() {
  const [items, setItems] = useState([]);

  const agregarItem = (item) => {
    setItems([...items, item]);
  };
  const eliminarItem = (id) => {
  const nuevaLista = items.filter((item) => item.id !== id);
  setItems(nuevaLista);
};

  return (
    <div className= "App">
      <h1>Lista de Compras</h1>
      <FormItem agregarItem={agregarItem} />
      <ListaItems 
      items={items}
      eliminarItem={eliminarItem} 
      />
    </div>
  );
}

export default App;