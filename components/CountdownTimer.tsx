'use client';

import React, { useState, useRef, useEffect } from 'react';

const CountdownTimer: React.FC<{ initialSeconds: number }> = ({ initialSeconds }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(initialSeconds * 1000);
  const endTimeRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const start = () => {
    if (!isRunning) {
      endTimeRef.current = performance.now() + remainingTime;
      intervalRef.current = setInterval(() => {
        const newRemainingTime = endTimeRef.current - performance.now();
        if (newRemainingTime <= 0) {
          clearInterval(intervalRef.current!);
          setRemainingTime(0);
          setIsRunning(false);
        } else {
          setRemainingTime(newRemainingTime);
        }
      }, 10); // Update every 10 milliseconds
      setIsRunning(true);
    }
  };

  const pause = () => {
    if (isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setRemainingTime(endTimeRef.current - performance.now());
      setIsRunning(false);
    }
  };

  const reset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setRemainingTime(initialSeconds * 1000);
    setIsRunning(false);
  };

  const formatTime = (time: number) => {
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds < 10 ? '0' : ''}${milliseconds}`;
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>{formatTime(remainingTime)}</div>
      <button onClick={isRunning ? pause : start}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CountdownTimer;
