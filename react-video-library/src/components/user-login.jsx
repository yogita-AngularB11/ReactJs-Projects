import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useFormik } from "formik"
import { useCookies } from "react-cookie"

const UserLogin = () => {
    const navigate = useNavigate()

    // const [users, setUsers] = useState([{ UserId: '', UserName: '', Password: '', Email: '', Mobile: '' }])

    const[cookies,setCookies,removeCookie]=useCookies(['userId']);

    const formik = useFormik({
        initialValues: {
            UserId: '',
            UserName: '',
            Password: '',

        },
        // on submit you collect user data insert into database
        //use "post()" method of axios
        onSubmit: (user) => {
            axios.get('http://127.0.0.1:5000/users')
                .then((response) => {
                    var result = response.data.find(item => item.UserId === user.UserId);
                    console.log(user);
                    if (result) {
                        if (result.Password === user.Password) {
                            setCookies('userId',user.UserId)
                            navigate('/user-dash');
                        } else {
                            alert('Invalid Password')
                        }
                    } else {
                        alert('Invalid UserId')
                    }
                })
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit} >
                <h3>User Login</h3>
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="text" name="UserId" onChange={formik.handleChange} /></dd>

                    <dt>Password</dt>
                    <dd><input type="password" name="Password"onChange={formik.handleChange} /></dd>
                </dl>
                <button type="submit" className="btn btn-warning" onChange={formik.handleChange}>Login</button>
            </form>
            <Link to='/user-register '>New User ? Register Here</Link>
        </div>
    )
}
export default UserLogin