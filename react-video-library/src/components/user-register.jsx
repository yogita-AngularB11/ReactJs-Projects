import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useCallback, useState } from "react";


const UserRegister = () => {

    const [status, setStatus] = useState('');
    const[errorClass,setErrorClass]=useState('');
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            UserId: '',
            UserName: '',
            Password: '',
            Email: '',
            Mobile: ''
        },
        // on submit you collect user data insert into database
        //use "post()" method of axios
        onSubmit: useCallback((user) => {
            axios.post('http://127.0.0.1:5000/register-user', user)
                .then(() => {
                    alert(`Registered Successfully...`)
                    navigate('/user-login')
                })
        }, [])
        // enableReinitialize: true
    })

    function VerifyUser(e) {
        axios.get('http://127.0.0.1:5000/users')
            .then(response => {
                var user = response.data.find(item => item.UserId === e.target.value)
                if (user) {
                    setStatus(`User Id Taken Try Another`)
                    setErrorClass(`text-danger`)
                } else {
                    setStatus(`User Id Available`)
                    setErrorClass(`text-success`)
                }

            })
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h3>User Registration</h3>
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="text" name="UserId" onChange={formik.handleChange} onKeyUp={VerifyUser} /></dd>
                    <dd className={errorClass}>{status}</dd>
                    <dt>UserName</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" onChange={formik.handleChange} /></dd>
                    <dt>Email</dt>
                    <dd><input type="email" name="Email" onChange={formik.handleChange} /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange}></input></dd>
                </dl>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <Link to='/user-login' >Existing User ?</Link>
        </div>
    )
}
export default UserRegister