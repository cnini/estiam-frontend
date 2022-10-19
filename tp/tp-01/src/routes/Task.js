import { useParams } from 'react-router-dom';

export default function Task() {
    const { id } = useParams()
    
    const tasks = [
        { id: 0, label: "Faire les courses" },
        { id: 1, label: "Aller à la gym" },
        { id: 2, label: "Dîner avec les parents" },
        { id: 3, label: "RDV médical" },
        { id: 4, label: "Faire le ménage" },
        { id: 5, label: "Laver et étendre le linge" },
        { id: 6, label: "Cours de piano" }
    ]

    const task = tasks.find(task => task.id === +id)
    
    return (
      <ul>
          <li><strong>Id :</strong> {task.id}</li>
          <li><strong>Libellé :</strong> {task.label}</li>
      </ul>
    )
}