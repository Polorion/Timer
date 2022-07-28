import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import LapTimer from "./LapTimer";
import S from "./timer.module.css";
import fromMsToTime from "../../utilit/ConverterMsFromTime";

const TimerContainer = () => {
  const [timer, setTimer] = useState(false);
  const [lap, setLap] = useState([]);
  const [interval, setIntervals] = useState();

  const lapsTotal = lap.map((el, i, array) => {
    let lastLap = array[i].ms;
    let def;
    if (array[i - 1] !== undefined) {
      def = array[i - 1].ms;
    } else {
      def = 0;
    }
    return {
      total: el.ms,
      totalLap: lastLap - def,
    };
  });
  const raznlap = lapsTotal.map((el, i, array) => {
    let lastLap = array[i].totalLap;
    if (isNaN(lastLap)) {
      lastLap = el.total;
    }
    let def;
    if (array[i - 1] !== undefined) {
      def = array[i - 1].totalLap;
    } else {
      def = 0;
    }
    const rez = lastLap - def;

    return {
      total: fromMsToTime(el.total),
      totalLap: {
        totalLap: fromMsToTime(el.totalLap),
        totalMs: el.totalLap,
      },
      raznlap: fromMsToTime(Math.abs(rez)),
      perfect: rez < 0 ? true : false,
    };
  });
  const arrayAllTimeLap = raznlap.map((el) => el.totalLap.totalMs);
  const bestLaps = arrayAllTimeLap.reduce(
    (prev, item, index) => {
      if (item < prev[1]) {
        return [index, item];
      } else {
        return prev;
      }
    },
    [0, arrayAllTimeLap[0]]
  );

  let bestLap;
  if (raznlap[bestLaps[0]]) {
    bestLap = fromMsToTime(raznlap[bestLaps[0]].totalLap.totalMs);
  }

  console.log(bestLap);
  const failLaps = arrayAllTimeLap.reduce(
    (prev, item, index) => {
      if (item > prev[1]) {
        return [index, item];
      } else {
        return prev;
      }
    },
    [0, arrayAllTimeLap[0]]
  );

  let failLap;
  if (raznlap[failLaps[0]]) {
    failLap = fromMsToTime(raznlap[failLaps[0]].totalLap.totalMs);
  }
  console.log(failLap);

  const addLap = (ms) => {
    setLap((prev) => [...prev].concat({ ms }));
  };
  const clearLap = (setMs, setMss) => {
    setLap([]);
  };

  const resetTimer = (setMs, setS, setMin, setHour, setMss) => {
    setMss(0);
    setMs(0);
    setS(0);
    setMin(0);
    setHour(0);
  };

  const startOrStop = (startTimer) => {
    setTimer(!timer);
    if (!timer) {
      setTimer(!timer);
      startTimer();
      setIntervals(setInterval(startTimer, 10));
    } else {
      setTimer(!timer);
      clearInterval(interval);
    }
  };

  return (
    <div className={S.body}>
      <Timer
        timer={timer}
        startOrStopTimer={startOrStop}
        addLap={addLap}
        clearLap={clearLap}
        resetTimer={resetTimer}
      />

      <LapTimer
        lap={lap}
        fromMsToTime={fromMsToTime}
        raznlap={raznlap}
        failLap={failLap}
        failLaps={failLaps}
        bestLap={bestLap}
        bestLaps={bestLaps}
      />
    </div>
  );
};

export default TimerContainer;
