import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Table from './pages/Table';
import Note from './pages/NoteList';

function App() {


  return (



    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Note />} ></Route>
        <Route path="/table" element={<Table />} ></Route>
        <Route path="/note" element={<Note />} ></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
