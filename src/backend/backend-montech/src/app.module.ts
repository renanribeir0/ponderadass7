import { Module } from '@nestjs/common';
import { IniciativasModule } from './iniciativas/iniciativas.module';
import { TabelaGenericaModule } from './tabelaGenerica/tabelaGenerica.module';
import { ParceiroModule } from './parceiro/parceiro.module';
import { ModulosModule } from './modulos/modulos.module';
import { OpenAIModule } from './openai/openai.module';
import { PrismaService } from './prisma.service';


@Module({
  imports: [IniciativasModule, TabelaGenericaModule, ParceiroModule, ModulosModule, OpenAIModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
