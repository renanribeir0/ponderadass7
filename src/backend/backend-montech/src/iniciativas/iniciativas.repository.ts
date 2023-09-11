import { Injectable } from '@nestjs/common';
import { PrismaClient, Iniciativa } from '@prisma/client';
// import { Iniciativa } from './interfaces/iniciativa.interface';
import { CriaIniciativaDto } from './dto/criarIniciativa.dto';


@Injectable()
export class IniciativaRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async findAll(): Promise<Iniciativa[]> {
      console.log(`SELECT "Iniciativa".*, "Parceiro".*, "Modulo".*, "Turma".* FROM "Iniciativa" INNER JOIN "Parceiro" ON "Iniciativa"."parceiroId" = "Parceiro".id INNER JOIN "Modulo" ON "Iniciativa"."moduloId" = "Modulo".id LEFT JOIN "Turma" ON "Iniciativa"."turmaId" = "Turma".id`)
      // return this.prisma.$queryRaw`SELECT * FROM "Iniciativa"`;
      return this.prisma.$queryRaw`SELECT "Iniciativa".*,
       
      "Parceiro"."createdAt" AS "Parceiro_createdAt",
      "Parceiro"."nomeEmpresa" AS "nomeEmpresa", 
      "Parceiro"."mercado" AS "mercado", 
      "Parceiro"."senha" AS "Parceiro_senha", 
      "Parceiro"."cnpj" AS "cnpj", 
      "Parceiro"."nomeContato" AS "nomeContato", 
      "Parceiro"."cpf" AS "cpf", 
      "Parceiro"."email" AS "Parceiro_email", 
      "Parceiro"."telefone" AS "Parceiro_telefone", 
      "Parceiro"."nota" AS "Parceiro_nota", 
      
      "Modulo"."nomeModulo" AS "nomeModulo", 
      "Modulo"."descricao" AS "Modulo_descricao", 
      "Modulo"."competencias" AS "competencias", 


      "Turma"."nomeTurma" AS "nomeTurma"

      FROM "Iniciativa" INNER JOIN "Parceiro" ON "Iniciativa"."parceiroId" = "Parceiro".id INNER JOIN "Modulo" ON "Iniciativa"."moduloId" = "Modulo".id LEFT JOIN "Turma" ON "Iniciativa"."turmaId" = "Turma".id`;
    }

    async findIniciativaById(id: number): Promise<Iniciativa> {
      console.log(`SELECT * FROM "Iniciativa" WHERE "id" = ${id}`)
      return this.prisma.$queryRaw`SELECT * FROM "Iniciativa" WHERE "id" = ${id}`;
    }

    async findIniciativasByParceiro(parceiroId: number): Promise<Iniciativa[]> {
      console.log(`SELECT * FROM "Iniciativa" WHERE parceiroId = ${parceiroId}`)
      return this.prisma.$queryRaw`SELECT * FROM "Iniciativa" WHERE parceiroId = ${parceiroId}`
    }

    async findIniciativasByModuloAndStatus(moduloId: number): Promise<Iniciativa[]> {
      console.log(`SELECT * FROM "Iniciativa" WHERE moduloId = ${moduloId} AND status = 'Preparado'`)
      return this.prisma.$queryRaw`SELECT * FROM "Iniciativa" WHERE moduloId = ${moduloId} AND status = 'Preparado'`
    }

    async update(id: number, iniciativa: any): Promise<void> {
      console.log(`UPDATE "Iniciativa" SET "moduloId" = ${iniciativa.moduloId}, "parceiroId" = ${iniciativa.parceiroId}, "problema" = ${iniciativa.problema}, "escopo" = ${iniciativa.escopo}, "status" = ${iniciativa.status}, "mvp" = ${iniciativa.mvp}, "tema" = ${iniciativa.tema}, "turmaId" = ${iniciativa.turmaId} WHERE id = ${id}`)
      // console.log(`UPDATE "Iniciativa" SET moduloId = ${iniciativa.moduloId}, parceiroId = ${iniciativa.parceiroId}, problema = ${iniciativa.problema}, escopo = ${iniciativa.escopo}, mvp = ${iniciativa.mvp}, tema = ${iniciativa.tema}, turmaId = ${iniciativa.turmaId} WHERE id = ${id}`)
      await this.prisma.$executeRaw`UPDATE "Iniciativa" SET "moduloId" = ${iniciativa.moduloId}, "parceiroId" = ${iniciativa.parceiroId}, "problema" = ${iniciativa.problema}, "escopo" = ${iniciativa.escopo}, "status" = ${iniciativa.status}, "mvp" = ${iniciativa.mvp}, "tema" = ${iniciativa.tema}, "turmaId" = ${iniciativa.turmaId} WHERE id = ${id}`;
    }

    


    async create(iniciativa: CriaIniciativaDto): Promise<Iniciativa> {
      // console.log("objeto iniciativa para criar")
      // console.log(iniciativa)
      const { moduloId, parceiroId, problema, escopo, status, mvp, tema, turmaId } = iniciativa;
      console.log(`INSERT INTO "Iniciativa" ("moduloId", "parceiroId", "problema", "escopo", "status", "mvp", "tema", "turmaId") VALUES (${moduloId}, ${parceiroId}, ${problema}, ${escopo}, ${status}, ${mvp}, ${tema}, ${turmaId}) RETURNING *`)
      const result = await this.prisma.$executeRaw`INSERT INTO "Iniciativa" ("moduloId", "parceiroId", "problema", "escopo", "status", "mvp", "tema", "turmaId") VALUES (${moduloId}, ${parceiroId}, ${problema}, ${escopo}, ${status}, ${mvp}, ${tema}, ${turmaId}) RETURNING *`;
      return result[0];
    }

      // try {

      //   const modulo = await this.prisma.modulo.findUnique({ where: { id: iniciativa.moduloId } });
      //   if (!modulo) {
      //     throw new Error('moduloId não existe');
      //   }
      //   const newIniciativa = await this.prisma.iniciativa.create({
      //     data: {
      //       moduloId: iniciativa.moduloId,
      //       parceiroId: iniciativa.parceiroId,
      //       problema: iniciativa.problema,
      //       escopo: iniciativa.escopo,
      //       mvp: iniciativa.mvp,
      //       tema: iniciativa.tema,
      //       turmaId: iniciativa.turmaId,
      //     },
      //   });
      //   return newIniciativa;
      // } catch (error) {
      //   console.error('Erro ao criar iniciativa:', error);
      //   throw new Error('Erro ao criar iniciativa');
      // }

    // } 

    async delete(id: number): Promise<void> {
      console.log(`DELETE FROM "Iniciativa" WHERE id = ${id}`)
      await this.prisma.$executeRaw`DELETE FROM "Iniciativa" WHERE id = ${id}`
    }
}