if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const cors = require('cors')
const express = require("express");
const errorHandler = require("./middlewares/errorhandler");
const app = express();
const port = process.env.PORT || 3000;


app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routers/"));
app.use(errorHandler)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
