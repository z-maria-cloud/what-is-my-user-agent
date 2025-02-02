// user agent printer
// this project is quite simple

import express from "express";
const app = express();
const port = process.env.PROJECT_PORT;

app.get("/", (req, res) => {
  let userAgent = req.headers["user-agent"];
  res.render("main.ejs", { data: userAgent });
});

app.listen(port, () => {
  if (process.env.NODE_ENV === "production") {
    console.log("SMILE! you're in production");
  }
  console.log(`REQUEST HEADERS PRINTER is listening on port ${port}`);
});
