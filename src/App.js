import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes';
import SignUp from './components/SignUp';
// import Container from './components/Container';
import Qpage from './components/Qpage';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<ProtectedRoutes><Home/></ProtectedRoutes>} />
        <Route path='/home/questions' exact element={<Qpage/>} />
     </Routes>
    </div>
  );
}

export default App;
