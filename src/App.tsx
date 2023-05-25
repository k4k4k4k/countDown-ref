import * as React from 'react';
import './style.css';
import { useState, useEffect, useRef } from 'react';
export default function App() {
  const [timeLeft, setTimeLeft] = useState(10);
  const [clicks, setClicks] = useState(0);
  const int = useRef(null);
  useEffect(() => {
    int.current = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => {
      clearInterval(int.current);
    };
  }, []);
  useEffect(() => {
    if (timeLeft == 0) clearInterval(int.current);
  }, [timeLeft]);
  return (
    <div>
      <h1>{clicks}</h1>
      <h1>Time left: {timeLeft}</h1>
      {timeLeft && <button onClick={() => setClicks((prev) => prev + 1)}>+</button>}
    </div>
  );
}
