const HeroSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#5cb85c",
        color: "white",
        textAlign: "center",
        marginBottom: "30px",
        padding: "40px",
        boxShadow:
          "inset 0 8px 8px -8px rgba(0,0,0,.3), inset 0 -8px 8px -8px rgba(0,0,0,.3)",
      }}
    >
      <h1 style={{ fontSize: "55px", letterSpacing: "2px" }}>conduit</h1>
      <p style={{ fontSize: "30px", fontWeight: "300px" }}>
        A place to share your knowledge.
      </p>
    </div>
  );
};

export default HeroSection;
