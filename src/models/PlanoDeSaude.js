import mongoose from "mongoose";

const planoDeSaudeSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String},
        partipacaoPlano: {type: Number}
    }
)

const planoDeSaude = mongoose.model("planoDeSaude", planoDeSaudeSchema);

export default planoDeSaude;