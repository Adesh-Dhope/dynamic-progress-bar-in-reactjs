import React, { useState, useEffect } from 'react';
import './Progressbar.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  // Function to handle manual progress input
  const handleInputChange = (e) => {
    const value = Math.min(100, Math.max(0, Number(e.target.value))); // Clamp value between 0 and 100
    setProgress(value);
  };

  // Function to increment progress every second
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Determine bar color based on progress
  const getBarColor = () => {
    if (progress < 30) return 'red';
    if (progress < 70) return 'yellow';
    return 'green';
  };

  return (
    <div className="progress-bar-container">
      <h1>Dynamic Progress Bar</h1>
      <div className="progress-bar-wrapper">
        <div
          className="progress-bar"
          style={{ width: `${progress}%`, backgroundColor: getBarColor() }}
        ></div>
      </div>
      <div className="controls">
        <label htmlFor="progress-input">Set Progress (%):</label>
        <input
          id="progress-input"
          type="number"
          value={progress}
          onChange={handleInputChange}
        />
        <p>{progress}%</p>
      </div>
    </div>
  );
};

export default ProgressBar;
