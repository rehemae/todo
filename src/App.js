import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/dashboard' element={ <DashboardPage /> } />

      </Routes>
    </div>
  );
}

export default App;

