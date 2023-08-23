import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { OpenAIService } from './openai.service';
import { Response } from 'express';
import { lastValueFrom } from 'rxjs';


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
  console.log("description");
  console.log(description);

  try {
    const observableResult = await this.openAIService.complete(description); 
    // const result = await lastValueFrom(observableResult);
    // console.log(observableResult);
    // console.log("observableResult.data.choices[0]")
    // console.log(res.json(observableResult.data.choices[0]))
    res.json(observableResult.data.choices[0]);
  } catch (error) {
    console.error('Erro ao acessar a API do OpenAI:', error);
    res.status(500).send('Erro ao processar a solicitação');
  }
}

}
