export default function TaskCard({ task }) {
    return (
        <li key={task.id}><strong>Tâche n°{task.id} :</strong> {task.label}</li>
    )
}