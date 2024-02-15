/* eslint-disable react/prop-types */
export default function Stats({ items }) {

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