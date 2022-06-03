import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Filter from './routes/Filter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/filter' element={<Filter />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
