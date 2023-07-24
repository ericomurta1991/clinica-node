import mongoose from "mongoose";

const consultaSchema = new mongoose.Schema(
    {
        id: {type: String},
        plano: {type: mongoose.Schema.Types.ObjectId, ref: "planodesaude", required: true},
        medico: {type: mongoose.Schema.Types.ObjectId, ref: "medicos", required: true},
        paciente: {type: mongoose.Schema.Types.ObjectId, ref: "pacientes", required: true},
        horario: {type: String, required : true}
    }
)

const consultas = mongoose.model("consultas", consultaSchema);
export default consultas;