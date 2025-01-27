const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

const taskCrudRoutes = require("./routes/taskCrudRoutes");
const taskPriorityRoutes = require("./routes/taskPriorityRoute");

dotenv.config();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api", taskCrudRoutes);
app.use("/api", taskPriorityRoutes);


// connect to mongodb
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected successfully to mongodb");
  })
  .catch((err) => console.error(err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server listen on : http://localhost:${PORT}`);
});
