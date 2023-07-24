import planoDeSaude from "../models/PlanoDeSaude";

class PlanoDeSaudeController{
    
    static listarPlanosDeSaude = async(req, res) => {
        try {
            const planosDeSaudeResultado = await planoDeSaude.find()
            res.status(200).json(planosDeSaudeResultado);
        }catch(err){
            res.status(500).json(err);
        }      
    }

    static listarPlanoDeSaudePorId = async(req, res) => {
        try{
        const {id} = req.params;
        const planodeDeSaudePorId = await planoDeSaude.findById(id);
        res.status(200).send(planodeDeSaudePorId)
        }catch(err){
        res.status(400).send({message: `${err.message} - erro ao buscar o plano de saude por id`})
        }
    }

    static cadastrarPlanoDeSaude = async(req, res) => {
        try{
            let planoDeSaude = new planoDeSaude(req.body);
            await planoDeSaude.save()
            res.status(201).send(planoDeSaude.toJSON())
        } catch (err) {
            res.status(501).send({message: `${err.message} - erro ao cadastrar o plano de saude`})
        }
    }

    static atualizarPlanoDeSaude = async(req, res) => {
        try{
            const {id} = req.params
            const novoPlanoDeSaude = await planoDeSaude.findByIdAndUpdate(id, req.body, {
                new: true
            });
            res.status(200).json(novoPlanoDeSaude)
        } catch (err){
            res.status(500).json({err: err.message});
        }
    };

    static excluirPlanoDeSaude = async (req, res) => {
        try{
            const {id} = req.params
            await planoDeSaude.findByIdAndDelete(id);
            res.status(200).send({message: "Livro excluido com sucesso"});
        } catch(err){
            res.status(500).send({message: err.message});
        }
    }

}

export default PlanoDeSaudeController;