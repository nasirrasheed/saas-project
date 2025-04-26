import React, { useState } from 'react';

function JoinBetaForm() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for joining! We'll contact you at ${email}.`);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: '0.75rem',
          width: '250px',
          marginRight: '1rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '0.75rem 1.25rem',
          background: '#0077B6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
        }}
      >
        Join Beta
      </button>
    </form>
  );
}

export default JoinBetaForm;
