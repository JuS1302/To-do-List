export default function ListItem({ itemData, deleteTodo }) {
  return (
    <div className="flex items-start justify-between">
      <span className="text-lg text-gray-800 leading-snug break-words max-w-[85%]">
        {itemData.content}
      </span>
      <button
        onClick={() => deleteTodo(itemData.id)}
        className="ml-3 text-red-400 hover:text-red-600 font-bold text-lg transform transition hover:scale-110"
        title="Supprimer la tâche"
      >
        ✖️
      </button>
    </div>
  )
}
