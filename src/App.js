
import './App.css';
import Form from './Form';
import { Route,Routes } from 'react-router-dom';
import View from './View';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
      <ToastContainer/>
     
    </div>
  );
}

export default App;
