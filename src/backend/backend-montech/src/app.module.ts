import { Module } from '@nestjs/common';
import { IniciativasModule } from './iniciativas/iniciativas.module';
import { TabelaGenericaModule } from './tabelaGenerica/tabelaGenerica.module';
import { OpenAIModule } from './openai/openai.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [IniciativasModule, TabelaGenericaModule, OpenAIModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
