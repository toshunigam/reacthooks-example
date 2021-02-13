import { Container } from 'react-bootstrap';
import './App.css';
import Navigation from './components/layouts/navigation';
import UsersTable from './components/pages/users';
import Register from './components/pages/register';

function App() {
  return (
    <Container>
      <Navigation />
      <UsersTable />
      <Register />
    </Container>
  );
}

export default App;
