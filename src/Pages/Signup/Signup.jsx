import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div style={{ height: "500px", textAlign: "center", marginTop: "30px" }}>
        <p style={{ textAlign: "center" }}>Sign In</p>
        <Link to="/signup" style={{ color: "#5cb85c" }}>
          Have an account?
        </Link>
        <from>
          <input type="text" placeholder="UserName" />
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
    </div>
  );
};

export default Signup;
