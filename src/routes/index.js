import express from "express";
import pacientes from "../routes/pacientesRoutes.js";
import medicos from "../routes/medicosRoutes.js"
import planodesaude from "../routes/planoDeSaudeRoutes.js"
import consultas from "../routes/consultaRoutes.js"

const routes = (app) => {
    app.route("/").get((req,res) => {
        res.status(200).send(({titulo: "API-CLINICA"}));
    });

    app.use(
        express.json(),
        pacientes,
        medicos,
        planodesaude,
        consultas
    );
};

export default routes;