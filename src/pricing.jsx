import React from 'react';
import './App.css';

const PricingSection = () => {
  const plans = [
    {
      title: 'Free',
      price: '$0',
      features: ['Basic Task Management', '1 Project', 'Community Support']
    },
    {
      title: 'Pro',
      price: '$9.99/mo',
      features: ['Unlimited Tasks', '5 Projects', 'Email Support']
    },
    {
      title: 'Team',
      price: '$19.99/mo',
      features: ['Unlimited Everything', 'Team Collaboration', 'Priority Support']
    },
  ];

  return (
    <section className="pricing-section">
      <h2 className="pricing-heading">Choose Your Plan</h2>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="choose-btn">Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
