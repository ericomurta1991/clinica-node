import planoDeSaude from "../models/PlanoDeSaude.js";
import NaoEncontrado from "../errors/NaoEncontrado.js"

class PlanoDeSaudeController{
    
    static listarPlanosDeSaude = async(req, res, next) => {
        try {
            const planosDeSaudeResultado = await planoDeSaude.find()
            res.status(200).json(planosDeSaudeResultado);
        }catch(err){
            res.status(500).json(err);
        }      
    }

    static listarPlanoDeSaudePorId = async(req, res, next) => {
        try{
        const {id} = req.params;
        const planodeDeSaudePorId = await planoDeSaude.findById(id);
        if(planodeDeSaudePorId !== null){
            res.status(200).send(planodeDeSaudePorId)
        }else{
            next(new NaoEncontrado("Id do plano de Saude Nao encontrado"))
        }
        }catch(err){
            next(err);
        }
    }

    static cadastrarPlanoDeSaude = async(req, res, next) => {
        try{
            let plano = new planoDeSaude(req.body);
            await plano.save()
            res.status(201).send(plano.toJSON())
        } catch (err) {
            next(err);
        }
    }

    static atualizarPlanoDeSaude = async(req, res, next) => {
        try{
            const {id} = req.params
            const novoPlanoDeSaude = await planoDeSaude.findByIdAndUpdate(id, req.body, {
                new: true
            });
            if(novoPlanoDeSaude !== null){
                res.status(200).json(novoPlanoDeSaude)
            }else{
                next(NaoEncontrado("Id do Plano De Saude nao localizado."))
            }  
        } catch (err){
            next(err)
        }
    };

    static excluirPlanoDeSaude = async (req, res, next) => {
        try{
            const {id} = req.params
            await planoDeSaude.findByIdAndDelete(id);
            if(id !== null){
                res.status(200).send({message: "Livro excluido com sucesso"});
            }else{
                next(new NaoEncontrado("Id do plano de saude nao localizado."))
            }
        } catch(err){
            next(err);
        }
    }

}

export default PlanoDeSaudeController;