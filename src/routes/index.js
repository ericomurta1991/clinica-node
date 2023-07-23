import express from "express";
import consultas from "./pacientesRoutes"
import medicos from "./medicosRoutes";
import paciente from "./pacientesRoutes";

const routes = (app) => {
    app.route("/").get((req,res) => {
        res.status(200).send(({titulo: "API-CLINICA"}));
    });

    app.use(
        express.json(),
        consultas,
        medicos,
        pacientes
    );
};

export default routes;