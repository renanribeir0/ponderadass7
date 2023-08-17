import { Module } from "@nestjs/common"
import { TabelaGenericaController } from './tabelaGenerica.controller'

@Module({
    controllers: [TabelaGenericaController],
    providers: []
})
export class TabelaGenericaModule {}