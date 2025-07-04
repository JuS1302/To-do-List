export default function ListItem({itemData, deleteTodo}) {
  return (
    <li className="p-2 bg-zinc-100 mb-2 rounded flex">
      <span>{itemData.content}</span>
      <button onClick={() => deleteTodo(itemData.id)} className="ml-auto bg-red-500 w-6 h-6 rounded text-zinc-100 shadow-md">X</button>

    </li>
  )
}
