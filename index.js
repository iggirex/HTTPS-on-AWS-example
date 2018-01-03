const express = require('express')
const app = express()

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.send("yo it's yer boi IgMoney WADDDUUUPP!?!")
})
app.listen(3000, () => console.log("Server running on port 3000"))
