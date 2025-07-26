"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    alert('Login submitted!');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f6f7f8' }}>
      <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 32, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', minWidth: 320 }}>
        <h2 style={{ marginBottom: 24, textAlign: 'center' }}>Log In</h2>
        <label style={{ display: 'block', marginBottom: 8 }}>
          Email
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: 8, marginTop: 4, marginBottom: 16, borderRadius: 6, border: '1px solid #ccc' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: 8 }}>
          Password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: 8, marginTop: 4, marginBottom: 16, borderRadius: 6, border: '1px solid #ccc' }}
          />
        </label>
        <button type="submit" style={{ width: '100%', background: '#ff4500', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 0', fontWeight: 700, fontSize: 16, marginBottom: 12 }}>
          Log In
        </button>
        <div style={{ textAlign: 'center', fontSize: 14 }}>
          Don't have an account?{' '}
          <Link href="/signup" style={{ color: '#0079d3', textDecoration: 'underline' }}>Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login; 