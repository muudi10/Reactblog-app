import './settings.css'
import profilePicture from '../.././images/profilepicture.jpg'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Setting() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingTitle">
                    <span className="settingUpateTitle">
                        Update Your Account
                    </span>
                    <span className="settingDelete">
                      Delete Account
                    </span>
                </div>

                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingPP">
                        <img src={profilePicture} alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file"  id="fileInput" style={{display:'none'}} />
                    </div>
                    <label > Username</label>
                    <input type="text" name="" id="" placeholder='Username'/>
                    <label > Email</label>
                    <input type="email" name="" id="" placeholder='Email'/>
                    <label > Password</label>
                    <input type="password" />
                    <button className="settingSubmit">Update</button>


                </form>

                </div>    
                  <Sidebar/>
        </div>
    )
}
