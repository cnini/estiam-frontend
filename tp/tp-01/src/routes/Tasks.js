import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Importation d'axios
import request from '../utils/Request';

// Importation des components
import TaskCard from "../components/TaskCard";

export default function Tasks() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
      request.get('/todos/').then(response => setTasks(response.data))
    }, [])

    return (
      <div className="container my-5">
        <h1>Liste des tâches</h1>
        <Link to='nouvelle-tache' className="btn btn-primary mt-2 mb-5">Nouvelle tâche</Link>
        <div className="d-flex flex-column">
          { tasks.length ? tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          )) : '' }
        </div>
      </div>
    )
}