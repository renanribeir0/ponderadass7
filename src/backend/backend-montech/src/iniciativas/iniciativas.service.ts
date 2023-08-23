import { Injectable } from '@nestjs/common';
// import { Iniciativa } from 'src/iniciativas/interfaces/iniciativa.interface';
import { Prisma, PrismaClient } from '@prisma/client';


@Injectable()
export class IniciativasService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient()
    }

    // private readonly iniciativas: Iniciativa[] = []
    private readonly iniciativas: any[] = []

    
    retornaMockado() {
        const iniciativaMockada = {
        id: 0,
        createdAt: 20000,
        updatedAt: null,
        modulo: 'Modulo 05 - Engenharia de Software',
        moduloId: 5,
        parceiro: "Instituto de Tecnologia e Liderança",
        parceiroId: 0,
        escopo: "Desenvolver uma plataforma web que centralize e otimize o gerenciamento e acompanhamento de parcerias de projetos entre empresas e o INTELI.",
        mvp: ["Cadastro de módulos / contexto do Metaprojeto e o cronograma de operação", "Formulário de entrada de propostas de projetos", "Dash de análise de Iniciativas / atribuição de ratings", "Dash de alocação de Projetos em  Módulos/Turmas"],
        tema: "Gestão Operacional",
        turma: "T06",
        turmaId: 6

        }
        return iniciativaMockada;
    }

    async findById(id: number): Promise<any> {
        // return this.prisma.iniciativa.findUnique({
        //     where: { id: id },
        //     include: {
        //         modulo: true,
        //         parceiro: true
        //     }
        // });
        return `Você acessou no BD a Iniciativa de id: ${id}`
    }

    findAll(): any[] {
        return this.iniciativas
    }

    // create(iniciativa: Iniciativa): Promise<Iniciativa> {
    create(iniciativa: any) {
        return this.prisma.iniciativa.create({
            data: iniciativa as any,
            include: {
                modulo: true,
                parceiro: true,
                turma: true
            }
        })
    }
}