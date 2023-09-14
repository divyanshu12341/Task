const express = require("express");
const app = express();
const PORT = process.env.port || 5000;
app.use(express.json());
const router = require("./routes/index.js");
app.use("/", router);
app.get("/", (req, res) => {
  console.log(`App is working completely fine`);
  res.send({
    message: "API is working fine",
  });
});
app.listen(PORT, () => {
  console.log(`APP is working at port ${PORT}`);
});
