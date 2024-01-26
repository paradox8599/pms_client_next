"use client";
import React, { useState } from 'react';
import Navbar from '@/widgets/navbar';
import SignInPage from '../app/sign-in/page';

export default function LayoutComponent() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <>
      {loggedIn ? (
        <Navbar />
      ) : (
        <SignInPage handleLogin={handleLogin} />
      )}
    </>
  );
}

