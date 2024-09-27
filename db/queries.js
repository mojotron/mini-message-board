import pool from "./pool.js";
import formatTimestamp from "../utils/formatTimestamp.js";

const getMessages = async () => {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM messages ORDER BY created_at"
    );

    return rows.map((msg) => ({
      ...msg,
      createdAt: formatTimestamp(msg.created_at),
    }));
  } catch (error) {
    throw error;
  }
};

const getMessage = async (messageId) => {
  try {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1;", [
      messageId,
    ]);
    const msg = rows[0];
    return { ...msg, createdAt: formatTimestamp(msg.created_at) };
  } catch (error) {
    throw error;
  }
};

const insertMessage = async (title, text) => {
  const timestamp = new Date();
  try {
    await pool.query(
      "INSERT INTO messages (id, title, text, created_at) VALUES (uuid_generate_v4(), $1, $2, $3)",
      [title, text, timestamp]
    );
  } catch (error) {
    throw error;
  }
};

const deleteMessage = async (messageId) => {
  try {
    await pool.query("DELETE FROM messages WHERE id = $1;", [messageId]);
  } catch (error) {
    throw error;
  }
};

const updateMessage = async (messageId, title, text) => {
  try {
    const timestamp = new Date();
    await pool.query(
      "UPDATE messages SET title = $2, text = $3, created_at = $4 WHERE id = $1",
      [messageId, title, text, timestamp]
    );
    //
  } catch (error) {
    throw error;
  }
};

export { getMessages, getMessage, insertMessage, deleteMessage, updateMessage };
