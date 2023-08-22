import { Module } from '@nestjs/common';
import { IniciativasModule } from './iniciativas/iniciativas.module';
import { TabelaGenericaModule } from './tabelaGenerica/tabelaGenerica.module';

@Module({
  imports: [IniciativasModule, TabelaGenericaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
