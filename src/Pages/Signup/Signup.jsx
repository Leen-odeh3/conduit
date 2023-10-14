import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Config";
import { useState } from "react";
import { updateProfile } from "firebase/auth";

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");

  const navigate = useNavigate();
  return (
    <div>
      <div style={{ height: "500px", textAlign: "center", marginTop: "30px" }}>
        <p style={{ textAlign: "center" }}>Sign Up</p>
        <Link to="/signup" style={{ color: "#5cb85c" }}>
          Have an account?
        </Link>
        <form>
          <input
            type="text"
            placeholder="UserName"
            required
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
            required
          />
        </form>
        <button
          className="btn1"
          style={{ marginBottom: "20px", cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();

            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                // ...
                updateProfile(auth.currentUser, {
                  displayName: name,
                  
                })
                  .then(() => {
                    navigate("/");
                  })
                  .catch((error) => {
                    // An error occurred
                    // ...
                  });

                navigate("/");
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              });
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Signup;
