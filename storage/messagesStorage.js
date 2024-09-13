import { formatDistance } from "date-fns";
import { v4 as uuidv4 } from "uuid";

const storage = () => {
  const _readData = () => {
    const data = localStorage.getItem("mini-messages");
    return data ? JSON.parse(data) : [];
  };

  const _writeData = (messages) => {
    localStorage.setItem("mini-messages", JSON.stringify(messages));
  };

  const messages = _readData();

  const getMessages = () => {
    return messages.map((msg) => ({
      ...msg,
      createdAt: formatDistance(msg.createdAt, new Date()),
    }));
  };

  const getMessage = (id) => {};

  const createMessage = (title, body) => {
    const id = uuidv4();
    const messages = push({ id, title, body, createdAt: new Date() });
    _writeData(messages);
  };

  const updateMessage = (id) => {};

  const deleteMessage = (id) => {};

  return {
    getMessages,
    getMessage,
    createMessage,
    updateMessage,
    deleteMessage,
  };
};

const messagesStorage = storage();

export default messagesStorage;
