import { Injectable } from '@nestjs/common';
import { PrismaClient, UsuarioEP } from '@prisma/client';
// import { UsuarioEP } from './interfaces/iniciativa.interface';
import { CriaUsuarioEPDto } from './dto/criarUsuarioEP.dto';


@Injectable()
export class UsuarioEPRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async findAll(): Promise<UsuarioEP[]> {
      return this.prisma.$queryRaw`SELECT * FROM "UsuarioEP"`;
    }

    async findUsuarioEPById(id: number): Promise<UsuarioEP> {
      return this.prisma.$queryRaw`SELECT * FROM "UsuarioEP" WHERE "id" = ${id}`;
    }

    async update(id: number, data: CriaUsuarioEPDto): Promise<void> {
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
      console.log(`UPDATE "UsuarioEP" SET email = ${data.email}, senha = ${data.senha}, hierarquia = ${data.hierarquia}, nome = ${data.nome} WHERE id = ${id}`)
      await this.prisma.$executeRaw`UPDATE "UsuarioEP" SET email = ${data.email}, senha = ${data.senha}, hierarquia = ${data.hierarquia}, nome = ${data.nome} WHERE id = ${id}`;
      // await this.prisma.$executeRaw`UPDATE "UsuarioEP" SET ${fieldsToUpdate} WHERE "id" = ${id} RETURNING *`;
      // await this.prisma.iniciativa.update({
      //   where: { id: id },
      //   data: data
      // });
      // return this.prisma.iniciativa.findUnique({ where: {id: id}});
    }

    


    async create(iniciativa: CriaUsuarioEPDto): Promise<UsuarioEP> {
      const { email, senha, hierarquia, nome, } = iniciativa;
      const result = await this.prisma.$executeRaw`INSERT INTO "UsuarioEP" ("email", "senha", "hierarquia", "nome") VALUES (${email}, ${senha}, ${hierarquia}, ${nome}) RETURNING *`;
      return result[0];

    } 

    async delete(id: number): Promise<void> {
      await this.prisma.$executeRaw`DELETE FROM "UsuarioEP" WHERE id = ${id}`
    }
}