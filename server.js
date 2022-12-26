const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { urlencoded } = require("express");
const path = require('path')

const userRouter = require("./routes/user.routes");
const transactionRouter = require("./routes/transactions.route");
const reviewRouter = require("./routes/reviews.route");
const itemRouter = require("./routes/items.route");

const app = express();
const PORT = process.env.PORT || 3333;
const corsOption = { credential: true, origin: process.env.CORS || "*" };


app.use(cors(corsOption));
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: false }));

app.use("/uploads", express.static(path.join(__dirname, "public", "uploads")))
app.use("/user", userRouter);
app.use("/reviews", reviewRouter);
app.use("/transactions", transactionRouter);
app.use("/items", itemRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
