import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import OpenAI from 'openai'
import { lastValueFrom } from 'rxjs';

// require('dotenv').config();

// import  Configuration from "openai";
// import OpenAIApi from 'openai';
// const configuration = new Configuration({
//     // organization: "org-Ps0BrHiLWAEEvO98ALfBzuCR",
// });
// const openai = new OpenAIApi(configuration);


// const { Configuration, OpenAIApi } = require("openai")

// const openai = new OpenAI({ apiKey: $OPEN_AI_KEY});

// const configuration = new Configuration({
//   apiKey: process.env.OPEN_AI_KEY,
// });

// const openAI = new OpenAIApi(configuration)

@Injectable()
export class OpenAIService {
  private readonly OPENAI_ENDPOINT = 'https://api.openai.com/v1/completions'; // URL da API do OpenAI

  constructor(private httpService: HttpService) {}

  // async classificaModulo(problemDescription: string, modulo: any) {
  // // async classificaModulo(problemDescription: string, modulos: any[]) {

  //   // const completion = await openai.completions.create({
  //   //   model: "text-davinci-003",
  //   //   prompt: `Com base na descrição do problema fornecido: '${problemDescription}' \n avalie a correlação com os seguintes módulos e classifique-os em: Baixa, Média, Alta, Muito Alta ou Perfeita. \n1. Módulo: Desenvolvimento de um Game\n- Objetivo: Desenvolver um jogo computacional ou uma aplicação gamificada para resolver um problema real. \n- Tópicos principais: Desenvolvimento ágil, Desenvolvimento de games, Algoritmos e técnicas de programação, Cinemática aplicada a jogos, Engenharia de Requisitos, Modelos de Negócios, Experiência do Usuário, Expressão oral (storytelling).`,
  //   //   max_tokens: 2500,
  //   //   temperature: 0
  //   // })

  //   // console.log(completion)


  //   const headers = {
  //     // 'Content-Type': 'application/json',
  //     'Authorization': `Bearer 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`,
  //     // 'Authorization': `Bearer <openai_key>`,
  //   };
    
  //   const body = {
  //     model: "text-davinci-003",
  //     prompt: `Dado o problema a seguir, classifique a relevância das 6 competências do ${modulo.nomeModulo} para a solução. As opções de classificação são: Muito Baixa, Baixa, Média, Alta, Muito Alta e Perfeita. Retorne um json com a competência e a classificação dela. Para a Ferramenta_Tecnologica, analise se o problema pode ser resolvido através dessa Ferramenta, seja bem criterioso e só classifique como Perfeita, se a ferramenta conseguir resolver o problema da melhor forma possível, para as competências restantes, avalie o quão fácil os alunos enxergarão esse tema no projeto que desenvolvem.

  //     Problema: "${problemDescription}"
      
  //     {
  //      Ferramenta_Tecnologica: "${modulo.descricao}",
  //      ${modulo.competencias.map((competencia, index) => {
  //       `competencia_${index}: ${competencia}`})},
       
  //    }
     
  //    A resposta deve seguir o seguinte molde:
  //    {
  //     "moduloId": <${modulo.id}>
  //     "Ferramenta_Tecnologica": "<Classificação>",
  //     "Competencia_1": "<Classificação>",
  //     "Competencia_2": "<Classificação>",
  //     "Competencia_3": "<Classificação>",
  //     "Competencia_4": "<Classificação>",
  //     "Competencia_5": "<Classificação>"
  //    }`, 
  //     max_tokens: 2500,
  //     temperature: 0.3
  //   };

  //   console.log("problemDescription")
  //   console.log(problemDescription)
  //   const observableResponse = this.httpService.post(this.OPENAI_ENDPOINT, body, { headers: headers })
  //   return lastValueFrom(observableResponse);
    
  // }


  async classificaModulo(problemDescription: string) {
    // async classificaModulo(problemDescription: string, modulos: any[]) {
  
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
        model: "text-davinci-003",
        prompt: `Dado o problema a seguir, classifique a relevância de cada ferramenta tecnológica para a solução. As opções de classificação são: Muito Baixa, Baixa, Média, Alta, Muito Alta e Perfeita. Retorne um json com a classificação dela. Analise se o problema pode ser resolvido através dessa Ferramenta, seja bem criterioso e só classifique como Perfeita, se a ferramenta conseguir resolver o problema da melhor forma possível, Muito Alta se ele pode ser solucionado através desse contexto, mesmo que precise de outros complementos.
        Seguem o Problema e as ferramentas tecnológicas:
  
        Problema: "${problemDescription}"
        Ferramenta_Tecnologica do Modulo 1: Desenvolvimento de jogo digital,
        Ferramenta_Tecnologica do Modulo 2: Elaboração de aplicação para ambiente web,
        Ferramenta_Tecnologica do Modulo 3: Construção de lógica para predição com inteligência artificial (Modelo Preditivo),
        Ferramenta_Tecnologica do Modulo 4: Prototipação de solução para IoT,
       
    
       
       A resposta será manipulada como array através de um JSON.parse, por isso retorne apenas a string a seguir completando as classificações:
       [<Classificação do modulo 1>, <Classificação do modulo 2>, <Classificação do modulo 3>, <Classificação do modulo 4>]`, 
        max_tokens: 2500,
        temperature: 0.3
      };
  
      console.log("problemDescription")
      console.log(problemDescription)
      const observableResponse = this.httpService.post(this.OPENAI_ENDPOINT, body, { headers: headers })
      return lastValueFrom(observableResponse);
      
    }



  async geraTapi(descricao: string, contexto: string) {
    const headers = {
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer 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`,
      // 'Authorization': `Bearer <openai_key>`,
    };
    const body = {
      model: "text-davinci-003",
      prompt: `Dado  problema a seguir, e o contexto do módulo a seguir, que indica a ferramenta tecnológica a ser utilizada, retorne um json no seguinte molde:
      {
        "escopo": "<conteudo>",
        "tema": "<conteudo>",
        "mvp": "["1. <conteudo>", "2. <conteudo> ..."]"
      }

      Para isso, você deve idealizar um escopo de solução, ou seja, uma explicação de como o problema deve ser resolvido em um parágrafo curto. 
      Após isso, identificar o Tema do Projeto, como por exemplo: Fluxo de Caixa, Gestão de Pessoas, Gestão de Projetos, etc.
      Por fim, crie um MVP com 3 a 8 funcionalidades mínimas do produto para que a dor seja solucionada, exemplo de um problema para gestão de projetos:
      1. Cadastro de módulos / contexto do Metaprojeto (Molde do projeto) 
      2. Cronograma de operação
      3. Formulário de entrada de propostas de projetos; 
      4. Dash de análise de Projetos;
.
      Aqui segue o Problema e o contexto tecnológico:

      Problema: "${descricao}"
      Contexto: "${contexto}"`,
      max_tokens: 2500,
      temperature: 0.3
    };

    const observableResponse = this.httpService.post(this.OPENAI_ENDPOINT, body, { headers: headers })
    return lastValueFrom(observableResponse);
  }
}
