/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {

    const [sortBy, setSortBy] = useState('input');
  
    let sortedItems;
  
    if (sortBy === 'input') sortedItems = items;
  
    if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
  
    if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
  
    return(
      <div className='content-between'>
        <div className='flex justify-center mt-4'>
          <ul className='flex flex-wrap space-x-8'>
            {sortedItems.map((item) => (
              <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
            ))}
          </ul>
        </div>
  
        <div className='flex justify-center text-center mt-4'>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className='rounded-md px-2 py-1 bg-slate-200 text-lg mr-4'>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
  
          &nbsp;
  
          <button className='ms-3 rounded-md px-3 py-2 bg-red-600 text-white' onClick={onClearList}>Clear List</button>
  
        </div>
  
      </div>
    )
}