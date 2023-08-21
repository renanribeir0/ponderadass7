import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { OpenAIService } from './openai.service';
import { Response } from 'express';
import { interval, take, lastValueFrom } from 'rxjs';


@Controller('openai')
export class OpenAIController {
  constructor(private readonly openAIService: OpenAIService) {}

  @Get()
  funcao() {
    return {
        message: "O GET OPEN AI FUNCIONA"
    }
  }
  
  @Post()
  async complete(@Body('description') description: string, @Res() res: Response) {
    try {
      console.log(description)
      const response = await lastValueFrom(this.openAIService.complete(description));
      res.json(response.data);
    } catch (error) {
      console.error('Erro ao acessar a API do OpenAI:', error);
      res.status(500).send('Erro ao processar a solicitação');
    }
  }
}
