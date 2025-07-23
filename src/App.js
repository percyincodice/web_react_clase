import {Routes, Route} from 'react-router-dom';
import './App.css';
import ListPerson from './ListPerson';
import CreatePerson from './CreatePerson';


function App() {
  return (
    <Routes>
      <Route path='/' element={<ListPerson />} />
      <Route path='/create' element={<CreatePerson />} />
    </Routes>
  )
}

export default App;
