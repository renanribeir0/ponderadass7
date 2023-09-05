import { Module } from "@nestjs/common"
import { ModulosController } from "./modulos.controller"
import {ModuloService} from ""
import ModuloRepository from ""

@Module({
    controllers: [ModulosController],
    providers: [ModuloService, ModuloRepository ]
})
export class ModulosModule {}