import { Module } from '@nestjs/common';
import { IniciativasModule } from './iniciativas/iniciativas.module';
import { TabelaGenericaModule } from './tabelaGenerica/tabelaGenerica.module';
import { ParceiroModule } from './parceiro/parceiro.module';
import { ModulosModule } from './modulos/modulos.module';

@Module({
  imports: [IniciativasModule, TabelaGenericaModule, ParceiroModule, ModulosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
