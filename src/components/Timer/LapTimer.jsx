import React from "react";
import S from "./timer.module.css";

const LapTimer = (props) => {
  return (
    <div className={S.bodyTabl}>
      <table>
        <tbody>
          <tr className={S.firstRow}>
            <th>
              <p>круг</p>
            </th>
            <th>
              <p>время круга</p>
            </th>
            <th>
              <p>разница</p>
            </th>
            <th>
              <p>общее время</p>
            </th>
          </tr>
          {props.raznlap.map((el, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                {el.totalLap.totalLap.hour
                  ? el.totalLap.totalLap.hour + "ч"
                  : ""}
                {el.totalLap.totalLap.min ? el.totalLap.totalLap.min + "м" : ""}
                {el.totalLap.totalLap.s ? el.totalLap.totalLap.s + "с" : ""}
                {el.totalLap.totalLap.ms ? el.totalLap.totalLap.ms + "мс" : ""}
              </td>

              <td className={el.perfect ? S.green : S.red}>
                {el.perfect && <span>-</span>}
                {el.raznlap.hour ? el.raznlap.hour + "ч" : ""}
                {el.raznlap.min ? el.raznlap.min + "м" : ""}
                {el.raznlap.s ? el.raznlap.s + "с" : ""}
                {el.raznlap.ms ? el.raznlap.ms + "мс" : ""}
              </td>

              <td>
                {el.total.hour ? el.total.hour + "ч" : ""}
                {el.total.min ? el.total.min + "м" : ""}
                {el.total.s ? el.total.s + "с" : ""}
                {el.total.ms ? el.total.ms + "мс" : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {props.lap.length > 0 && (
        <div className={S.beastOfFail}>
          <div>
            лучший круг № {props.bestLaps[0] + 1}{" "}
            {props.bestLap === undefined ? (
              ""
            ) : (
              <span>
                ({props.bestLap.hour ? props.bestLap.hour + "ч" : ""}
                {props.bestLap.min ? props.bestLap.min + "м" : ""}
                {props.bestLap.s ? props.bestLap.s + "с" : ""}
                {props.bestLap.ms ? props.bestLap.ms + "мс" : ""})
              </span>
            )}
          </div>
          <div>
            худший круг № {props.failLaps[0] + 1}{" "}
            {props.failLap === undefined ? (
              ""
            ) : (
              <span>
                ({props.failLap.hour ? props.failLap.hour + "ч" : ""}
                {props.failLap.min ? props.failLap.min + "м" : ""}
                {props.failLap.s ? props.failLap.s + "с" : ""}
                {props.failLap.ms ? props.failLap.ms + "мс" : ""})
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LapTimer;
