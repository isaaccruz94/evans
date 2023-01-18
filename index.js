const express   = require ("express");
const app       = express();

const nameHost  = "localhost";
const port      = 8080;

const router    = require("./routes/userRoutes");

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/",router);

app.listen(port,() => {
    console.log(`Servidor encendido http://${nameHost}:${port}`);
});