import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../Firebase/Config";

const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [hasError, sethasError] = useState(false);
  const [firebaseError, setfirebaseError] = useState("");

  const navigate = useNavigate();
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

          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              navigate("/");
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;

              sethasError(true);

              switch (errorCode) {
                case "auth/invalid-email":
                  setfirebaseError("Wrong Email");
                  break;

                case "auth/user-not-found":
                  setfirebaseError("User not found :( ");
                  break;

                case "auth/wrong-password":
                  setfirebaseError("Wrong Password");
                  break;

                case "auth/too-many-requests":
                  setfirebaseError(
                    "Too many requests, please try aganin later"
                  );
                  break;

                default:
                  setfirebaseError("Please check your email & password");
                  break;
              }
            });
        }}
      >
        Sign In
      </button>
      {hasError && <h2 style={{ color: "#b85c5c" }}>{firebaseError}</h2>}
    </div>
  );
};

export default Signin;
