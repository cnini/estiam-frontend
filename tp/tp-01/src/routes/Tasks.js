import { useEffect, useState } from "react";

// Importation d'axios
import request from '../utils/Request';

// Importation du component
import TaskCard from "../components/TaskCard";

export default function Tasks() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
      request.get('/todos/').then(response => setTasks(response.data))
    }, [])

    return (
      <>
        <h1>Liste des tâches</h1>
        <ul>
            { tasks.length ? tasks.map(task => (
              <TaskCard key={task.id} task={task} />
            )) : '' }
        </ul>
      </>
    )
}