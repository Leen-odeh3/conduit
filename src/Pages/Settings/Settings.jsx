import "./Settings.css";
import { auth } from "../../Firebase/Config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate=useNavigate();
  return (
    <div className="setting">
      <p>Your Settings</p>
      <form>
        <input
          type="text"
          value="https://api.realworld.io/images/smiley-cyrus.jpeg"
        />
        <input type="text" />
        <input placeholder="short bio about you " style={{ height: "100px" }} />
        <input type="text" />
        <input type="text" placeholder="New Password" />
      </form>
      <button className="btn1"> Update Settings</button>

      <button
        className="btn2"
        onClick={(e) => {
          e.preventDefault();
          
          navigate("/");
          signOut(auth)
            .then(() => {
              // Sign-out successful.
            })
            .catch((error) => {
              // An error happened.
            });
        }}
      >
        Or Click Here To Logout
      </button>
    </div>
  );
};

export default Settings;
