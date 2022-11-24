const express = require("express");
const api = require("./routes/api");
const index = require("./routes/index");
const app = express()
const PORT = 8080;

// Middleware and route paths
app.use(express.static('public'));
app.use(express.json());
app.use("/api", api);
app.use("/", index);



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

