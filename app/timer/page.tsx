"use client";

import { FC, useEffect, useState } from "react";

interface TimerProps {
  initialSeconds: number;
}

const Timer: FC<TimerProps> = ({ initialSeconds = 300 }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setSeconds(initialSeconds);
    setIsActive(false);
  };

  return (
    <main>
      <div>
        <div>
          {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
        </div>
        <button type='button' onClick={startTimer}>Start</button>
        <button type='button' onClick={pauseTimer}>Pause</button>
        <button type='button' onClick={resetTimer}>Reset</button>
      </div>
    </main>
  );
}

export default Timer;