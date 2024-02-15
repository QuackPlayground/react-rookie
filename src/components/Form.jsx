/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Form({ onAddItems }) {

    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if(!description) return;
  
      const newItem = {description, quantity, packed: false, id:Date.now()}
      console.log(newItem);
  
      onAddItems(newItem)
  
      setDescription('')
      setQuantity(1)
      
    }
  
  
    return (
      <form className="flex mt-6 text-center justify-center backdrop-sepia-0 bg-white/30 py-3 px-3 rounded-lg" onSubmit={handleSubmit}>
        <h3 className="py-2 text-lg font-semibold mr-4">What do you need for your trip? 😍</h3>
        <select className="mr-2 rounded-md px-2 py-1 bg-slate-200" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          { Array.from({length: 20}, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>) }
        </select>
        <input 
          type="text" 
          placeholder="Item..." 
          value={description}
          className="rounded-md bg-slate-100 px-2 mr-2"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-green-600 rounded-lg py-2 px-2 text-white">Add</button>
      </form>
    )
}