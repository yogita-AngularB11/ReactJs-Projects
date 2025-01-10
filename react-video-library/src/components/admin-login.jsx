import React from 'react'

const AdminLogin = () => {
  return (
    <div>
      <h2>Admin Login</h2>
      <form  className='w-25'>
        <dl>
            <dt>Admin UserName</dt>
            <dd><input type="text" className='form-control'/></dd>
            <dt>Password</dt>
            <dd><input type='password' className='form-control'/></dd>
        </dl>
        <button type='submit' className='btn btn-warning w-100'>Login</button>
      </form>
    </div>
  )
}

export default AdminLogin
