import express from "express";
import PlanoDeSaudeController from "../controllers/planoDeSaudeController.js"

const router = express.Router();

router
    .get("/planodesaude", PlanoDeSaudeController.listarPlanosDeSaude)
    .get("/planodesaude/:id", PlanoDeSaudeController.listarPlanoDeSaudePorId)
    .post("/planodesaude", PlanoDeSaudeController.cadastrarPlanoDeSaude)
    .put("/planodesaude/:id", PlanoDeSaudeController.atualizarPlanoDeSaude)
    .delete("/planodesaude/:id", PlanoDeSaudeController.excluirPlanoDeSaude)

    export default router;
