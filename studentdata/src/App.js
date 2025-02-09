import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import StudentTable from './studentTable';
import CreateStudent from './CreateStudent';
import EditStudent from './EditStudent';
import ViewDetails from './ViewDeails';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StudentTable />}></Route>
        <Route path="Student/Create" element={<CreateStudent />}></Route>
        <Route path="Student/Edit/:Studentid" element={<EditStudent />}></Route>
        <Route path="Student/View/:Studentid" element={<ViewDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
