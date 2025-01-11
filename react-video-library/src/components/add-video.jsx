import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'

const AddVideo = () => {
    const [categories, setCategories] = useState([{ CategoryId: 0, CategoryName: '' }])

    const navigate=useNavigate();

    const formik = useFormik({
        initialValues: {
            VideoId: 0,
            Title: '',
            Url: '',
            Likes: 0, 
            Dislikes: 0,
            Views: 0,
            CategoryId: 0
        },
        onSubmit:(video)=>{
            axios.post(`http://127.0.0.1:5000/add-video`,video)
             .then(()=>{
                alert('Video Added')
                navigate('/admin-dash')
            })
        }
    })
    function LoadCategories() {
        axios.get("http://127.0.0.1:5000/categories")
            .then(response => {
                response.data.unshift({ CategoryId: 0, CategoryName: 'Select Category' });
                setCategories(response.data)
            })
    }

    useEffect(() => {
        LoadCategories()
    }, [])

    return (
        <div className='container-fluid'>
            <h2>Add New Video</h2>
            <form className='w-25' onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>VideoId</dt>
                    <dd><input type="number" name="VideoId" onChange={formik.handleChange}/> </dd>

                    <dt>Title</dt>
                    <dd><input type="text" name="Title" onChange={formik.handleChange } /></dd>

                    <dt>Url</dt>
                    <dd><input type="text" name="Url" onChange={formik.handleChange } /></dd>

                    <dt>Likes</dt>
                    <dd><input type="number" name="Likes" onChange={formik.handleChange } /></dd>

                    <dt>Dislikes</dt>
                    <dd><input type="number" name="Dislikes" onChange={formik.handleChange } /></dd>

                    <dt>Views</dt>
                    <dd><input type="number" name="Views" onChange={formik.handleChange } /></dd>

                    <dt>CategoryId</dt>
                    <dd>
                        <select name='CategoryId' onChange={formik.handleChange}>
                            {
                                categories.map(category =>
                                    <option value={category.CategoryId}>{category.CategoryName}</option>
                                )
                            }
                        </select>
                    </dd>

                    <button className='btn btn-warning'>Add Video</button>
                    <Link to='/admin-dash' className='btn btn-danger ms-2'>Cancel</Link>
                </dl>
            </form>

        </div>
    )
}

export default AddVideo 
