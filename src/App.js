import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './componentes/Nav';
import AppRouters from './routes/AppRouters';
import { FavoritesProvider } from './componentes/FavoritesContext';

function App() {
  return (
    <div className="App">
      <FavoritesProvider>
        <Router>
          <Nav />
          <AppRouters />
        </Router>
      </FavoritesProvider>

    </div>
  );
};

export default App;