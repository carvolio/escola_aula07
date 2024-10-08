const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()


const professores = require('./datas/professores.json');
const turmas = require('./datas/turmas.json');
const atividades = require('./datas/atividades.json');

async function main() {
    for (const professor of professores) {
        console.log(prisma.professor);
        await prisma.professor.create({
            data: professor
        });
    }
    for (const turma of turmas) {
        await prisma.turma.create({
            data: turma
        });
    }
    for (const atividade of atividades) {
        await prisma.atividade.create({
            data: atividade
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
        console.log('Seed complete');
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    });