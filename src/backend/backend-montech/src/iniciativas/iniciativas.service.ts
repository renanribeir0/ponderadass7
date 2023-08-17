import { Injectable } from '@nestjs/common';
import { Iniciativa } from 'src/iniciativas/interfaces/iniciativa.interface';

@Injectable()
export class IniciativasService {
    private readonly iniciativas: Iniciativa[] = []
    findById() {
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

    create(iniciativa: Iniciativa) {
        this.iniciativas.push(iniciativa)
    }
}