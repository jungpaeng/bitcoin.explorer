import { WS_URL } from '../contants';
import { stringToJSON } from './format';

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

export const addSocketEventListener = (callback: (message: any) => any) => {
  const socket = new WebSocket(WS_URL);

  socket.addEventListener('message', (message) => {
    const parsedMessage = parseMessage(message);
    if (parsedMessage !== null && parsedMessage !== undefined) {
      callback(parsedMessage);
    }
  });
};
