import React from "react";
import { FaTasks, FaCalendarAlt, FaBell } from "react-icons/fa";
import "./App.css";

const features = [
  {
    icon: <FaTasks size={35} color="#ffffff" />,
    title: "Smart Tasking",
    description: "Easily organize your daily tasks with smart, AI-assisted tools that boost your productivity.",
  },
  {
    icon: <FaCalendarAlt size={35} color="#ffffff" />,
    title: "Smart Scheduling",
    description: "Easily organize your tasks, set reminders, and manage your schedule with an intuitive built-in calendar.",
  },
  {
    icon: <FaBell size={35} color="#ffffff" />,
    title: "Real-time Alerts",
    description: "Stay ahead of your schedule and never miss a deadline with real-time smart notifications.",
  },
];

function FeaturesSection() {
  return (
    <section className="features-section">
      <h2 className="features-title">Features</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
