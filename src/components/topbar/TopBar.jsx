import React from './topbar.css'
import {Link} from 'react-router-dom'

export default function TopBar() {
    const user = false
    return (
        <div className= 'top'>
            <div className='topLeft'><i className="fab fa-facebook-square"></i>
            <i className="icons fab fa-instagram-square"></i>
            <i className="icons fab fa-linkedin"></i>
            <i className="icons fab fa-twitter-square"></i>
            </div>
            <div className='topCentre'>
                <ul className="topList">
                    <li className="topListitem">
                        <Link to='/' className='links'>HOME</Link></li>
                    <li className="topListitem"><Link to= '/' className='links'>ABOUT</Link></li>
                    <li className="topListitem"><Link to= '/' className='links'>CONTCT US</Link></li>
                    <li className="topListitem"><Link to= '/write' className='links'>WRITE</Link></li>
                    <li className="topListitem">{user && 'LOGOUT'}</li>
                  
                </ul>
            </div>
            <div className='topRight'>
                {
                    user ? (
                         <img className= 'topImage'
                src="https://via.placeholder.com/800.png/09f/fff

                C/O https://placeholder.com/" alt="" />
                    ): (
                        <ul className='topList'>
                            <li className='topListitem'>
                    <Link className='links' to ='/login'>Login</Link>
                            </li>
                            <li className='topListitem'>
                        <Link className='links' to ='/register'>Register</Link>

                            </li>
                        
                        </ul>
                    )
                }
                  <i className="topSearchIcon fas fa-search"></i>
               
              
            </div>
            
        </div>
    )
}
