import ErroBase from "./ErroBase";

class RequisicaoIncorreta extends ErroBase{
    constructor(mensagem= "um ou mais dados fornecidos estao incorretos"){
    super(mensagem, 400);
    }
}

export default RequisicaoIncorreta;