import './register.css'
import {Link} from 'react-router-dom'
export default function Register() {
    return (
        <div className='register'>
            <span className="registerTitle">
                Register
            </span>
<form  className="registerForm">
    <label >Username</label>
    <input type="text" className='registerInput' placeholder='Enter your sername' />
    <label >Email</label>
    <input type="email" className='registerInput' placeholder='Enter your Email' />
    <label >Password</label>
    <input type="password" className='loginInput' placeholder='Enter your password' />

    <button className="loginButton">
        <Link to= '/login' className='links'> Login</Link>
    </button>
    <button className="resgisterButton">Regsiter</button>

    </form>            
        </div>
    )
}
