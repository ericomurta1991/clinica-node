import ErroBase from "./ErroBase.js";

class NaoEncontrado extends ErroBase{
    constructor(mensagem = "Pagina Nao Encontrada"){
        super(mensagem, 404);
    }
}

export default NaoEncontrado;