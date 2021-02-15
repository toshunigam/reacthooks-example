import { Container } from 'react-bootstrap';
import './App.css';
import Navigation from './components/layouts/navigation';
import UsersTable from './components/pages/users';
// import Register from './components/pages/register';
import SignUp from './components/pages/signup';

function App() {
  return (
    <Container>
      <Navigation />
      <UsersTable />
      <SignUp />
    </Container>
  );
}

export default App;
