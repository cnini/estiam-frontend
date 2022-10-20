// Importation depuis react-bootstrap/Card
import Card from 'react-bootstrap/Card';

export default function TaskCard({ task }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{task.todo}</Card.Title>
                <Card.Text>
                    <strong>Priority :</strong> {task.priority} | <strong>Category :</strong> {task.category} | <strong>Status :</strong> {task.status}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}