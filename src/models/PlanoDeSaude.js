import mongoose from "mongoose";

const planoDeSaudeSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        participacao: {type: Number, required: true }
    },
    {
        versionKey: false
    }
)

const planoDeSaude = mongoose.model("planodesaude", planoDeSaudeSchema);

export default planoDeSaude;