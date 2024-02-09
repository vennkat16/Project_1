const Express = require("express");
const App = Express();

App.get("/", (req, res) => {
  res.json({ success: "ture", user: { name: "vennkat", age: 21 } });
});

App.listen(4000, () => {
  console.log("Server started");
});
