/* eslint-disable react/prop-types */
import { Trash2 } from 'lucide-react'


export default function Item({ item, onDeleteItem, onToggleItem }) {
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