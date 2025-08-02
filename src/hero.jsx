import React, { useEffect, useState } from "react";
import "./App.css";

function HeroSection() {
  const [text, setText] = useState("");
  const fullText = " Organize your tasks with ease and efficiency";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index]);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">TaskFlow</h1>
        <p className="hero-subtitle">{text}</p>
        <button className="hero-btn">Get Started</button>
      </div>
    </section>
  );
}

export default HeroSection;
