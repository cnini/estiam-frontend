import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import './App.css';

// Importation de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Importation depuis react-bootstrap/Container
import Container from 'react-bootstrap/Container';

// Importation des routes
import Home from './routes/Home';
import Tasks from './routes/Tasks';
import Task from './routes/Task';

// Importation du contexte
import TokenContext from './contextes/TokenContext';

function App() {
  const token = localStorage.getItem('token')

  return (
    <div className="App">
      <TokenContext.Provider value={token}>
        <Router>
          {/* 

              Sur DevTools :
                - Navigation.Provider = écouter l'URL
                - Location.Provider = chercher et se mettre sur le bon URL
          
          */}

          {/* Définition de nos différentes routes */}
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="taches" element={<Tasks />} />
              <Route path="tache/:id" element={<Task />} />
            </Route>
          </Routes>
        </Router>

        <Container>
          {/* Afficher le contenu de notre page */}
          <Outlet />
        </Container>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
