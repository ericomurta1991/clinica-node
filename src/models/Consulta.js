import mongoose, { mongo } from "mongoose";

const consultaSchema = new mongoose.Schema(
    {
        id: {type: String},
        plano: {type: mongoose.Schema.Types.ObjectId, ref: "planoDeSaude"},
        medico: {type: mongoose.Schema.Types.ObjectId, ref: "medicos"},
        paciente: {type: mongoose.Schema.Types.ObjectId, ref: "pacientes"},
        horario: {type: Date, required : true}
    }
)

const consultas = mongoose.model("consultas", consultaSchema);