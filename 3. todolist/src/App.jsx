/* eslint-disable react/prop-types */
import Header from "./components/Header";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";
import { useState } from "react";
import Footer from "./components/Footer";

/* eslint-disable no-unused-vars */
const groceryItems = [
  {
    id: 1,
    name: 'Sugar',
    quantity: 5,
    checked: true,
  },
  {
    id: 2,
    name: 'Wheat flour',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Mineral Water',
    quantity: 3,
    checked: false,
  },
  

]
export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? {...item, checked: !item.checked} : item))
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem}/>
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems}/>
      <Footer items={items}/>
    </div>  
  );
}
