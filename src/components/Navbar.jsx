import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#141414",
        padding: "0.5rem 2rem",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#e50914" }}>
        NETFLIX
      </div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "1.5rem",
          margin: 0,
          padding: 0,
          fontSize: "0.9rem",
        }}
      >
        <li style={{ cursor: "pointer" }}>Home</li>
        <li style={{ cursor: "pointer" }}>TV Shows</li>
        <li style={{ cursor: "pointer" }}>Movies</li>
        <li style={{ cursor: "pointer" }}>Recently Added</li>
        <li style={{ cursor: "pointer" }}>My List</li>
      </ul>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          Kids
        </button>
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          <i class="bi bi-bell"></i>
        </button>
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          <i class="bi bi-person"></i>
        </button>

        <button
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          <i class="bi bi-gear"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
