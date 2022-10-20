// Importation depuis react-boostrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Importation du contexte
import TokenContext from '../contextes/TokenContext';

export default function Home() {
    return (
      <Row>
        <Col>
          <TokenContext.Consumer>
            {
              token => (
                token
              )
            }
          </TokenContext.Consumer>
          <h1>Page d'accueil</h1>
        </Col>
      </Row>
    )
}