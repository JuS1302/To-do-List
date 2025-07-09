function AddTodoForm({ todo, setTodo, energyLevel, setEnergyLevel, showValidation, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="mb-8 space-y-2">
      <label htmlFor="todo-item" className="block text-lg text-gray-800">✏️ Ajouter une tâche</label>
      <input
        value={todo}
        onChange={e => setTodo(e.target.value)}
        type="text"
        className="w-full rounded-xl px-4 py-2 border-2 border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400 transition mb-2"
        placeholder="Ex: Faire les courses..."
      />

      <label htmlFor="energy" className="block text-lg text-gray-800">💡 Niveau d'énergie</label>
      <select
        id="energy"
        value={energyLevel}
        onChange={(e) => setEnergyLevel(e.target.value)}
        className="w-full rounded-xl px-3 py-2 border-2 border-yellow-300 bg-white mb-4"
      >
        <option value="low">💤 Faible</option>
        <option value="medium">⚡ Moyenne</option>
        <option value="high">🔥 Élevée</option>
      </select>

      {showValidation && (
        <p className="text-red-500 text-sm">Veuillez écrire une tâche avant d’ajouter.</p>
      )}

      <button className="mt-4 py-2 px-4 bg-violet-400 text-white rounded-full hover:bg-violet-500 transition-all shadow-md">
        ➕ Ajouter
      </button>
    </form>
  )
}

export default AddTodoForm
