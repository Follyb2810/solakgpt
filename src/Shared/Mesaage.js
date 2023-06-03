
import React, { useState, useEffect } from 'react';
import {TiMessages} from 'react-icons/ti'

function Message() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div className={`message-icon ${isVisible ? 'visible' : ''}`}>
          <TiMessages color='white'/>
            <h1>helllo</h1>
    </div>
  );
}

export default Message;