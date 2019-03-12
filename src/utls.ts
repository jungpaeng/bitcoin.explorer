export const getDateStrFromSeconds = (seconds: number) => {
  const date = new Date(0);
  date.setSeconds(seconds);
  return date.toUTCString();
};

export const stringToJSON = (string: string) => {
  try {
    return JSON.parse(string);
  } catch (e) {
    console.error(e);
  }
};
