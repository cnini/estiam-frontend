import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

import request from "../utils/Request";

export default function NewTask() {

    const navigate = useNavigate()

    // Traitement du formulaire
    function createTask(task) {
        console.log(task)
        request.post('/todos/', task).then(response => {
            console.log('create response ', response)
            navigate('/taches')
        })
    }

    return (
        <div className="container my-5">
            <h1>Créer une nouvelle tâche</h1>
            <TaskForm action="Ajouter" onFormSubmit={createTask} />
        </div>
    )
}