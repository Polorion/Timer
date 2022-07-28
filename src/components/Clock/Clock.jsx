import React from "react";
import S from "./clock.module.css";

const Clock = ({ hour, minute, secund, ms = 0 }) => {
  const sec = secund * 6 + ms * 0.06;
  const min = minute * 6 + sec / 60;
  const hor = hour * 30;
  return (
    <>
      <div className={S.clockBlody}>
        <div className={S.second}>
          <div
            style={{ transform: `rotate(${sec}deg)` }}
            className={S.secondArrow}
          ></div>
        </div>

        <div className={S.minute}>
          <div
            style={{ transform: `rotate(${min}deg)` }}
            className={S.minuteArrow}
          ></div>
        </div>

        <div className={S.hour}>
          <div
            style={{ transform: `rotate(${hor + (minute / 60) * 30}deg)` }}
            className={S.hourArrow}
          ></div>
        </div>
      </div>
    </>
  );
};
export default Clock;
