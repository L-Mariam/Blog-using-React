import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">
                    Update Your Acccount
                </span>
                <span className="settingsDeleteTitle">
                    Delete Account
                </span>
                </div>
                <form className="settingsForm">
                <label > Profile Picture </label>
                <div className="settingsProfilePic">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="" />
                <label htmlFor="fileInput">
                <i className="settingsProfilePicIcon far fa-user-circle"></i>
                </label>
              <input type="file" id="fileInput" style={{display:"none"}}/>
              
                </div>
                <label> Username </label>
                <input type="text" placeholder="Lena" />
                <label> Email </label>
                <input type="email" placeholder="Lena@gmail.com" />
                <label> Password </label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
                </form>
                </div>
        <Sidebar/>

        </div>
  )
}
