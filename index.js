require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

//connexion à la bdd
//mongoose.connect("mongodb://localhost/vinted-orion22");
mongoose.connect(process.env.MONGO_CONNECT);

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

//import des routes users et offers
const usersRoutes = require("./routes/users");
app.use(usersRoutes);
const offersRoutes = require("./routes/offers");
app.use(offersRoutes);


app.get("/",(req,res)=>{
  res.json("client connected")
})
app.all("*", (req, res) => {
  res.status(400).json("Route introuvable");
});



app.listen(process.env.PORT, () => {
  console.log("Server has started ! 🤙");
});
