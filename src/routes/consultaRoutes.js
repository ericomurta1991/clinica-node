import express from "express";
import ConsultaController from "../controllers/consultaController.js"

const router = express.Router();

router
    .get("/consultas", ConsultaController.listarConsultas)
    .get("/consultas/:id", ConsultaController.listarConsultasPorId)
    .post("/consultas", ConsultaController.cadastrarConsultas)
    .put("/consultas/:id", ConsultaController.atualizarConsulta)
    .delete("/consultas/:id", ConsultaController.excluirConsulta)


    export default router;