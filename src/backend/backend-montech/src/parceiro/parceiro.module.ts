import { Module } from "@nestjs/common"
import { ParceiroController } from './parceiro.controller'

@Module({
    controllers: [ParceiroController],
    providers: []
})
export class ParceiroModule {}