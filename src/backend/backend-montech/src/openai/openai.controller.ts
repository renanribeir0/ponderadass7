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
  // async classificaModulo(@Body('description') description: string, @Res() res: Response) {
  async classificaModulo(@Body('description') description: string, @Body('modulo') modulo: any, @Res() res: Response) {
  console.log("description");
  console.log(description);

  try {
    const observableResult = await this.openAIService.classificaModulo(description, modulo); 
    // const result = await lastValueFrom(observableResult);
    // console.log(observableResult);
    // console.log("observableResult.data.choices[0]")
    // console.log(res.json(observableResult.data.choices[0]))
    res.json(observableResult.data.choices[0]);
    console.log("observableResult.data.choices[0]")
    console.log(observableResult.data.choices[0])
  } catch (error) {
    console.error('Erro ao acessar a API do OpenAI:', error);
    res.status(500).send('Erro ao processar a solicitação');
  }

  }

  // async geraTapi(@Body('iniciativa') iniciativa: any, @Res() res: Response) {
  //   console.log(iniciativa)

  //   try {
  //     const observableResult = await this.openAIService.geraTapi(iniciativa);
  //     res.json(observableResult.data.choices[0]);
  //   } catch (error) {
  //     console.error('Erro ao acessar a API do OpenAI:', error);
  //     res.status(500).send('Erro ao processar a solicitação');
  //   }
  // }

}

@Controller('geraTapi')
export class GeraTapiController {
  constructor(private readonly openAIService: OpenAIService) {}

  @Get()
  funcao() {
    return {
        message: "O GET geratapi FUNCIONA"
    }
  }

  @Post()
  async geraTapi(@Body('description') description: string, @Body('contexto') contexto: string, @Res() res: Response) {

    try {
      const observableResult = await this.openAIService.geraTapi(description, contexto);
      res.json(observableResult.data.choices[0]);

    } catch (error) {
      console.error('Erro ao acessar a API do OpenAI:', error);
      res.status(500).send('Erro ao processar a solicitação');
    }
  }

}

