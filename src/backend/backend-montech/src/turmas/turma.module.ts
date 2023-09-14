import { Module } from "@nestjs/common";
import { TurmaController } from './turma.controller';
import { TurmasService} from './turma.service';
import { TurmaRepository } from "./turma.repository";

@Module({
    controllers: [TurmaController],
    providers: [TurmasService, TurmaRepository]
})
export class TurmaModule {}