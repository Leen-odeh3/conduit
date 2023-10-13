import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div style={{ height: "500px", textAlign: "center", marginTop: "30px" }}>
      <p style={{ textAlign: "center" }}>Sign In</p>
      <Link to="/signup" style={{ color: "#5cb85c" }}>
        Need an account?
      </Link>
      <from>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </from>
      <button
        className="btn1"
        style={{ marginBottom: "20px", cursor: "pointer" }}
      >
        Sign In
      </button>
    </div>
  );
};

export default Signin;
