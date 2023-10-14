import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Config";
import { useAuthState } from "react-firebase-hooks/auth";

const NewPost = () => {
  const navigate =useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  
    return (
    <div>
      <form style={{ width: "100%", padding: "30px", margin: "auto" }}>
        <input type="text" placeholder="Articl Title" />
        <input type="text" placeholder="Whats this article about" />
        <input
          type="text"
          placeholder="Write your article (in markdown)"
          style={{ height: "100px" }}
        />
        <input type="text" placeholder="Enter tags" />
        <button
          style={{
            color: "white",
            border: "none",
            backgroundColor: "#5cb85c",
            marginBottom: "20px",
            borderRadius: "8px",
            padding: "16px 30px",
            cursor: "pointer",
            margin: "auto",
            fontSize: "20px",
          marginLeft:"45%",
          marginTop:"20px"
          }}
        >
          Publish Articls
        </button>
      </form>
    </div>
  );
};

export default NewPost;
