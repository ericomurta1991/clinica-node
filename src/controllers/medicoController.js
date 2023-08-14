import {medicos} from "../models/index.js";
import NaoEncontrado from "../errors/NaoEncontrado.js";


class MedicoController{
    
    static listarMedicos = async(req, res, next)=> {
        try{
            const medicosResultado = await medicos.find();
            res.status(200).json(medicosResultado);
        } catch (err) {
            res.status(500).json({message: "Erro interno de servidor "});
        }
    }
    static listarMedicoPorId = async(req, res, next) => {
        try{
            const {id} = req.params;
            const medicoPorId = await medicos.findById(id, req.body);
            if(medicoPorId !== null){
                res.status(200).send(medicoPorId); 
            }else{
                next( new NaoEncontrado("id do medico nao localizado"));
            }  
        }catch(err){
            next(err)
        }
    }
    static cadastrarMedico = async(req, res, next) => {
        try{
            let medico = new medicos(req.body);
            await medico.save();
            res.status(200).send(medico.toJSON())
        }catch(err){
            next(err);
        }
    }
    static atualizarMedico = async(req, res, next)=> {
        try{
            const {id} = req.params;
            const novoMedico = await medicos.findByIdAndUpdate(id, req.body,{
                new: true
            });

            if(novoMedico !== null){
                res.status(200).json(novoMedico);
            }else{
                next(new NaoEncontrado("Id do Medico nao localizado"))
            }
        }catch(err){
            next(err)
        }
    }
    static excluirMedico = async(req, res) => {
        try{
            const {id} = req.params;
            await medicos.findByIdAndDelete(id);

            if(id !== null){
                res.status(200).send({message: "Medico removido com sucesso"});
            }else{
                next(new NaoEncontrado("Id do medico nao encontrado."))
            } 
        }catch(err){
            next(err);        }
    }
}
    
export default MedicoController;