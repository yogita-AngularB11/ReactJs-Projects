import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const StoreHome = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories/')
            .then(response => {
                setCategories(response.data)
            })
    }, [])
    return (
        <div>
            <h2> Stores Home page</h2>

            <ul className='list-unstyled'>
                {
                    categories.map(category =>
                        <li key={category}>
                        <Link to={`/products/${category}`} className='btn btn-dark text-white w-25 my-2'>
                        {category.toUpperCase()}</Link>
                        </li>

                    )
                }
            </ul>

        </div>
    )
}
export default StoreHome
