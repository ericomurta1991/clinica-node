import mongoose, { mongo } from "mongoose";
import ErroBase from "../errors/ErroBase.js"
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js"
import ErroDeValidacao from "../errors/ErroValidacao.js"

function manipuladorDeErros(erro, req, res, next){
    if(erro instanceof mongoose.Error.CastError){
        new RequisicaoIncorreta().enviarResposta(res);
    }else if(erro instanceof mongoose.Error.ValidationError){
        new ErroDeValidacao().enviarResposta(res);
    }else if(erro instanceof ErroBase){
        erro.enviarResposta(res);
    }
}

export default manipuladorDeErros;