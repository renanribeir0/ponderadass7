import { Module } from "@nestjs/common";
import { ParceiroController } from './parceiro.controller';
import { ParceiroService} from './parceiro.service';
import { ParceiroRepository } from './parceiro.repository';

@Module({
    controllers: [ParceiroController],
    providers: [ParceiroService, ParceiroRepository]
})
export class ParceiroModule {}