import { useState } from "react"
import { nanoid } from "nanoid"
import AddTodoForm from "./components/AddTodoForm"
import EnergyFilter from "./components/EnergyFilter"
import TodoList from "./components/TodoList"

function App() {
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState("")
  const [energyLevel, setEnergyLevel] = useState("medium")
  const [showValidation, setShowValidation] = useState(false)
  const [energyFilter, setEnergyFilter] = useState("all")

  function deleteTodo(id) {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (todo.trim() === "") {
      setShowValidation(true)
      return
    }

    setTodoList([
      ...todoList,
      {
        id: nanoid(5),
        content: todo,
        energy: energyLevel
      }
    ])
    setTodo("")
    setEnergyLevel("medium")
    setShowValidation(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-200 via-yellow-100 to-violet-100 flex justify-center items-start px-4 py-10 font-[Caveat]">
      <div className="w-full max-w-2xl bg-amber-100 rounded-3xl shadow-2xl px-8 py-6 mt-16 border border-yellow-300">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center drop-shadow">📋 Ma To-do List</h1>

        <AddTodoForm
          todo={todo}
          setTodo={setTodo}
          energyLevel={energyLevel}
          setEnergyLevel={setEnergyLevel}
          showValidation={showValidation}
          onSubmit={handleSubmit}
        />

        <EnergyFilter
          energyFilter={energyFilter}
          setEnergyFilter={setEnergyFilter}
        />

        <TodoList
          todoList={todoList}
          energyFilter={energyFilter}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}

export default App
