import { Controller, Get, Post, Put, Delete, Body, Query, Param } from "@nestjs/common";
import { CriaTabelaGenericaDto } from './dto/criarTabelaGenerica.dto'
import { TabelaGenericaService } from "./tabelaGenerica.service";
import { TabelaGenerica } from './interfaces/tabelaGenerica.interface'
// O que está dentro do parênteses da Controller é o conjunto de url a ser acessado, ou seja, o back está disponível na url: 127.0.0.1:3000
//Para acessar os endpoints dessa tabela, acesse a url: 127.0.0.1:3000/tabelaGenerica
// Aqui estamos enviando as informações que recebmos do front para a Service

@Controller('tabelaGenerica')
export class TabelaGenericaController {
    constructor(private tabelaGenericaService: TabelaGenericaService) {}

    //Cria o Get universal de acesso a url
    @Get()
    async findAll(): Promise<TabelaGenerica[]> {
        
        return this.tabelaGenericaService.findAll()
    }

    //127.0.0.1:3000/tabelaGenerica/<conteudo>
    @Get(':id')
    findById(@Param('id') id: string): Promise<TabelaGenerica> {
        const intId = parseInt(id);

        return this.tabelaGenericaService.findById(intId)
    }

    @Put(":id")
    async update(@Param('id') id: string, @Body() tabelaGenerica:CriaTabelaGenericaDto): Promise<void> {
        const intId = parseInt(id);

        await this.tabelaGenericaService.update(intId, tabelaGenerica)
    }

    @Post()
    async create(@Body() criaTabelaGenericaDto: CriaTabelaGenericaDto ) {
        return this.tabelaGenericaService.create(criaTabelaGenericaDto)
    }

    @Delete(":id")
    async delete(@Param('id') id: string) {
        const intId = parseInt(id)

        return this.tabelaGenericaService.delete(intId)
    }
}

//OBS:
//O Endpoint não estará pronto até que app.module.ts import o tabelaGenerica.module.ts