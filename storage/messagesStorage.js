import { formatDistance } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import messages from "../data/messages.js";

const storage = (initialData) => {
  const messages = initialData;

  const getMessages = () => {
    return messages.map((msg) => ({
      ...msg,
      createdAt: formatDistance(msg.createdAt, new Date(), { addSuffix: true }),
    }));
  };

  const getMessage = (id) => {
    const msg = messages.find((msg) => msg.id === id);
    if (!msg) return {};
    return {
      ...msg,
      cratedAt: formatDistance(msg.createdAt, new Date(), { addSuffix: true }),
    };
  };

  const createMessage = (title, text) => {
    const id = uuidv4();
    messages.push({ id, title, text, createdAt: new Date() });
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

const messagesStorage = storage(messages);

export default messagesStorage;
