import express from "express";
import MedicoController from "../controllers/medicoController";

const router = express.Router();

router
    .get("/medicos", MedicoController.listarMedicos)
    .get("/medicos/:id", MedicoController.listarMedicoPorId)
    .post("/medicos", MedicoController.cadastrarMedico)
    .put("/medicos/:id", MedicoController.atualizarMedico)
    .delete("/delete/:id", MedicoController.excluirMedico)

export default router;    