const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();

const read = async (req, res) => {
    const turmas = await prisma.turma.findMany({
        where: {
            id_professor: parseInt(req.params.id)
        }
    });
    return res.json(turmas);
}

const create = async (req, res) => {
    const { nome, id_professor } = req.body;
    const turma = await prisma.turma.create({
        data: {
            nome,
            id_professor
        }
    });
    return res.status(201).json(turma);
}

const del = async (req, res) => {
    try {
        const turma = await prisma.turma.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.status(204).json(turma);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = {
    read,
    create,
    del
}