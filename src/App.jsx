import { Trash2 } from 'lucide-react'

/* eslint-disable react/prop-types */
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  return(
    <div className="app h-screen w-screen bg-gradient-to-r from-blue-200 to-cyan-200">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

function Logo() {
  return <h1 className="justify-center pt-4 text-center text-4xl font-semibold">🏝️ Letz Trip 💼</h1>
}

function Form() {
  return (
    <form className="flex mt-6 text-center justify-center backdrop-sepia-0 bg-white/30 py-3 px-3 rounded-lg">
      <h3 className="py-2 text-lg font-semibold mr-4">What do you need for your trip? 😍</h3>
      <select className="mr-2 rounded-md px-2 py-1 bg-slate-200">
        { Array.from({length: 20}, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>) }
      </select>
      <input type="text" placeholder="Item..." className="rounded-md bg-slate-100 px-2 mr-2"/>
      <button className="bg-green-600 rounded-lg py-2 px-2 text-white">Add</button>
    </form>
  )
}


function PackingList() {
  return(
    <div className='flex justify-center mt-4'>
      <ul className='flex flex-row space-x-8'>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}


function Item({ item }) {
  return (
    <li className='flex items-center space-x-3 backdrop-blur-0 bg-yellow-200/30 px-3 py-3 rounded-xl text-lg'>
      <span>
        {item.quantity} {item.description}
      </span>
      <button><Trash2 color="#ff0000" size={20}/></button>
    </li>
  )
}


function Stats() {
  return (
    <footer className='fixed bottom-0 w-full bg-gray-200 text-center p-4 font-semibold text-lg'>
      <em>
        💼 You have X items on your list, and you already packed X (X%)
      </em>
    </footer>
  )
}