import { Module } from '@nestjs/common';
import { IniciativasModule } from './iniciativas/iniciativas.module';
import { TabelaGenericaModule } from './tabelaGenerica/tabelaGenerica.module';
import { ParceiroModule } from './parceiro/parceiro.module';

@Module({
  imports: [IniciativasModule, TabelaGenericaModule, ParceiroModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
