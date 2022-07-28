const fromMsToTime = (ms) => {
  const mss = ms * 10;
  let sec = ((mss % (1000 * 60)) / 1000 - parseInt((mss % (1000 * 60)) / 1000))
    .toFixed(2)
    .split(".")[1];

  return {
    h: parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    min: parseInt((mss % (1000 * 60 * 60)) / (1000 * 60)),
    s: parseInt((mss % (1000 * 60)) / 1000),
    ms: Number(sec),
  };
};
export default fromMsToTime;
