import { Container } from 'react-bootstrap';
import './App.css';
import Navigation from './components/layouts/navigation';
import UsersTable from './components/pages/users';
// import { Header } from './components/layouts/header';

function App() {
  return (
    <Container>
      <Navigation />
      <UsersTable />
    </Container>
  );
}

export default App;
