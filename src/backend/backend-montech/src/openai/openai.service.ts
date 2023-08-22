import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import OpenAI from 'openai'
import { lastValueFrom } from 'rxjs';

require('dotenv').config();

// import  Configuration from "openai";
// import OpenAIApi from 'openai';
// const configuration = new Configuration({
//     // organization: "org-Ps0BrHiLWAEEvO98ALfBzuCR",
//     apiKey: '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',
// });
// const openai = new OpenAIApi(configuration);


// const { Configuration, OpenAIApi } = require("openai")

const openai = new OpenAI();

// const configuration = new Configuration({
//   apiKey: process.env.OPEN_AI_KEY,
// });

// const openAI = new OpenAIApi(configuration)

@Injectable()
export class OpenAIService {
  private readonly OPENAI_ENDPOINT = 'https://api.openai.com/v1/chat/completions'; // URL da API do OpenAI

  constructor(private httpService: HttpService) {}

  async complete(problemDescription: string) {

    // const completion = await openai.completions.create({
    //   model: "text-davinci-003",
    //   prompt: `Com base na descrição do problema fornecido: '${problemDescription}' \n avalie a correlação com os seguintes módulos e classifique-os em: Baixa, Média, Alta, Muito Alta ou Perfeita. \n1. Módulo: Desenvolvimento de um Game\n- Objetivo: Desenvolver um jogo computacional ou uma aplicação gamificada para resolver um problema real. \n- Tópicos principais: Desenvolvimento ágil, Desenvolvimento de games, Algoritmos e técnicas de programação, Cinemática aplicada a jogos, Engenharia de Requisitos, Modelos de Negócios, Experiência do Usuário, Expressão oral (storytelling).`,
    //   max_tokens: 2500,
    //   temperature: 0
    // })

    // console.log(completion)


    const headers = {
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer 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`,
      // 'Authorization': `Bearer <openai_key>`,
    };

    const body = {
      model: "gpt-3.5-turbo",
      prompt: `Dado o problema a seguir, classifique a relevância das 6 competências de cada módulo de projeto em termos de sua importância para a solução. As opções de classificação são: Muito Baixa, Baixa, Média, Alta, Muito Alta e Perfeita. Retorne um json com a competência e a classificação dela, separadas por Módulo. Para a Ferramenta Tecnológica, analise se o problema pode ser resolvido através dessa Ferramenta, seja bem criterioso e só classifique como Perfeita, se a ferramenta conseguir resolver o problema da melhor forma possível, para as competências restantes, avalie o quão fácil os alunos enxergarão esse tema no projeto que desenvolvem.

      Problema: "${problemDescription}"
      
      Módulo 1 {
        Ferramenta Tecnológica: "Desenvolvimento de um Jogo",
        Identificar tendências e oportunidades de mercado: "Análise de cenário",
        Identificar tendências e oportunidades de mercado: "Matriz SWOT e Riscos",
        Identificar tendências e oportunidades de mercado: "Diferenciação, posicionamento e segmentação",
        Identificar tendências e oportunidades de mercado: "Product Box e Value Proposition Canvas",
        Identificar tendências e oportunidades de mercado: "Qualidade, PDCA, 6SIGMA, 5S"
      }

      Módulo 2 {
        Ferramenta Tecnológica: "Desenvolvimento de uma plataforma Web",
        Identificar tendências e oportunidades de mercado: "Frameworks(Oceano Azul, 5 forças, 4P's, 6D",
        Interpretar e elaborar planos de negócios : "Incubadoras e ecossistema de Startups",
        Traduzir a estratégia em planos de marketing e comunicação: "Pesquisa de mercado e tendências",
        Elaborar orçamentos e  fluxos de caixa: "Fluxo de Caixa, juros simples e compostos"
        Elaborar orçamentos e  fluxos de caixa: "Taxa de desconto, IRR, NPV, PV e FV"
      }

      Módulo 3 {
        Ferramenta Tecnológica: "Desenvolvimento de predição com Inteligência Artificial",
        Interpretar e elaborar planos de negócios: "Planos de negócios",
        Traduzir a estratégia em planos de marketing e comunicação: "Branding e comunicação",
        Idealizar estruturas organizacionais: "Cultura organizacional",
        Idealizar estruturas organizacionais: "Governança corporativa",
        Decidir sobre investimentos, financiamentos e gestão de recursos: "Ciclo de funding em startups"

      }

      Módulo 4 {
        Ferramenta Tecnológica: "Prototipação de solução para IoT",
        Interpretar e elaborar planos de negócios : "Startup pitches",
        Idealizar estruturas organizacionais: "Diversidade, inclusão e acessibilidade",
        Idealizar estruturas organizacionais: "Design organizacional",
        Aplicar técnicas e ferramentas para gerenciamento de projetos: "PMI, PMBok e Agile",
        Aplicar técnicas e ferramentas para gerenciamento de projetos: "Sistemas para gerenciamento de projetos"
      }`,

    //   Aqui segue um exemplo de análise para o problema: "A evolução do câncer de mama e sua resposta a tratamentos convencionais é muito variável. Conseguimos identificar padrões preditivos dessa variabilidade a partir de dados clínicos e do seguimento desses pacientes?"

    //   {
    //     "Módulo 1": {
    //         "Desenvolvimento de um Jogo": "Baixa",
    //         "Análise de cenário": "Média",
    //         "Matriz SWOT e Riscos": "Média",
    //         "Diferenciação, posicionamento e segmentação": "Muito Baixa",
    //         "Product Box e Value Proposition Canvas": "Muito Baixa",
    //         "Qualidade, PDCA, 6SIGMA, 5S": "Média"
    //     },
    //     "Módulo 2": {
    //         "Desenvolvimento de uma plataforma Web": "Alta",
    //         "Frameworks(Oceano Azul, 5 forças, 4P's, 6D)": "Muito Baixa",
    //         "Incubadoras e ecossistema de Startups": "Muito Baixa",
    //         "Pesquisa de mercado e tendências": "Média",
    //         "Fluxo de Caixa, juros simples e compostos": "Muito Baixa",
    //         "Taxa de desconto, IRR, NPV, PV e FV": "Muito Baixa"
    //     },
    //     "Módulo 3": {
    //         "Desenvolvimento de predição com Inteligência Artificial": "Perfeita",
    //         "Planos de negócios": "Muito Baixa",
    //         "Branding e comunicação": "Muito Baixa",
    //         "Cultura organizacional": "Muito Baixa",
    //         "Governança corporativa": "Muito Baixa",
    //         "Ciclo de funding em startups": "Muito Baixa"
    //     },
    //     "Módulo 4": {
    //         "Prototipação de solução para IoT": "Média",
    //         "Startup pitches": "Muito Baixa",
    //         "Diversidade, inclusão e acessibilidade": "Muito Baixa",
    //         "Design organizacional": "Muito Baixa",
    //         "PMI, PMBok e Agile": "Média",
    //         "Sistemas para gerenciamento de projetos": "Média"
    //     }
    // }
      
    //   `,
      max_tokens: 2500,
      temperature: 0.3
    };

    console.log("problemDescription")
    console.log(problemDescription)
    const observableResponse = this.httpService.post(this.OPENAI_ENDPOINT, body, { headers: headers })
    return lastValueFrom(observableResponse);
    // return completion
    // return {
    //   message: "nha"
    // }
  }
}
