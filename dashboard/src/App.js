import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard';
import Header from './components/header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='main d-flex'>
        <div className='sidebarWrapper'>
          <div className='sidebar'>
            <Sidebar />
          </div>
        </div>
        <div className='content'>
          <Routes>
            <Route path='/' exact={true} element={<Dashboard />} />
            <Route path='/dashboard' exact={true} element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
