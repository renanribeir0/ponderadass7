import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";
import { TabelaGenerica } from "./interfaces/tabelaGenerica.interface";
import { CriaIniciativaDto } from "src/iniciativas/dto/criarIniciativa.dto";
import { CriaTabelaGenericaDto } from "./dto/criarTabelaGenerica.dto";


//No Repository, estamos fazendo todas as manipulações no banco de dados, seja create, read, update e delete
//A pedido do Artefato estamos usando SQL bruto para isso e por isso os comandos $queryRaw e $executeRaw
//A Tabela referenciada deve sempre estar entre aspas duplas
@Injectable()
export class TabelaGenericaRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async findAll(): Promise<TabelaGenerica[]> {
        return this.prisma.$queryRaw`SELECT * FROM "TabelaGenerica"`
    }

    async findById(id: number): Promise<TabelaGenerica> {
        return this.prisma.$queryRaw`SELECT * FROM "TabelaGenerica" WHERE "id" = ${id}`
    } 


    // Aqui devemos colocar todos os atributos necessários para a edição após "SET" usando <nomedoatributo> = ${data.nomedoatributo}
    async update(id: number, data: CriaTabelaGenericaDto): Promise<void> {
        await this.prisma.$executeRaw`UPDATE "TabelaGenerica" SET "atributo1" = ${data.atributo1}, "atributo2" = ${data.atributo2}, "atributo3" = ${data.atributo3} WHERE id = ${id}`;
    }

    async create(tabelaGenerica: CriaTabelaGenericaDto): Promise<TabelaGenerica> {
        const { atributo1, atributo2, atributo3 } = tabelaGenerica;
        const result = await this.prisma.$executeRaw`INSERT INTO "TabelaGenerica" ("atributo1", "atributo2", "atributo3") VALUES (${atributo1}, ${atributo2}, ${atributo3}) RETURNING *`;
        return result[0];
    }

    async delete(id: number): Promise<void> {
        await this.prisma.$executeRaw`DELETE FROM "TabelaGenerica" WHERE id = ${id}`
    }

}