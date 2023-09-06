import { Module } from "@nestjs/common"
import { OpenAIController } from './openai.controller'
import { GeraTapiController } from "./openai.controller"
import { OpenAIService } from "./openai.service"
import { HttpModule } from '@nestjs/axios'


@Module({
    imports: [HttpModule],
    controllers: [OpenAIController, GeraTapiController],
    providers: [OpenAIService]
})
export class OpenAIModule {}