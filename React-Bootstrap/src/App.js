import { Button, CardGroup, Spinner } from 'react-bootstrap';
import './App.css';
import GridCard from './components/GridCard/GridCard';
function App() {
  return (
    <div className="App">
      <button>normal button</button>
      <Button variant='info'>React-Bootstrap</Button>
      <Spinner animation="grow" variant="warning" />
      <GridCard></GridCard>
    </div>
  );
}

export default App;
