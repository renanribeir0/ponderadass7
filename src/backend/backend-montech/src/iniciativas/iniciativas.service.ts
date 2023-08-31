import { Injectable } from '@nestjs/common';
import { IniciativaRepository } from './iniciativas.repository'
// import { Iniciativa } from 'src/iniciativas/interfaces/iniciativa.interface';
import { Prisma, PrismaClient, Iniciativa } from '@prisma/client';
import { CriaIniciativaDto } from './dto/criarIniciativa.dto';


@Injectable()
export class IniciativasService {

    constructor(private iniciativaRepository: IniciativaRepository) {}

    // private readonly iniciativas: Iniciativa[] = []

    
    retornaMockado() {
        const iniciativaMockada = [{
            id: 0,
            modulo: '05',
            curso: 'Engenharia de Software',
            parceiro: "Instituto de Tecnologia e Liderança",
            escopo: "Desenvolver uma plataforma web que centralize e otimize o gerenciamento e acompanhamento de parcerias de projetos entre empresas e o INTELI.",
            mvp: ["Cadastro de módulos / contexto do Metaprojeto e o cronograma de operação", "Formulário de entrada de propostas de projetos", "Dash de análise de Iniciativas / atribuição de ratings", "Dash de alocação de Projetos em  Módulos/Turmas"],
            tema: "Gestão Operacional",
            turma: "T06",
            status: 0
        },

        {
            id: 1,
            modulo: '03',
            curso: 'Primeiro Ano',
            parceiro: "Faculdade de Medicina - USP",
            escopo: "Desenvolvimento de modelo preditivo que, a partir de dados clínico-laboratoriais, apoie a previsão da variabilidade do câncer de mama",
            mvp: ["Cadastro de módulos / contexto do Metaprojeto e o cronograma de operação", "Formulário de entrada de propostas de projetos", "Dash de análise de Iniciativas / atribuição de ratings", "Dash de alocação de Projetos em  Módulos/Turmas"],
            tema: "Modelo Preditivo",
            turma: "T05"
        },
        {
            id: 2,
            modulo: '05',
            curso: 'Sistemas de Informação',
            parceiro: "Coover",
            escopo: "Implementar um MVP de um protocolo em blockchain ethereum e uma aplicação web3 que permita a operação e validação em produção dos processos básicos de um arranjo simples de seguro peer-to-peer, ou grupo de seguro mútuo de modo que cada grupo mútuo criado seja uma DAO no Ethereum, mantendo no próprio smart contract as reservas financeiras (“tesouro”) através de alguma moeda digital com valor estável que implemente o padrão ERC-20.",
            mvp: ["Cadastro de módulos / contexto do Metaprojeto e o cronograma de operação", "Formulário de entrada de propostas de projetos", "Dash de análise de Iniciativas / atribuição de ratings", "Dash de alocação de Projetos em  Módulos/Turmas"],
            tema: "Blockchain",
            turma: "T02"
        },
        {
            id: 3,
            modulo: '06',
            curso: 'Engenharia de Computação',
            parceiro: "Instituto de Pequisas Tecnologicas",
            escopo: "Implementar um MVP de um protocolo em blockchain ethereum e uma aplicação web3 que permita a operação e validação em produção dos processos básicos de um arranjo simples de seguro peer-to-peer, ou grupo de seguro mútuo de modo que cada grupo mútuo criado seja uma DAO no Ethereum, mantendo no próprio smart contract as reservas financeiras (“tesouro”) através de alguma moeda digital com valor estável que implemente o padrão ERC-20.",
            mvp: ["Cadastro de módulos / contexto do Metaprojeto e o cronograma de operação", "Formulário de entrada de propostas de projetos", "Dash de análise de Iniciativas / atribuição de ratings", "Dash de alocação de Projetos em  Módulos/Turmas"],
            tema: "Blockchain",
            turma: "T01"
        },
        {
            id: 4,
            modulo: '08',
            curso: 'Engenharia de Computação',
            parceiro: "BTG",
            escopo: "Implementar um MVP de um protocolo em blockchain ethereum e uma aplicação web3 que permita a operação e validação em produção dos processos básicos de um arranjo simples de seguro peer-to-peer, ou grupo de seguro mútuo de modo que cada grupo mútuo criado seja uma DAO no Ethereum, mantendo no próprio smart contract as reservas financeiras (“tesouro”) através de alguma moeda digital com valor estável que implemente o padrão ERC-20.",
            mvp: ["Cadastro de módulos / contexto do Metaprojeto e o cronograma de operação", "Formulário de entrada de propostas de projetos", "Dash de análise de Iniciativas / atribuição de ratings", "Dash de alocação de Projetos em  Módulos/Turmas"],
            tema: "Games",
            turma: "T03"

        }

        ]
        return iniciativaMockada;
    }

    async findById(id: number): Promise<Iniciativa> {
        return this.iniciativaRepository.findIniciativaById(id);
    }

    async findAll(): Promise<Iniciativa[]> {
        return this.iniciativaRepository.findAll();
        // return this.prisma
    }

    async create(iniciativa: CriaIniciativaDto): Promise<Iniciativa> {
        return this.iniciativaRepository.create(iniciativa)
    }
    // create(iniciativa: Iniciativa): Promise<Iniciativa> {
    // create(iniciativa: any) {
    //     return this.prisma.iniciativa.create({
    //         data: iniciativa as any,
    //         include: {
    //             modulo: true,
    //             parceiro: true,
    //             turma: true
    //         }
    //     })
    // }

    async update(id: number, data: CriaIniciativaDto): Promise<void> {
        await this.iniciativaRepository.update(id, data)
    }

    async delete(id: number): Promise<void> {
        await this.iniciativaRepository.delete(id)
    }
}