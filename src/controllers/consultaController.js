import consultas from "../models/Consulta.js"

class ConsultaController{

    static listarConsultas = async(req, res) => {
        try{
            const consultasResultado = await consultas.find()
            .populate("plano")
            .populate("medico")
            .populate("paciente")
            res.status(200).json(consultasResultado)
        }catch(err) {
            res.status(500).json({message: "Erro interno no servidor"})
        }
    };

    static listarConsultasPorId = async(req, res) => {
        try{
            const {id} = req.params;
            const consultaPorid = await consultas.findById(id, req.body)
            .populate("plano")
            .populate("medico")
            .populate("paciente")
            res.status(200).send(consultaPorid);
        } catch (err){
            res.status(400).send({message: `${err.message} - erro ao encontrar o id da consulta`})
        }
    };

    static cadastrarConsultas = async(req, res) => {
        try{
            let consulta = new consultas(req.body)
            await consulta.save();
            res.status(201).send(consulta.toJSON());
        } catch (err) {
            res.status(501).send({message: `${err.message} - erro ao cadastrar a consulta`})
        }
    }

    static atualizarConsulta = async(req, res) => {
        try{
        const {id} = req.params;
        const novaConsulta = await consultas.findByIdAndUpdate(id, req.body,{
            new: true
        })
        res.status(500).json(novaConsulta)
        } catch (err) {
        res.status(500).json({err: err.message});
        }
    }

    static excluirConsulta = async(req, res) => {
        try{
            let {id} = req.params;
            await consultas.findByIdAndDelete(id);
            res.status(200).send({message: err.message});
        }catch (err){
            res.status(500).send({message: err.message});
        }
    }
}

export default ConsultaController;