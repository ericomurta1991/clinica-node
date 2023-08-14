import consultas from "../models/Consulta.js"
import NaoEncontrado from "../errors/NaoEncontrado.js"

class ConsultaController{

    static listarConsultas = async(req, res, next) => {
        try{
            const consultasResultado = await consultas.find()
            .populate("plano")
            .populate("medico")
            .populate("paciente")
            res.status(200).json(consultasResultado)
            next();
        }catch(err) {
            res.status(500).json({message: "Erro interno no servidor"})
        }
    };

    static listarConsultasPorId = async(req, res, next) => {
        try{
            const {id} = req.params;
            const consultaPorid = await consultas.findById(id, req.body)
            .populate("plano")
            .populate("medico")
            .populate("paciente")
            
            if(consultaPorid != null){
                res.status(200).send(consultaPorid);
            }else{
                next(new NaoEncontrado("id da consulta nao localizada."))
            }
        } catch (err){
            next(err);
        }
    };

    static cadastrarConsultas = async(req, res, next) => {
        try{
            let consulta = new consultas(req.body)
            await consulta.save();
            res.status(201).send(consulta.toJSON());
        } catch (err) {
            next(err)
        }
    }

    static atualizarConsulta = async(req, res, next) => {
        try{
        const {id} = req.params;
        const novaConsulta = await consultas.findByIdAndUpdate(id, req.body,{
            new: true
        });

        if(novaConsulta !== null){
            res.status(200).json(novaConsulta)
        }else{
            next(new NaoEncontrado("Id da Consulta nao localizado."))
        }
        } catch (err) {
        next(err);
        }
    }

    static excluirConsulta = async(req, res, next) => {
        try{
            let {id} = req.params;
            await consultas.findByIdAndDelete(id);

            if(id !== null){
                res.status(200).send("Consula Removida Com sucesso.")
            }else{
                next(new NaoEncontrado("Id do consulta nao localizado."))
            }
        }catch (err){
            next(err)
        }
    }
}

export default ConsultaController;