import React from 'react';
import { motion } from 'framer-motion';
import './PricingPage.css'; // Ensure this CSS file exists
import useTitle from '../hooks/useTitle'; // <- Add this only once

const pricingPlans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for new freelancers starting out.",
    features: ["Track income & expenses", "Basic reports", "Email support"],
    cta: "Get Started"
  },
  {
    name: "Pro",
    price: "$12/mo",
    description: "For active freelancers needing more control.",
    features: ["Everything in Starter", "Tax estimator", "Invoicing tools"],
    cta: "Start Free Trial"
  },
  {
    name: "Premium",
    price: "$29/mo",
    description: "For digital nomads running full businesses.",
    features: ["Everything in Pro", "Multi-currency support", "Priority support"],
    cta: "Upgrade Now"
  }
];

const PricingPage = () => {
  useTitle("Pricing - FreelanceFinance"); // Set the page title
  return (
    <div className="pricing-page">
      <h1 className="pricing-heading">Simple pricing, for every stage of your journey</h1>
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className="pricing-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2>{plan.name}</h2>
            <p className="price">{plan.price}</p>
            <p className="desc">{plan.description}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            <button className="pricing-btn">{plan.cta}</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
