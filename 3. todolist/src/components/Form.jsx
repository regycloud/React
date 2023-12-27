/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Form({onAddItem}) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(e) {
      e.preventDefault();
      if(!name) return;
      const newItem = {
        name,
        quantity,
        checked: false,
        id: Date.now()
      }
      onAddItem(newItem);
      console.log(newItem);
  
      setName('');
      setQuantity(1);
    }
  
    const quantityNum = [...Array(20)].map((_, i) => (
      <option value={i+1} key={i+1}>{i+1}</option>
    ));
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What are we going to buy?</h3>
        <div>
          <select onChange={(e) => setQuantity(Number(e.target.value))}>
            {quantityNum}
          </select>
          <input type="text" placeholder="Insert item..." value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <button>Add to List</button>
      </form>
    )
  }