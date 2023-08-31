import { Module } from '@nestjs/common';
import { IniciativasModule } from './iniciativas/iniciativas.module';
import { TabelaGenericaModule } from './tabelaGenerica/tabelaGenerica.module';
import { UsuarioEPModule } from './usuarioEP/usuarioEP.module';
import { ParceiroModule } from './parceiro/parceiro.module';
import { ModulosModule } from './modulos/modulos.module';
import { OpenAIModule } from './openai/openai.module';
// import { PrismaService } from './prisma.service';


@Module({
  imports: [IniciativasModule, ParceiroModule, ModulosModule, OpenAIModule, UsuarioEPModule],
  controllers: [],
  providers: [],
  // providers: [PrismaService],
})
export class AppModule {}
