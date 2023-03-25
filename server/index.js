const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const userRouter = require("./src/routers/user");
const proposalRouter = require("./src/routers/proposal");
const rescomRouter = require("./src/routers/rescom");
const adminRouter = require("./src/routers/admin");
const cityRouter = require("./src/routers/city");


mongoose.connect(process.env.MONGO_URL);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use('/api/proposal', proposalRouter)
app.use('/api/city', cityRouter)
app.use('/api/rescom', rescomRouter)
app.use('/api/admin', adminRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server started http://localhost:${process.env.PORT}`);
});