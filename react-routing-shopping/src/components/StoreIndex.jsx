import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StoreHome from './StoreHome'
import StoreProducts from './StoreProducts'
import StoreProductDetails from './StoreProductDetails'

const StoreIndex = () => {
    return (
        <div className='container-fluid'>
            <BrowserRouter>
                <header className='bg-dark text-white text-center p-1'>
                    <h2>Online Store</h2>
                </header>
                <section className='mt-3'>
                    <Routes>
                        <Route path='/' element={<StoreHome />} />
                        <Route path='products/:category' element={<StoreProducts/>}/>
                        <Route path='details/:id' element={<StoreProductDetails/>}/>
                        <Route path='*' element={<div><h2 className='text-danger'>404-Page Not Found</h2></div>}/>
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}

export default StoreIndex
