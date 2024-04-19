import React from "react";

const WelcomePage = () => {
  return (
    <div style={styles.container}>
      <img
        src="https://res.cloudinary.com/isreal/image/upload/v1711041113/AJIS%20PROJECT/icon_crwplo.png"
        alt="Logo"
        style={styles.logo}
      />
      <h1 style={styles.heading}>Welcome!</h1>
      <p style={styles.text}>
        Congratulations! Your registration was successful.
      </p>
      <p style={styles.text}>Start exploring our platform now.</p>
      <button
        style={styles.button}
        onClick={() => (window.location.href = "app313red://Login")}
      >
        Get Started
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial, sans-serif",
  },
  logo: {
    width: "150px",
    marginBottom: "40px",
  },
  heading: {
    fontSize: "36px",
    color: "#333",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
    transition: "background-color 0.3s ease",
    textDecoration: "none",
  },
};

export default WelcomePage;
