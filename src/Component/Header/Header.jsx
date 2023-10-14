import { NavLink } from "react-router-dom";
import "./Header.css";
import { auth } from "../../Firebase/Config";
import { useAuthState } from "react-firebase-hooks/auth";

import SettingsIcon from "@mui/icons-material/Settings";
import AddLinkIcon from "@mui/icons-material/AddLink";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div
      className="main-content"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 10px 5px 20px",
        marginBottom: "10px",
      }}
    >
      <h1 style={{ color: "#5cb85c", paddingLeft: "5px" }}>Conduit</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        {user ? (
          <>
            <NavLink to="/newpost">
              <AddLinkIcon /> NewPost
            </NavLink>
            <NavLink to="/settings">
              <SettingsIcon />
              Settings
            </NavLink>
            <NavLink to="/profile">
              <ManageAccountsIcon /> Profile
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/signin">Signin</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
