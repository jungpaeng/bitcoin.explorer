export const getDateStrFromSeconds = (seconds: number) => {
  const date = new Date(null);
  date.setSeconds(seconds);
  return date.toUTCString();
};
