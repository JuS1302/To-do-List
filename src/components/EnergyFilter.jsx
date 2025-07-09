function EnergyFilter({ energyFilter, setEnergyFilter }) {
  return (
    <div className="mb-6">
      <label htmlFor="energy-filter" className="block text-gray-800 text-lg mb-1">🎯 Filtrer par énergie</label>
      <select
        id="energy-filter"
        value={energyFilter}
        onChange={(e) => setEnergyFilter(e.target.value)}
        className="w-full rounded-xl px-3 py-2 border-2 border-violet-300 bg-white"
      >
        <option value="all">Toutes les tâches</option>
        <option value="low">💤 Faible</option>
        <option value="medium">⚡ Moyenne</option>
        <option value="high">🔥 Élevée</option>
      </select>
    </div>
  )
}

export default EnergyFilter
