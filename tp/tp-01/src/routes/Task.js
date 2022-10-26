import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

// Importation des components
import TaskForm from '../components/TaskForm';

// Importation d'axios
import request from '../utils/Request';

export default function Task() {
    const { id } = useParams()
    const [task, setTask] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
      request.get('/todos/' + id).then(response => setTask(response.data))
    }, [id])

    // Traitement du formulaire
    function editTask(formTask) {
      console.log(formTask)
      request.put('/todos/' + id, formTask).then(response => {
        console.log('update response ', response)
        navigate('/taches')
      })
    }
    
    return (
      <div className="container my-5">
        <h1>Détails d'une tâche</h1>
        <TaskForm task={task} action="Modifier" onFormSubmit={editTask} />
      </div>
    )
}