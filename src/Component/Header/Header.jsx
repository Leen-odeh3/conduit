import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 30px 5px 30px",
        marginBottom: "10px",
      }}
    >
      <h1 style={{ color: "#5cb85c", paddingLeft: "16px" }}>Conduit</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/signin">Signin</NavLink>
        <NavLink to="/signup">Signup</NavLink> */}
        <NavLink to="/newpost">NewPost</NavLink>
        <NavLink to="/settings"> Settings</NavLink>
        <NavLink to="/profile"> Profile</NavLink>
      </nav>
    </div>
  );
};

export default Header;
