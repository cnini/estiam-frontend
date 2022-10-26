import { Link } from 'react-router-dom';

// Importation depuis react-bootstrap/Card
import Card from 'react-bootstrap/Card';

export default function TaskCard({ task }) {
    return (
        <Card className="w-25 m-2">
            <Card.Body>
                <Card.Title>{task.todo}</Card.Title>
                <Card.Text>
                    <strong>Priority :</strong> {task.priority}
                </Card.Text>
                <Card.Text>
                    <strong>Category :</strong> {task.category}
                </Card.Text>
                <Card.Text>
                    <strong>Status :</strong> {task.status}
                </Card.Text>
                <Card.Text>
                    <Link to={'/tache/' + task.id} className="btn btn-success">Détails</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}