import { useState } from "react";
import FormItem from "./components/FormItem";
import "./App.css";
import ListaItems from "./components/ListaItem";
function App() {
  const [items, setItems] = useState([]);

  const agregarItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className= "App">
      <h1>Lista de Compras</h1>
      <FormItem agregarItem={agregarItem} />
      <ListaItems items={items} />
    </div>
  );
}

export default App;