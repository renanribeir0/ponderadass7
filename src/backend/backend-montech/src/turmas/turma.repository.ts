import { Injectable } from "@nestjs/common";
import { PrismaClient, Turma } from "@prisma/client";
import { CriaTurmaDto } from "./dto/criarTurma.dto";

@Injectable()
export class TurmaRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }
    
    async findById(id: number): Promise<Turma>{
        return this.prisma.$queryRaw`SELECT * FROM "Turma" WHERE "id" = ${id}`;

    }

    async findAll(): Promise<Turma[]>{
        return this.prisma.$queryRaw`SELECT * FROM "Turma"`;
    }

    async create(turma: CriaTurmaDto): Promise<Turma> {
        const {iniciativas} = turma;
        const result = await this.prisma.$executeRaw`INSERT INTO ("iniciativas") VALUES (${iniciativas}) RETURNING *`
        return result[0];
    }

    async update(id: number, data: CriaTurmaDto): Promise<void>{
        await this.prisma.$executeRaw`UPDATE "Turma" SET "iniciativas" = ${data.iniciativas} WHERE id = ${id}`;
    }

    async delete (id: number): Promise<void>{
        await this.prisma.$executeRaw`DELETE FROM "Turma" WHERE id = ${id}`;
    }



    
}