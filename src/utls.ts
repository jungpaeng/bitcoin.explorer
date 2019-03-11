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

export const parseMessage = (message: any) => {
  if (typeof message.data === 'string') {
    const { data } = message;
    const parsedMessage = stringToJSON(data);

    if (parsedMessage !== null) {
      const { type } = parsedMessage;

      if (type === 'BLOCKCHAIN_RESPONSE') {
        return parsedMessage.data;
      }
      return null;
    }
  }
};
