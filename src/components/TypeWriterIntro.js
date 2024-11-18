import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterIntro = ({ onComplete }) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
      onComplete(); // Notify the parent to start the app
    }, 4000); // Adjust duration based on animation length
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <h1>
        {showMessage ? (
          'Welcome to the messenger'
        ) : (
          <Typewriter
            words={['Welcome To The Messenger App By AHIM']}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
          />
        )}
      </h1>
    </div>
  );
};

export default TypewriterIntro;
