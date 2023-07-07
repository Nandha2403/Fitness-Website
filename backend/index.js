const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connection } = require("./config/db");
const { adminRouter } = require("./routes/admin.routes");
const { userRouter } = require("./routes/users.routes");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send({msg:"Welcome to the Fitness Club"})
});

app.use(express.json());
app.use("/users", userRouter);
app.use("/admin", adminRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(`server is running at ${process.env.port}`);
    console.log("Connected to DB");
  } catch (err) {
    console.log("Something went wrong");
    console.log(err);
  }
});
