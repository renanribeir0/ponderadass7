import { Controller, Get, Post, Put, Delete, Body, Query, Param } from "@nestjs/common";
// import ParceiroModule from "./parceiro.module"
// import { CriaIniciativaDto } from "src/iniciativas/dto/criarIniciativa.dto";
import { CriaParceiroDto } from "./dto/criarParceiroDto";
import { ParceiroService } from "./parceiro.service";
import { Parceiro } from "@prisma/client";

@Controller('parceiro')
export class ParceiroController {
    constructor(private parceiroService: ParceiroService) {}
    //Cria o Get universal de acesso a url
    @Get()
        async findAll(): Promise<Parceiro[]> {
            return this.parceiroService.findAll();
        }

    //127.0.0.1:3000/parceiro/<conteudo>
    @Get(':id')
    async findById(@Param('id') id: string): Promise<Parceiro> {
        const intId = parseInt(id);
        return this.parceiroService.findById(intId);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() parceiro: CriaParceiroDto): Promise<void> {
        const intId = parseInt(id);

        await this.parceiroService.update(intId, parceiro)
    }

    @Post()
    async create(@Body() criaParceiroDto: CriaParceiroDto) {
        return this.parceiroService.create(criaParceiroDto)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const intId = parseInt(id);

        return this.parceiroService.delete(intId)
    }
}

//OBS:
//O Endpoint não estará pronto até que app.module.ts import o tabelaGenerica.module.ts