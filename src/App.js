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
      {routeResult||<h1>Page Not Found</h1>}
    </Container>
  );
}

export default App;
