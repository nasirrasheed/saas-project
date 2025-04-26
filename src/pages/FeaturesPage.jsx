import React from 'react';
import useTitle from '../hooks/useTitle'; // <- Add this only once

function FeaturesPage() {
useTitle("Features - FreelanceFinance"); // <- Set the page title

  return (
    <div>
      <h1>Features</h1>
      <p>Track income, manage expenses, automate taxes, and more — built for freelancers & digital nomads.</p>
    </div>
  );
}

export default FeaturesPage;
