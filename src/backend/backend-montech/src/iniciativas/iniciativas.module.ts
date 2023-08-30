import { Module } from "@nestjs/common";
import { IniciativasController } from "./iniciativas.controller";
import { IniciativasService } from "./iniciativas.service";
import { IniciativaRepository } from "./iniciativas.repository";

@Module({
    controllers: [IniciativasController],
    providers: [IniciativasService, IniciativaRepository]
})
export class IniciativasModule {}