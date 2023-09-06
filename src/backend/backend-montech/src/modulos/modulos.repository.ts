import { Injectable } from '@nestjs/common';
import { PrismaClient, Modulo } from '@prisma/client';
// import { Modulo } from './interfaces/Modulo.interface';
import { CriaModuloDto } from './dto/criarModulo.dto';


@Injectable()
export class ModuloRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async findAll(): Promise<Modulo[]> {
      return this.prisma.$queryRaw`SELECT * FROM "Modulo"`;
    }

    async findModuloById(id: number): Promise<Modulo> {
      return this.prisma.$queryRaw`SELECT * FROM "Modulo" WHERE "id" = ${id}`;
    
    }

    async update(id: number, data: CriaModuloDto): Promise<void> {
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
      console.log(`UPDATE "Modulo" SET nomeModulo = ${data.nomeModulo}, descricao = ${data.descricao}, competencias = ${data.competencias} WHERE id = ${id}`)
      await this.prisma.$executeRaw`UPDATE "Modulo" SET "nomeModulo" = ${data.nomeModulo}, "descricao" = ${data.descricao}, "competencias" = ${data.competencias} WHERE id = ${id}`;
      // await this.prisma.$executeRaw`UPDATE "Modulo" SET ${fieldsToUpdate} WHERE "id" = ${id} RETURNING *`;
      // await this.prisma.Modulo.update({
      //   where: { id: id },
      //   data: data
      // });
      // return this.prisma.Modulo.findUnique({ where: {id: id}});
    }

    


    async create(modulo: CriaModuloDto): Promise<Modulo> {
      const { nomeModulo, descricao, competencias } = modulo;
      const result = await this.prisma.$executeRaw`INSERT INTO "Modulo" ("nomeModulo", "descricao", "competencias") VALUES (${nomeModulo}, ${descricao}, ${competencias}) RETURNING *`;
      return result[0];

    } 

    async delete(id: number): Promise<void> {
      await this.prisma.$executeRaw`DELETE FROM "Modulo" WHERE id = ${id}`
    }
}