import React from "react";
import "./App.css"; // Make sure to import the CSS

function Reviews() {
  return (
    <section className="reviews-section">
      <h2 className="reviews-heading">What Our Users Say</h2>
      <div className="review-cards">
        <div className="review-card">
          <p className="quote">“TaskFlow changed how I organize my life. Simple and powerful!”</p>
          <h4 className="review-name">Sarah Ali</h4>
          
        </div>

        <div className="review-card">
          <p className="quote">“As a student, it helps me stay on track with deadlines. Highly recommend!”</p>
          <h4 className="review-name">Ahmed Raza</h4>
          
        </div>

        <div className="review-card">
          <p className="quote">“Love the simplicity. Everything I need without any clutter.”</p>
          <h4 className="review-name">Fatima Khan</h4>
          
        </div>
      </div>
    </section>
  );
}

export default Reviews;
