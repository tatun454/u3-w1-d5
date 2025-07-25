import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#141414",
        color: "gray",
        padding: "2rem 4rem",
        fontSize: "0.8rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <div style={{ flex: "1 1 150px" }}>
          <p>Audio and Subtitles</p>
          <p>Media Center</p>
          <p>Privacy</p>
          <p>Contact Us</p>
        </div>
        <div style={{ flex: "1 1 150px" }}>
          <p>Audio Description</p>
          <p>Investor Relations</p>
          <p>Legal Notices</p>
        </div>
        <div style={{ flex: "1 1 150px" }}>
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
        </div>
        <div style={{ flex: "1 1 150px" }}>
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          fontSize: "1.5rem",
          color: "gray",
        }}
      >
        <a href="#" aria-label="Facebook" style={{ color: "gray" }}>
          <i class="bi bi-facebook"></i>
        </a>
        <a href="#" aria-label="Instagram" style={{ color: "gray" }}>
          <i class="bi bi-instagram"></i>
        </a>
        <a href="#" aria-label="Twitter" style={{ color: "gray" }}>
          <i class="bi bi-twitter-x"></i>
        </a>
        <a href="#" aria-label="YouTube" style={{ color: "gray" }}>
          <i class="bi bi-youtube"></i>
        </a>
      </div>
      <div style={{ fontSize: "0.7rem", color: "gray" }}>
        &copy; 1997-2024 Netflix, Inc.
      </div>
    </footer>
  );
};

export default Footer;
