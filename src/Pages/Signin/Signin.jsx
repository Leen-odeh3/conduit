import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {auth} from '../../Firebase/Config'

const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate=useNavigate();
  return (
    <div style={{ height: "500px", textAlign: "center", marginTop: "30px" }}>
      <p style={{ textAlign: "center" }}>Sign In</p>
      <Link to="/signup" style={{ color: "#5cb85c" }}>
        Need an account?
      </Link>
      <form>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
      </form>
      <button
        className="btn1"
        style={{ marginBottom: "20px", cursor: "pointer" }}
        onClick={(e) => {
          e.preventDefault();
         navigate("/")
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
        }}
      >
        Sign In
      </button>
    </div>
  );
};

export default Signin;
