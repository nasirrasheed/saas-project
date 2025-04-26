import React from 'react';
import useTitle from '../hooks/useTitle'; // <- Add this only once

function FAQsPage() {
  useTitle("FAQs - FreelanceFinance"); // <- Set the page title

  return (
    <div>
      <h1>FAQs</h1>
      <p>Got questions? We’ve got answers!</p>
    </div>
  );
}

export default FAQsPage;
