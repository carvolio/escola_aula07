const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();

const read = async (req, res) => {
    const atividades = await prisma.atividade.findMany({
        where: {
            id_turma: parseInt(req.params.turma)
        }
    });
    return res.json(atividades);
}

const create = async (req, res) => {
    const { nome, descricao, id_turma } = req.body;
    const atividade = await prisma.atividade.create({
        data: {
            nome,
            descricao,
            id_turma
        }
    });
    return res.status(201).json(atividade);
}

module.exports = {
    read,
    create
}