import express from "express";
import pacientes from "./pacientesRoutes.js";

const routes = (app) => {
    app.route("/").get((req,res) => {
        res.status(200).send(({titulo: "API-CLINICA"}));
    });

    app.use(
        express.json(),
        pacientes,
        medicos,
    );
};

export default routes;