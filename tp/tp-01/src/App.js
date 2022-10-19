import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import './App.css';

// Importation des routes
import Home from './routes/Home';
import Tasks from './routes/Tasks';
import Task from './routes/Task';

function App() {
  return (
    <div className="App">
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

        {/* Afficher le contenu de notre page */}
        <Outlet />
        
      </Router>
    </div>
  );
}

export default App;
