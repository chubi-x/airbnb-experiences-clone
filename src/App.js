import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data/data";
export default function App() {
  return (
    <div>
      <Navbar />
      <div className="hero-container">
        <Hero />
      </div>
      <div className="card-container">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
