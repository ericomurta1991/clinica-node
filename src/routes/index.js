import express from "express";

const routes = (app) => {
    app.route("/").get((req,res) => {
        res.status(200).send(({titulo: "API-CLINICA"}));
    });

    app.use(
        express.json(),
        pacientes,
        medicos,
        planodesaude,
    );
};

export default routes;