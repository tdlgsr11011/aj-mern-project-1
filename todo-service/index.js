const express = require("express");
const { config } = require("dotenv");

const { connectDB } = require("./database");
const { todosRouter } = require("./routes/todo");

config();

const app = express();

connectDB(process.env.DB_URL)
  .then((r) => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log("Error while conneting DB");
  });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => res.redirect("/todos"));

app.use("/todos", todosRouter);

app.listen(process.env.PORT, () => {
  console.log("service started on port ", process.env.PORT);
});
