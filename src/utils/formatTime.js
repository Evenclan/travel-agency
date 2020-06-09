export const formatTime = (time) => {

  if (!time || typeof time !== 'number' || time < 0) return null;


  // --- 66000 seconds =
  let hour = Math.floor(time / 3600); /*66000 / 3600 = 18,333 -> 18:__:__ */
  let minute = Math.floor((time / 60) % 60); /* 66000 / 60 = 1100, 1100 % 60 = 20 -> 18:20:__  */
  let second = Math.floor(time % 60); /* 66000 % 60 = 0 --> 18:20:_0 */

  let newTime = (hour < 10 ? '0' + hour : hour) + ':'
    + (minute < 10 ? '0' + minute : minute) + ':'
    + (second < 10 ? '0' + second : second);

  return newTime;
};

