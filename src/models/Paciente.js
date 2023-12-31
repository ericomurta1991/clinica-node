import mongoose from "mongoose";

const pacienteSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        sobrenome: {type: String, required: true},
        nacionalidade: {type: String, required: true}
    },
    {
        versionKey: false
    }
)

const pacientes = mongoose.model("pacientes", pacienteSchema);

export default  pacientes