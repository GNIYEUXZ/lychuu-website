import React, { useState, useEffect } from 'react';
import '../App.scss';

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${isLoading ? 'active' : ''}`}>
      <div className="logo">
      </div>
    </div>
  );
};