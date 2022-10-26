import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

// Importation depuis react-boostrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TaskForm({ task = {}, action, onFormSubmit }) {
    const [todo, setTodo] = useState(task.todo)
    const [priority, setPriority] = useState(task.priority)
    const [category, setCategory] = useState(task.category)
    const [status, setStatus] = useState(task.status)

    useEffect(() => {

        setTodo(task.todo)
        setPriority(task.priority)
        setCategory(task.category)
        setStatus(task.status)

    }, [ task ])

    const handleFormSubmit = (e) => {
        e.preventDefault()

        onFormSubmit({ todo, priority, category, status })
    }

    return (
        <form onSubmit={handleFormSubmit} className='w-25 mx-auto my-4'>
            <Row>
                <div className="col-sm d-flex flex-column align-items-start mb-3">
                    <label htmlFor="toto" className="fw-light">Libellé de la tâche</label>
                    <input type="text" id="todo" defaultValue={todo} onChange={e => setTodo(e.target.value)} className='w-100 ps-2' />
                </div>
            </Row>
            <Row>
                <div className="col-sm d-flex flex-column align-items-start mb-3">
                    <label htmlFor="priority" className="fw-light">Priorité</label>
                    <input type="text" id="priority" defaultValue={priority} onChange={e => setPriority(e.target.value)} className='w-100 ps-2' />
                </div>
            </Row>
            <Row>
                <div className="col-sm d-flex flex-column align-items-start mb-3">
                    <label htmlFor="category" className="fw-light">Catégorie</label>
                    <input type="text" id="category" defaultValue={category} onChange={e => setCategory(e.target.value)} className='w-100 ps-2' />
                </div>
            </Row>
            <Row>
                <div className="col-sm d-flex flex-column align-items-start mb-4">
                    <label htmlFor="status" className="fw-light">Statut</label>
                    <input type="text" id="status" defaultValue={status} onChange={e => setStatus(e.target.value)} className='w-100 ps-2' />
                </div>
            </Row>
            <Row>
                <Col className="d-flex justify-content-around">
                    <Link to='/taches' className="btn btn-primary">Retour</Link>
                    <button className="btn btn-success">{action}</button>
                </Col>
            </Row>
        </form>
    )
}