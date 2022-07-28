import React, { useEffect, useState } from "react";
import S from "./timer.module.css";
import Clock from "../Clock/Clock";

const Timer = (props) => {
  const [ms, setMs] = useState(0);
  const [mss, setMss] = useState(0);
  const [s, setS] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);

  const startTimer = () => {
    setMs((prev) => prev + 1);
    setMss((prev) => prev + 1);
  };
  if (ms === 100) {
    setMs(0);
    setS((prev) => prev + 1);
  }
  if (s === 60) {
    setS(0);
    setMin((prev) => prev + 1);
  }
  if (min === 60) {
    setMin(0);
    setHour((prev) => prev + 1);
  }
  return (
    <div className={S.bodyTimer}>
      <Clock hour={hour} minute={min} secund={s} ms={ms} />
      <div className={S.blockBody}>
        <div className={S.clockBody}>
          <div className={S.timeBlock}>{hour}</div>
          <div className={S.blockTitle}>hour</div>
        </div>{" "}
        <div className={S.clockBody}>
          <div className={S.timeBlock}>{min}</div>
          <div className={S.blockTitle}>min</div>
        </div>{" "}
        <div className={S.clockBody}>
          <div className={S.timeBlock}>{s}</div>
          <div className={S.blockTitle}>sec</div>
        </div>{" "}
        <div className={S.clockBody}>
          <div className={S.timeBlock}>{ms}</div>
          <div className={S.blockTitle}>ms</div>
        </div>
      </div>
      <div className={S.btnBody}>
        <button
          onClick={() => {
            props.startOrStopTimer(startTimer);
          }}
        >
          {props.timer ? "Пауза" : "Старт"}
        </button>
        <button
          onClick={() => {
            props.resetTimer(setMs, setS, setMin, setHour, setMss);
          }}
        >
          Обновить
        </button>
        <button
          onClick={() => {
            props.addLap(mss);
          }}
        >
          круг
        </button>{" "}
        <button
          onClick={() => {
            props.clearLap(setMs, setMss);
          }}
        >
          скинуть все круги
        </button>
      </div>
    </div>
  );
};

export default Timer;
