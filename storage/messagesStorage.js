// This module is not part of this project anymore, left here for legacy.
// It was used instead of database to create in memory storage for message
// CRUDE operations.
// How to use it: import it to message controller as default import and use
// methods instead of database. Storage is factory function for creating
// instance of storage object.

import { formatDistance } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import messages from "../data/messages.js";

const storage = (initialData) => {
  let messages = [...initialData];

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

  const updateMessage = (id, text, title) => {
    messages = messages.map((msg) =>
      msg.id === id ? { id, title, text, createdAt: new Date() } : msg
    );
  };

  const deleteMessage = (id) => {
    messages = messages.filter((msg) => msg.id !== id);
  };

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
