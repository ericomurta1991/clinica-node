import {pacientes} from "../models/index.js";
import NaoEncontrado from "../errors/NaoEncontrado.js";


class PacienteController {
    
    static listarPacientes = async(req, res) => {
        try{
            const pacientesResultado = await pacientes.find()
            .populate("nome");
            res.status(200).json(pacientesResultado);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    static listarPacientePorId = async(req, res, next) => {
        try{
            const {id} = req.params;
            const pacientePorId = await pacientes.findById(id, req.body)
            if(pacientePorId !== null){
                res.status(200).send(pacientePorId)
            }else{
                next(new NaoEncontrado("Id do Paciente nao localizado."))
            }
        } catch (err){
            next(err);
    }
    }
    static cadastrarPaciente = async (req, res, next) => {
        try{
            let paciente = new pacientes(req.body);
            await paciente.save();
            res.status(201).send(paciente.toJSON());
        } catch(err){
            next(err);
        }
    }
    static atualizarPaciente = async (req, res) => {
        try {
            const {id} = req.params;
            const novoPaciente = await pacientes.findByIdAndUpdate(id, req.body,{
                new: true
            });
            if(novoPaciente !== null){
                res.status(200).json(novoPaciente);
            }else{
                next(new NaoEncontrado("Id do Paciente nao localizado"))
            }
        } catch(err){
            next(err);
        }
    }
    static excluirPaciente = async(req, res, next) => {
        try {
            const {id} = req.params;
            await pacientes.findByIdAndDelete(id);

            if(id !== null){
                res.status(200).send({message: "Paciente removido com sucesso"});
            }else{
                next(new NaoEncontrado("Id do paciente nao localizado"));
            }
        } catch (err) {
            next(err);
        }
    }

}

export default PacienteController;