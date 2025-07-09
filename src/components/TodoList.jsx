import ListItem from "./ListItem"

function TodoList({ todoList, energyFilter, deleteTodo }) {
  const filtered = todoList.filter(item => energyFilter === "all" || item.energy === energyFilter)

  if (filtered.length === 0) {
    return <p className="text-gray-500 text-center">😴 Aucune tâche à afficher...</p>
  }

  return (
    <ul className="grid gap-4">
      {filtered.map(item => (
        <li
          key={item.id}
          className="bg-yellow-100 border border-yellow-200 rounded-2xl px-4 py-3 shadow-lg transform rotate-[-1deg] hover:rotate-0 transition-all"
        >
          <ListItem itemData={item} deleteTodo={deleteTodo} />
        </li>
      ))}
    </ul>
  )
}

export default TodoList
