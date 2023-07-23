import mongoose from "mongoose";

const medicoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        sobrenome: {type: String, required: true},
        especialidade: {type:String, required: true},
        crm: {type: Number, required: true}
    }
)

const medicos = mongoose.model("medicos", medicoSchema);

export default medicos;