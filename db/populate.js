import "dotenv/config";
import pg from "pg";

const { Client } = pg;

const SQL = `

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
DROP TABLE IF EXISTS messages;

CREATE TABLE IF NOT EXISTS messages (
  id UUID PRIMARY KEY NOT NULL,
  title VARCHAR(50) NOT NULL,
  text VARCHAR(500) NOT NULL,
  created_at TIMESTAMP NOT NULL
);

INSERT INTO messages (id, title, text, created_at)
VALUES 
  (uuid_generate_v4(), 'node', 'Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.', '2024-09-01 05:13:30'),
  (uuid_generate_v4(), 'express', 'Fast, unopinionated, minimalist web framework for Node.js', '2024-09-05 05:13:30'),
  (uuid_generate_v4(), 'ejs', 'EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. Just plain JavaScript.', '2024-09-09 05:13:30'),
  (uuid_generate_v4(), 'tailwind', 'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.', '2024-09-12 05:13:30'),
  (uuid_generate_v4(), 'postgresql', 'PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.', '2024-09-15 05:13:30');
`;

const populate = async () => {
  try {
    console.log("> db populate init");
    const client = new Client({ connectionString: process.env.POSTGRESQL_URI });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("> db populate completed");
  } catch (error) {
    console.log(error);
    process.exit(1);
  } finally {
    process.exit(0);
  }
};

populate();
