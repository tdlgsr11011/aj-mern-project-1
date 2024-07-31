const cors = require("cors");
const express = require("express");
const { config } = require("dotenv");

const { connectDB } = require("./database");
const { todosRouter } = require("./routes/todo");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

config();

const app = express();

connectDB(process.env.DB_URL)
  .then((r) => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log("Error while conneting DB");
  });

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => res.redirect("/todos"));

app.use("/todos", todosRouter);

app.listen(process.env.PORT, () => {
  console.log("service started on port ", process.env.PORT);
});
