/* eslint-disable react/prop-types */
import { Trash2 } from 'lucide-react'
import { useState } from 'react';



export default function App() {

  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItems(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to delete all items?')
    if(confirmed) setItems([]);
  }

  return(
    <div className="app h-screen w-screen bg-gradient-to-r from-blue-200 to-cyan-200">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItems} onToggleItem={handleToggleItem} onClearList={handleClearList}/>
      <Stats items={items}/>
    </div>
  )
}

function Logo() {
  return <h1 className="justify-center pt-4 text-center text-4xl font-semibold">🏝️ Letz Trip 💼</h1>
}

function Form({ onAddItems }) {

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


function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {

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


function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className='flex items-center space-x-3 backdrop-blur-0 bg-yellow-200/30 px-3 py-3 rounded-xl text-lg mb-3 ms-2'>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}><Trash2 color="#ff0000" size={20}/></button>
    </li>
  )
}


function Stats({ items }) {

  if(!items.length) return <p className='fixed bottom-0 w-full bg-gray-200 text-center p-4 font-semibold text-lg'><em>Start adding some items to your packing list 🚀</em></p>

  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentage = Math.round(numPacked / numItems * 100) 

  return (
    <footer className='fixed bottom-0 w-full bg-gray-200 text-center p-4 font-semibold text-lg'>
      <em>
        { percentage === 100 ? 'You got everything! Ready to go ✈️' : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} ( ${percentage} %)`}
      </em>
    </footer>
  )
}