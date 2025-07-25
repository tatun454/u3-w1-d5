import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MovieGallery from "./components/MovieGallery";
import "./App.css";

function App() {
  const sagas = [
    {
      name: "Harry Potter",
      imdbIDs: ["tt0241527", "tt0295297", "tt0304141"],
    },
    {
      name: "Lord of the Rings",
      imdbIDs: ["tt0120737", "tt0167260", "tt0167261"],
    },
    {
      name: "Star Wars",
      imdbIDs: ["tt0076759", "tt0080684", "tt0086190"],
    },
  ];

  const [error, setError] = React.useState(null);

  return (
    <>
      <Navbar />
      <main
        style={{
          padding: "1rem",
          backgroundColor: "#141414",
          color: "white",
          minHeight: "100vh",
        }}
      >
        {error && <p>Error: {error}</p>}
        {sagas.map((saga) => (
          <MovieGallery
            key={saga.name}
            sagaName={saga.name}
            imdbIDs={saga.imdbIDs}
            onError={setError}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
