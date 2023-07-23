import express from "express";
import PacienteController from "../controllers/pacienteController.js"


const router = express.Router();

router
    .get("/pacientes", PacienteController.listarPacientes)
    .get("/pacientes/:id", PacienteController.listarPacientePorId)
    .post("/pacientes", PacienteController.cadastrarPacientes)
    .put("/pacientes/:id", PacienteController.atualizarPaciente)
    .delete("/pacientes/:id", PacienteController.excluirPaciente)



export default router;