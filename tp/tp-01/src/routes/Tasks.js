export default function Tasks() {
    const tasks = [
        { id: 0, label: "Faire les courses" },
        { id: 1, label: "Aller à la gym" },
        { id: 2, label: "Dîner avec les parents" },
        { id: 3, label: "RDV médical" },
        { id: 4, label: "Faire le ménage" },
        { id: 5, label: "Laver et étendre le linge" },
        { id: 6, label: "Cours de piano" }
    ]

    return (
      <>
        <h1>Liste des tâches</h1>
        <ul>
            { tasks.length ? tasks.map(task => (<li key={task.id}>{task.label}</li>)) : '' }
        </ul>
      </>
    )
}