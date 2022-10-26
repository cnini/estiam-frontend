import { useState } from "react";

// Importation depuis react-boostrap
import Row from 'react-bootstrap/Row';

export default function TaskForm({ task, action, onFormSubmit }) {
    const [todo, setTodo] = useState(task.todo)
    const [priority, setPriority] = useState(task.priority)
    const [category, setCategory] = useState(task.category)
    const [status, setStatus] = useState(task.status)

    return (
        <form onSubmit={onFormSubmit}>
            <Row>
                <div className="col-sm">
                    <label htmlFor="toto">Todo : </label>
                    <input type="text" id="todo" defaultValue={todo} onChange={e => setTodo(e.target.value)} />
                </div>
            </Row>
            <Row>
                <div className="col-sm">
                    <label htmlFor="priority">Priority : </label>
                    <input type="text" id="priority" defaultValue={priority} onChange={e => setPriority(e.target.value)} />
                </div>
            </Row>
            <Row>
                <div className="col-sm">
                    <label htmlFor="category">Category : </label>
                    <input type="text" id="category" defaultValue={category} onChange={e => setCategory(e.target.value)} />
                </div>
            </Row>
            <Row>
                <div className="col-sm">
                    <label htmlFor="status">Status : </label>
                    <input type="text" id="status" defaultValue={status} onChange={e => setStatus(e.target.value)} />
                </div>
            </Row>
            <Row>
                <div className="col-sm">
                    <button className="btn btn-success">{action}</button>
                </div>
            </Row>
        </form>
    )
}