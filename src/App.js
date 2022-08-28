import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Landing from './components/pages/landing/Landing';
import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Form from './components/pages/Form/Form';

function App() {
  return (
    <div className="App">
      <div>
      <Navbar />
          <Routes>
            <Route path='/' element={ <Landing /> } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Form />} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
