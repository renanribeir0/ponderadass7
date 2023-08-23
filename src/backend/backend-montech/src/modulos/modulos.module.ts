import { Module } from "@nestjs/common"
import { ModulosController } from "./modulos.controller"

@Module({
    controllers: [ModulosController],
    providers: []
})
export class ModulosModule {}