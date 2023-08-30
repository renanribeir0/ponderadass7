import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Iniciativa } from './interfaces/iniciativa.interface';
import { CriaIniciativaDto } from './dto/criarIniciativa.dto';


@Injectable()
export class IniciativaRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async findAll(): Promise<Iniciativa[]> {
      return this.prisma.$queryRaw`SELECT * FROM "Iniciativa"`;
    }

    async findIniciativaById(id: number): Promise<Iniciativa> {
      return this.prisma.$queryRaw`SELECT * FROM "Iniciativa" WHERE "id" = ${id}`;
    }

    async findIniciativasByParceiro(parceiroId: number): Promise<Iniciativa[]> {
      return this.prisma.$queryRaw`SELECT * FROM "Iniciativa" WHERE parceiroId = ${parceiroId}`
    }

    async findIniciativasByModuloAndStatus(moduloId: number): Promise<Iniciativa[]> {
      return this.prisma.$queryRaw`SELECT * FROM "Iniciativa" WHERE moduloId = ${moduloId} AND status = 'Preparado'`
    }

    async update(id: number, data: CriaIniciativaDto): Promise<void> {
      // const fieldsToUpdate = Object.entries(data).map(([key, value]) => `${key} = '${value}'`).join(", ");
      // const entries = Object.entries(data);
      // console.log("entries")
      // console.log(entries)
      // const setString = entries.map(([key, value]) => {
      //   if (typeof value === 'string') {
      //     return `${key} = '${value}'`
      //   }
      //   else {
      //     return `${key} = ${value}`
      //   }
      // }).join(", ");
      ;
      console.log(`UPDATE "Iniciativa" SET moduloId = ${data.moduloId}, parceiroId = ${data.parceiroId}, problema = ${data.problema}, escopo = ${data.escopo}, mvp = ${data.mvp}, tema = ${data.tema}, turmaId = ${data.turmaId} WHERE id = ${id}`)
      await this.prisma.$executeRaw`UPDATE "Iniciativa" SET "moduloId" = ${data.moduloId}, "parceiroId" = ${data.parceiroId}, "problema" = ${data.problema}, "escopo" = ${data.escopo}, "mvp" = ${data.mvp}, "tema" = ${data.tema}, "turmaId" = ${data.turmaId} WHERE id = ${id}`;
      // await this.prisma.$executeRaw`UPDATE "Iniciativa" SET ${fieldsToUpdate} WHERE "id" = ${id} RETURNING *`;
      // await this.prisma.iniciativa.update({
      //   where: { id: id },
      //   data: data
      // });
      // return this.prisma.iniciativa.findUnique({ where: {id: id}});
    }

    


    async create(iniciativa: CriaIniciativaDto): Promise<Iniciativa> {
      const { moduloId, parceiroId, problema, escopo, mvp, tema, turmaId } = iniciativa;
      const result = await this.prisma.$executeRaw`INSERT INTO "Iniciativa" ("moduloId", "parceiroId", "problema", "escopo", "mvp", "tema", "turmaId") VALUES (${moduloId}, ${parceiroId}, ${problema}, ${escopo}, ${mvp}, ${tema}, ${turmaId}) RETURNING *`;
      return result[0];

    } 

    async delete(id: number): Promise<void> {
      await this.prisma.$executeRaw`DELETE FROM "Iniciativa" WHERE id = ${id}`
    }
}