import { NavLink } from 'react-router-dom';

// Importation depuis react-boostrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
    return (
      <Row>
        <Col>
          <NavLink to='/taches'>Liste des tâches</NavLink>
        </Col>
      </Row>
    )
}