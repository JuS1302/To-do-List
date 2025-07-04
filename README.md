# 📋 To-do List

Une application simple de gestion de tâches construite avec **React**, **Vite**, **Tailwind CSS** et **nanoid**.

Ce projet a été réalisé dans le cadre d'une formation React sur Udemy. Il permet d'ajouter, afficher et supprimer des tâches dans une liste, tout en appliquant des styles modernes grâce à Tailwind CSS.

---

## 🚀 Technologies utilisées

- ⚛️ React  
- ⚡ Vite  
- 🎨 Tailwind CSS  
- 🔑 nanoid  

---

## 📦 Installation

Cloner le dépôt :
```bash
git clone git@github.com:JuS1302/To-do-List.git
cd To-do-List
```

Installer les dépendances :
```bash
npm install
```

Lancer le serveur :
```bash
npm run dev
```

L'application sera accessible à l'adresse suivante :
```
http://localhost:5173
```

---

## ✍️ Fonctionnalités

✅ Ajouter une tâche via un formulaire  
❌ Supprimer une tâche  
⚠️ Message de validation si le champ est vide  
🎨 UI stylée avec Tailwind CSS  
🆔 Clés uniques avec nanoid  

---

## 🔍 Exemple de code

### App.jsx
```jsx
const [todoList, setTodoList] = useState([])
const [todo, setTodo] = useState("")
const [showValidation, setShowValidation] = useState(false)

function handleSubmit(e) {
  e.preventDefault()
  if (todo === "") {
    setShowValidation(true)
    return
  }
  setTodoList([...todoList, { id: nanoid(3), content: todo }])
  setTodo("")
  setShowValidation(false)
}
```

### ListItem.jsx
```jsx
export default function ListItem({ itemData, deleteTodo }) {
  return (
    <li className="p-2 bg-zinc-200 mb-2 rounded flex">
      <span>{itemData.content}</span>
      <button
        onClick={() => deleteTodo(itemData.id)}
        className="ml-auto bg-red-500 w-6 h-6 rounded text-zinc-200"
      >
        X
      </button>
    </li>
  )
}
```

---

## 🗃️ Dépendances principales

```json
"dependencies": {
  "nanoid": "^5.0.2",
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

---

## 📄 Licence

Projet open-source à but pédagogique.
