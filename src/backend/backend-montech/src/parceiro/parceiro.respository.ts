import { Injectable } from '@nestjs/common';
import { PrismaClient, Parceiro} from '@prisma/client';
import { CriaParceiroDto } from 'src/parceiro/dto/criarParceiroDto';


@Injectable()
export class ParceiroRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async findAll(): Promise<Parceiro[]> {
        return this.prisma.$queryRaw`SELECT * FROM "Parceiros"`;
    }
    //Atualização conforme o banco de dados (verificar a tabela)
    async findParceiroById(id: number): Promise<Parceiro> {
        return this.prisma.$queryRaw`SELECT * FROM "Parceiro" WHERE "id" = ${id}`;
    }

    //Função para encontrar o parceiro pela empresa
    // async findParceiroCNPJ name(params:type) {
    // }

    // async findIniciativasByModuloAndStatus(moduloId: number): Promise<Iniciativa[]> {
    //   return this.prisma.$queryRaw`SELECT * FROM "Iniciativa" WHERE moduloId = ${moduloId} AND status = 'Preparado'`
    // }

    async update(id: number, data: CriaParceiroDto): Promise<void> {
        await this.prisma.$executeRaw`UPDATE "Parceiro" SET "nomeEmpresa" = ${data.nomeEmpresa}, "mercado" = ${data.mercado}, "nomeContato" = ${data.nomeContato}, "email" = ${data.email}, "telefone" = ${data.telefone}, "nota" = ${data.nota} WHERE id = ${id}`;
        //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    }

    async create(parceiro: CriaParceiroDto): Promise<Parceiro> {
        const {nomeEmpresa, mercado, nomeContato, email, telefone, nota } = parceiro; //erro por cauda do Dto
        const result = await this.prisma.$executeRaw`INSERT INTRO "Parceiro" ("nomeEmpresa", "mercado", "nomeContato", "email", "telefone", "nota") VALUES (${nomeEmpresa}, ${mercado}, ${nomeContato}, ${email}, ${telefone}, ${nota} ) RETURNING *`;
        return result[0];
    }

    async delete(id: number): Promise<void> {
        await this.prisma.$executeRaw`DELETE FROM "Parceiros" WHERE id = ${id}`
    }

}