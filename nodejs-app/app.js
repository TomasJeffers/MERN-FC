const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

// database init
mongoose
  .connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to database...");
  })
  .catch(() => {
    console.log("failed connected to database");
  });

// Routes
const employeeRoutes = require("./routes/employee");
// Controllers
const usersControllers = require('./controllers/users');

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// // Routes
// app.use("/api", userRoutes);
app.use("/api/users", usersControllers);
app.use("/api/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.send("App is working...");
});

// PORT
const port = process.env.PORT || 5000;

// Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
