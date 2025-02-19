
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='container-fluid'>
      <BrowserRouter>
        {/* Header part */}
        <header className='bg-dark text-white p-2 d-flex justify-content-between'>
          <div className='fs-5 fw-bold'>
            React Shopping
          </div>
          <div >
            <Link to='/' className='text-decoration-none link-light'>Home</Link>
            <Link to='/men' className='mx-3 text-decoration-none link-light'>Men Fashion</Link>
            <Link to='/women' className='text-decoration-none link-light'>Women Fashion</Link>
            <Link to='/kids' className='mx-3 text-decoration-none link-light'>Kids Fashion</Link>
          </div>

          <div>
            <span className='bi bi-person-fill'></span>
            <span className='bi bi-heart-fill mx-3'></span>
            <span className='bi bi-cart'></span>
          </div>
        </header>

        {/* section part */}
        <section className='mt-4'>
          <Routes>
            <Route path='/' element={<div><h2>Welcome to Online Shopping</h2><p> Mens | Women | Kids Fashion</p></div>} />
            <Route path='men' element={<div><h3>Mens Fashion</h3><img src='men-fashion.jpeg' width='200' height='200' alt='' /></div>} />
            <Route path='women' element={<div><h3>Mens Fashion</h3><img src='women-fashion.jpeg' width='200' height='200' alt='' /></div>} />
            <Route path='kids' element={<div><h3>Mens Fashion</h3><img src='kids-fashion.jpg' width='200' height='200' alt='' /></div>} />
            <Route path='*' element={
              <div><h3 className='text-warning'>Looking for something ?</h3>
                <code>Sorry !   Unable to find your request</code></div>
            } />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
