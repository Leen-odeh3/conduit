import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#242424",
        color: "white",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <i
        className="fa fa-github fa-2x"
        aria-hidden="true"
        style={{ fontSize: "30px" }}
      ></i>
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "underline",
          paddingLeft: "8px",
        }}
      >
        Fork On Github
      </Link>
    </div>
  );
};

export default Footer;
