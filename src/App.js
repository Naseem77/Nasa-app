import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from './components/Container'
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Container />
        </div>
      </Router>


    </div>
  );
}

export default App;
