import pacientes from "../models/Paciente.js";

class PacienteController {
    
    static listarPacientes = async(req, res) => {
        try{
            const pacientesResultado = await pacientes.find()
            .populate("planoDeSaude", "nome");
            res.status(200).json(pacientesResultado);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    static listarPacientePorId = async(req, res) => {
        try{
            const {id} = req.params;
            const pacientePorId = await pacientes.findById(id, req.body)
            .populate("planoDeSaude", "nome");
            res.status(200).send(pacientePorId)
        } catch (err){
            res.status(400).send({message: `${err.message} - erro ao buscar id do paciente`})
    }
    }
    static cadastrarPaciente = async (req, res) => {
        try{
            let paciente = new pacientes(req.body);
            await paciente.save();
            res.status(201).send(paciente.toJSON());
        } catch(err){
            res.status(501).send({message: `${err.message} - erro ao cadastrar paciente`})
        }
    }
    static atualizarPaciente = async (req, res) => {
        try {
            const {id} = req.params;
            const novoPaciente = await pacientes.findByIdAndUpdate(id, req.body,{
                new: true
            });
            res.status(200).json(novoPaciente);
        } catch(err){
            res.status(500).json({err: err.message});
        }
    }
    static excluirPaciente = async(req, res) => {
        try {
            const {id} = req.params;
            await pacientes.findByIdAndDelete(id);
            res.status(200).send({message: "Paciente removido com sucesso"});
        } catch (err) {
            res.status(500).send({message: err.message});
        }
    }

}

export default PacienteController;