import React from "react";
import "./App.css";
import Navbar from "./Componenets/Navbar/Navbar";
import Routing from "./Componenets/Routing/Routing";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routing />
      </main>
    </div>
  );
};

export default App;
