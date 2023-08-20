import { Module } from '@nestjs/common';
import { IniciativasModule } from './iniciativas/iniciativas.module';
import { TabelaGenericaModule } from './tabelaGenerica/tabelaGenerica.module';
import { OpenAIModule } from './openai/openai.module';

@Module({
  imports: [IniciativasModule, TabelaGenericaModule, OpenAIModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
