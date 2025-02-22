import React from 'react'
import {  useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const StoreProductDetails = () => {
    let params=useParams()

    //single product and not array of product
    const [product, setProduct] = useState({ id: 0, title: '', image: '', description: '', category: '', rating: { rate: 0, count: 0 } })

    
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => {
                //  console.log(response.data)
                setProduct(response.data)
            })
    },[params.id])


    return (
        <div>
            <h3>Details</h3>
           
            {/* {console.log(`${product.id}`) } */}
            
            <dl style={{width:'300px'}}>
                <img src={product.image} width='200px'height='100px' alt='productImage' />
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
            </dl>
            <Link to={`/products/${product.category}`}>Back to Products</Link>
        </div>
    )
}

export default StoreProductDetails
