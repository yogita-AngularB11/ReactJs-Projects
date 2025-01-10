
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import VideoLibraryIndex from './components/video-library-index';
import AdminLogin from './components/admin-login';
import AdminDashboard from './components/admin-dashboard';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header className='bg-danger text-white p-2 text-center'>
          <h2>Video Library</h2>
        </header>
        <section>
          <Routes>
          <Route path='/' element={<VideoLibraryIndex />}/>
          <Route path='/admin-login' element={<AdminLogin/>}/>
          <Route path='/admin-dash' element={<AdminDashboard/>}/>
          </Routes>
      </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
