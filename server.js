const express = require("express");
const { json } = require("express/lib/response");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH"],
  })
);

const poolConfig = {
  host: "localhost",
  user: "atlantis",
  database: "todo_mvp",
  port: 5432,
};

const pool = new Pool(poolConfig);

if (process.env.NODE_ENV === "production") {
  poolConfig.ssl = { rejectUnauthorized: false };
}

const PORT = 5555;

app.get("/todos", async (req, res) => {
  //const todo = { action: "exercise", done: false };
  try {
    const data = await pool.query("SELECT * FROM todos ORDER BY id");
    res.json(data.rows);
  } catch (error) {
    res.send(error.message);
  }
});

app.post("/todos/add", async (req, res) => {
  let { action, done } = req.body;

  try {
    const data = await pool.query(
      `INSERT INTO todos (action, done) VALUES($1, $2) RETURNING*;`,
      [action, done]
    );
    console.log(data.rows);
    res.json(data.rows);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.patch("/todos/changeDoneState", async (req, res) => {
  let { id } = req.body;
  try {
    const data = await pool.query(
      `UPDATE todos SET done = NOT done WHERE id = $1`,
      [id]
    );
    res.json("updated completion box");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
