import pool from "./pool.js";

const getMessages = async () => {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM messages ORDER BY created_at"
    );
    return rows;
  } catch (error) {
    throw error;
  }
};

const getMessage = async () => {
  try {
    //
  } catch (error) {
    throw error;
  }
};

const insertMessage = async (title, text) => {
  try {
    await pool.query("INSERT INTO messages (title)", [title, text]);
  } catch (error) {
    throw error;
  }
};

const deleteMessage = async () => {
  try {
    //
  } catch (error) {
    throw error;
  }
};

const updateMessage = async () => {
  try {
    //
  } catch (error) {
    throw error;
  }
};

export { getMessages, getMessage, insertMessage, deleteMessage, updateMessage };
