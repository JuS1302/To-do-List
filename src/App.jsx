import { useState } from "react"
import { nanoid } from "nanoid"
import ListItem from "./components/ListItem"

function App() {
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState("")
  const [showValidation, setShowValidation] = useState(false)

  function deleteTodo(id) {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (todo === "") {
      setShowValidation(true)
      return
    }
    setTodoList([...todoList, { id: nanoid(5), content: todo }])
    setTodo("")
    setShowValidation(false)
  }

  return (
    <div className="h-screen bg-gradient-to-br from-violet-200 via-yellow-100 to-violet-100 flex justify-center items-start px-4 font-[Caveat]">
      <div className="w-full max-w-2xl bg-amber-100 rounded-3xl shadow-2xl px-8 py-6 mt-16 border border-yellow-300">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center drop-shadow">📋 Ma To-do List</h1>

        <form onSubmit={handleSubmit} className="mb-8 space-y-2">
          <label htmlFor="todo-item" className="block text-lg text-gray-800">✏️ Ajouter une tâche</label>
          <input
            value={todo}
            onChange={e => setTodo(e.target.value)}
            type="text"
            className="w-full rounded-xl px-4 py-2 border-2 border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400 transition mb-4"
            placeholder="Ex: Faire les courses..."
          />
          {showValidation && (
            <p className="text-red-500 text-sm">Veuillez écrire une tâche avant d’ajouter.</p>
          )}
          <button className="mt-4 py-2 px-4 bg-violet-400 text-white rounded-full hover:bg-violet-500 transition-all shadow-md">
            ➕ Ajouter
          </button>
        </form>

        <ul className="grid gap-4">
          {todoList.length === 0 && (
            <li className="text-gray-500 text-center">😴 Aucune tâche pour le moment...</li>
          )}
          {todoList.map(item => (
            <li
              key={item.id}
              className="bg-yellow-100 border border-yellow-200 rounded-2xl px-4 py-3 shadow-lg transform rotate-[-1deg] hover:rotate-0 transition-all"
            >
              <ListItem itemData={item} deleteTodo={deleteTodo} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
