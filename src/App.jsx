import { useState } from "react"
import {nanoid} from "nanoid"
import ListItem from "./components/ListItem"


function App() {

  const [todoList, setTodoList] = useState([
    // {id: nanoid(3), content: "Tâche 1"},
    // {id: nanoid(3), content: "Tâche 2"},
    // {id: nanoid(3), content: "Tâche 3"},
  ])

  const [todo, setTodo] = useState("")

  const [showValidation, setShowValidation] = useState(false)

  function deleteTodo(id) {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  function handleSubmit(e){
    e.preventDefault()
    if(todo === ""){
      setShowValidation(true)
      return
    }

    setTodoList([...todoList, {id: nanoid(3), content: todo}])
    setTodo("")
    setShowValidation(false)
  }

  return (
   <div className="h-screen bg-violet-200 flex justify-center">
    <div className="w-full max-w-xl bg-amber-200 rounded-2xl shadow-xl px-6 py-4 mt-16 self-start">
      <h1 className="text-4xl font-bold text-gray-950 mb-4">📋 To-do List</h1>
      <form onSubmit={handleSubmit} className="mb-10">
        <label htmlFor="todo-item" className="text-gray-900">✅ Ajouter une tâche</label>
        <input
        value={todo}
        onChange={e => setTodo(e.target.value)}
        type="text"
        className="mt-1 block w-full rounded border-gray-400"
        />
        {showValidation && (<p className="text-red-400">Ecrivez une tâche pour l'ajouter</p>)}
        <button className="mt-4 py-2 px-2 bg-violet-300 shadow-md rounded min-w-[115px]">Ajouter</button>
      </form>
      <ul>
        {todoList.length === 0 && (
          <li className="text-grey-50 text-sm">😕 Pas de tâche à afficher... </li>
        )}
        {todoList.length > 0 && todoList.map(item => (
          <ListItem key={item.id} itemData={item} deleteTodo = {deleteTodo}/>
        ))}

      </ul>
    </div>
   </div>
  )
}

export default App
