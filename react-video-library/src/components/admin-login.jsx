import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

    const navigate = useNavigate()

    const formik = useFormik(
        {
            initialValues: {
                UserId: '',
                Password: ''
            },

            onSubmit: (admin) => {
                //collect data from database.
                // so what is API method to collect admin data
                //app.post('/admin')
                axios.get(`http://127.0.0.1:5000/admin`)
                    .then(response => {
                        //response data is returning array of all admins.
                        // in that we have to get only the admin whose userId is matching with id we enter.
                        //Logic:From an array how to get only one person who is matching our details:: array.find() method
                        var user = response.data.find(item => item.UserId === admin.UserId);
                           console.log(user);
                        if (user) {
                            if (user.Password === admin.Password) {
                                navigate('/admin-dash');
                            } else {
                                alert('Invalid Password')
                            }
                        } else {
                            alert('Invalid UserId')
                        }
                    })
            }
        }
    )
    return (

        <div>
            <h2>Admin Login</h2>
            <form className='w-25' onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Admin UserName</dt>
                    <dd><input type="text" className='form-control' name='UserId' onChange={formik.handleChange} /></dd>
                    <dt>Password</dt>
                    <dd><input type='password' name='Password' className='form-control' onChange={formik.handleChange} /></dd>
                </dl>
                <button type='submit' className='btn btn-warning w-100'>Login</button>
            </form>
        </div>
    )
}

export default AdminLogin
