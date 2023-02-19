import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home/>} />
     </Routes>
    </div>
  );
}

export default App;
