export default function ListItem({ itemData, deleteTodo }) {
  const getEnergyLabel = (energy) => {
    switch (energy) {
      case "low":
        return "💤 Faible"
      case "medium":
        return "⚡ Moyenne"
      case "high":
        return "🔥 Élevée"
      default:
        return "❓"
    }
  }

  const badgeColor = {
    low: "bg-green-200 text-green-800",
    medium: "bg-yellow-200 text-yellow-800",
    high: "bg-red-200 text-red-800"
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-start">
        <span className="text-lg text-gray-800 break-words max-w-[85%]">{itemData.content}</span>
        <button
          onClick={() => deleteTodo(itemData.id)}
          className="text-red-400 hover:text-red-600 text-xl font-bold ml-2"
          title="Supprimer"
        >
          ✖️
        </button>
      </div>
      {itemData.energy && (
        <div className={`inline-block px-3 py-1 text-sm rounded-full w-fit ${badgeColor[itemData.energy]}`}>
          {getEnergyLabel(itemData.energy)}
        </div>
      )}
    </div>
  )
}
