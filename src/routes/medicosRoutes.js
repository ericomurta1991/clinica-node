import express from "express";
import MedicoController from "../controllers/medicoController.js";

const router = express.Router();

router
    .get("/medicos", MedicoController.listarMedicos)
    .get("/medicos/:id", MedicoController.listarMedicoPorId)
    .post("/medicos", MedicoController.cadastrarMedico)
    .put("/medicos/:id", MedicoController.atualizarMedico)
    .delete("/medicos/:id", MedicoController.excluirMedico)

export default router;    