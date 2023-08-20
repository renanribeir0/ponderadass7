import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class OpenAIService {
  private readonly OPENAI_ENDPOINT = 'https://api.openai.com/v1/engines/davinci/completions'; // URL da API do OpenAI

  constructor(private httpService: HttpService) {}

  complete(problemDescription: string): Observable<AxiosResponse<any>> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer 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`,
    };

    const body = {
      prompt: `Com base na descrição do problema fornecido: '${problemDescription}' \n avalie a correlação com os seguintes módulos e classifique-os em: Baixa, Média, Alta, Muito Alta ou Perfeita. \n1. Módulo: Desenvolvimento de um Game\n- Objetivo: Desenvolver um jogo computacional ou uma aplicação gamificada para resolver um problema real. \n- Tópicos principais: Desenvolvimento ágil, Desenvolvimento de games, Algoritmos e técnicas de programação, Cinemática aplicada a jogos, Engenharia de Requisitos, Modelos de Negócios, Experiência do Usuário, Expressão oral (storytelling).`,
      max_tokens: 2500,
    };

    return this.httpService.post(this.OPENAI_ENDPOINT, body, { headers: headers });
  }
}
