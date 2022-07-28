import React, { useEffect, useState } from "react";
import moment from "moment";
import Clock from "./Clock";

const CloclContainer = () => {
  const nowHour = moment().format("h");
  const nowMinute = moment().format("mm");
  const nowSecund = moment().format("ss");

  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div>
      <Clock hour={nowHour} minute={nowMinute} secund={nowSecund} />
    </div>
  );
};

export default CloclContainer;
