const https = require("https");
const express = require("express");
const fs = require("fs");

const app = express();

//app.use(express.static("static"));

const options = {
	cert: fs.readFileSync("./sslcert/fullchain.pem"),
	key: fs.readFileSync("./sslcert/privkey.pem")
};

app.get("/", (req, res) => {
  res.send("yo it's yer boi IgMoney WADDDUUUPP!?!")
})
app.listen(80, () => console.log("Server running on port 80"));

https.createServer(options, app).listen(8483);
