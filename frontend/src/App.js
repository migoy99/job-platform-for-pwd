import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import EmployerDashboard from './pages/EmployerDashboard';
import SeekerDashboard from './pages/SeekerDashboard';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegistrationPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/seeker-dashboard' element={<SeekerDashboard />} />
        <Route path='/employer-dashboard' element={<EmployerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
