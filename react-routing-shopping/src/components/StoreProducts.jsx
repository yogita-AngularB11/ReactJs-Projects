import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const StoreProducts = () => {
  const params = useParams();
  // console.log(params.category);

  const [products, setProducts] = useState([{ id: 0, title: '', image: '', price: 0, category: '', description: '', rating: { rate: 0, count: 0 } }])

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
      .then(response => {
        setProducts(response.data)
      })
  }, [params.category])
  
  return (
    <div>
      <h2>Products</h2>
      <div><Link to='/' className='text-decoration-none' ><span className='bi bi-house-fill'></span> Back to home</Link></div>
      <div className='d-flex flex-wrap'>
        {
          products.map(product =>
            <div className='card p-2 m-2' style={{ width: '200px' }}>
              <img className='card-img-top' src={product.image} height={100} alt='product'/>
              <div className='card-header  d-flex justify-content-around'>
                <Link  to={`/details/${product.id}`} className='btn btn-warning bi bi-eye-fill'></Link>
                <Link className='btn btn-primary bi bi-cart-fill '></Link>
              </div>
            </div>
          ) 
        }
      </div>

    </div>

  )
}

export default StoreProducts
