import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexao"));
db.once("open", () => {
    console.log("conexao com o banco feito com sucesso");
});



const app = express();

app.use(express.json());

routes(app);

export default app;