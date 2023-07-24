import medicos from "../models/Medico.js";


class MedicoController{
    
    static listarMedicos = async(req, res)=> {
        try{
            const medicosResultado = await medicos.find();
            res.status(200).json(medicosResultado);
        } catch (err) {
            res.status(500).json({message: "Erro interno de servidor "});
        }
    }
    static listarMedicoPorId = async(req, res) => {
        try{
            const {id} = req.params;
            const medicoPorId = await medicos.findById(id, req.body);
            res.status(200).send(medicoPorId); 
        }catch(err){
            res.status(400).send({message: `${err.message} - erro ao buscar o id do medico`})
        }
    }
    static cadastrarMedico = async(req, res) => {
        try{
            let medico = new medicos(req.body);
            await medico.save();
            res.status(200).send(medico.toJSON())
        }catch(err){
            res.status(501).send({message: `${err.message} - erro ao cadastrar medico`})
        }
    }
    static atualizarMedico = async(req, res)=> {
        try{
            const {id} = req.params;
            const novoMedico = await medicos.findByIdAndUpdate(id, req.body,{
                new: true
            });
            res.status(200).json(novoMedico);
        }catch(err){
            res.status(500).json({err: err.message});
        }
    }
    static excluirMedico = async(req, res) => {
        try{
            const {id} = req.params;
            await medicos.findByIdAndDelete(id);
            res.status(200).send({message: "Medico removido com sucesso"});
        }catch(err){
            res.status(500).send({message: err.message})
        }
    }
}
    
export default MedicoController;