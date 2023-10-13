import { useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
    <div style={{ background: "#f3f3f3", height: "250px" }}>
      <button
        style={{ padding: "5px", cursor: "pointer", border: "none" }}
        onClick={() => {
          navigate("/settings");
        }}
      >
        <SettingsIcon /> Edit Profile Settings
      </button>
      <h1 style={{textAlign:"center",paddingTop:"50px",color:"#373a3ceb"}}>Hello, leen </h1>
    </div>
    <div style={{color:"#373a3ceb",padding:"30px 100px",height:"265px"}}>
      <h1>My articls</h1>
      <p> No articles are here... yet.</p>
       </div>
    </>
  );
};

export default Profile;
