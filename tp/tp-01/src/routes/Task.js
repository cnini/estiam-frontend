import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

// Importation des components
import TaskForm from '../components/TaskForm';

// Importation d'axios
import request from '../utils/Request';

// Traitement du formulaire
function handleForm() {
  // TODO
}

export default function Task() {
    const { id } = useParams()
    const [task, setTask] = useState([])

    useEffect(() => {
      request.get('/todos/' + id).then(response => setTask(response.data))
    }, [id])
    
    return (
      <TaskForm task={task} action="Modifier" onFormSubmit={handleForm} />
    )
}