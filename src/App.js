import { Container } from 'react-bootstrap';
import './App.css';
import Navigation from './components/layouts/navigation';
import routes from './routes';
import { useRoutes } from 'hookrouter';

function App() {
  const routeResult = useRoutes(routes)
  return (
    <Container>
      <Navigation />
      {routeResult}
    </Container>
  );
}

export default App;
