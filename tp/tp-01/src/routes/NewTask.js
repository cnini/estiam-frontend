import TaskForm from "../components/TaskForm";

export default function NewTask() {

    // Traitement du formulaire
    function createTask(formTask) {
        console.log(formTask)
    }

    return (
        <div className="container my-5">
            <h1>Créer une nouvelle tâche</h1>
            <TaskForm action="Ajouter" onFormSubmit={createTask} />
        </div>
    )
}