const path = require("path");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware.js");
const connectDB = require("./config/db.js");
const PORT = process.env.PORT || 8000;

//Connect to databse
connectDB();

const app = express();

//BODY PART
//Allow us to send raw json.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to the Support Desk API" });
// });

//Routes
app.use("/api/users", require("./routes/userRoutes.js"));
app.use("/api/tickets", require("./routes/ticketRoute.js"));

//Set build folder as static
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(__dirname, "../", "frontend", "build", "index.html");
});

// //Serve Fronted
// if (process.env.NODE_ENV && process.env.NODE_ENV === "production") {
//   //Set build folder as static
//   app.use(express.static(path.join(__dirname, "../frontend/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(__dirname, "../", "frontend", "build", "index.html");
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.json({ message: "Welcome to the Support Desk API" });
//   });
// }

app.use(errorHandler);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
