import { Module } from "@nestjs/common";
import { UsuarioEPController } from "./usuarioEP.controller";
import { UsuarioEPService } from "./usuarioEP.service";
import { UsuarioEPRepository } from "./usuarioEP.repository";

@Module({
    controllers: [UsuarioEPController],
    providers: [UsuarioEPService, UsuarioEPRepository]
})
export class UsuarioEPModule {}