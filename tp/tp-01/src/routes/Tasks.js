import { useEffect, useState } from "react";

// Importation d'axios
import request from '../utils/Request';

// Importation des components
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

export default function Tasks() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
      request.get('/todos/').then(response => setTasks(response.data))
    }, [])

    return (
      <>
        <h1>Liste des tâches</h1>
        <div className="container d-flex flex-wrap justify-content-between">
          { tasks.length ? tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          )) : '' }
        </div>
      </>
    )
}