const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("nista");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
