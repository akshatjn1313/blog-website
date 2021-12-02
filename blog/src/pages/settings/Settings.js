import Sidebar from '../../sidebar/Sidebar'
import './settings.css'

function Setting() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>
                    <span className="settingsDeletetitle">
                        Delete Account
                    </span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img 
                        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt=""/>
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id ="fileInput" style={{display:'none'}}/>
                    </div>
                    <label >Username</label>
                    <input type="text" placeholder="Akshat"></input>
                    <label >Email</label>
                    <input type="text" placeholder="akshat@gmail.com"></input>
                    <label >Password</label>
                    <input type="password"></input>
                    <label >Username</label>
                    <input type="password"></input>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Setting
