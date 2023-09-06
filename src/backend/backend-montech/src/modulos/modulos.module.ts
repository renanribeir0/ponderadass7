import { Module } from "@nestjs/common"
import { ModuloController } from "./modulos.controller"
import { ModuloService } from "./modulos.service"
import { ModuloRepository } from "./modulos.repository"

@Module({
    controllers: [ModuloController],
    providers: [ModuloService, ModuloRepository ]
})
export class ModulosModule {}