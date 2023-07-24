import mongoose from "mongoose";

const planoDeSaudeSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String},
        partipacaoPlano: {type: Number}
    }
)

const planoDeSaude = mongoose.model("planodesaude", planoDeSaudeSchema);

export default planoDeSaude;