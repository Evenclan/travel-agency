export const formatTime = (time) => {

  if (time == null || typeof time !== 'number' || time < 0) return null;


  let hour = Math.floor(time / 3600);
  let minute = Math.floor((time / 60) % 60);
  let second = Math.floor(time % 60);

  let newTime = (hour < 10 ? '0' + hour : hour) + ':'
    + (minute < 10 ? '0' + minute : minute) + ':'
    + (second < 10 ? '0' + second : second);

  return newTime;
};
