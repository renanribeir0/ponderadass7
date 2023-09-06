import { Controller, Get, Post, Put, Delete, Body, Query, Param } from "@nestjs/common";
import { CriaModuloDto } from './dto/criarModulo.dto'
import { ModuloService } from "./modulos.service";
import { Modulo } from "@prisma/client"
// O que está dentro do parênteses da Controller é o conjunto de url a ser acessado, ou seja, o back está disponível na url: 127.0.0.1:3000
//Para acessar os endpoints dessa tabela, acesse a url: 127.0.0.1:3000/Modulo

@Controller('modulos')
export class ModuloController {
    constructor(private moduloService: ModuloService) {}
    //Cria o Get universal de acesso a url
    @Get()
    async findAll(): Promise<Modulo[]> {
        
        return this.moduloService.findAll()
    }

    //127.0.0.1:3000/parceiro/<conteudo>
    @Get(':id')
    async findById(@Param('id') id: string): Promise<Modulo> {
        const intId = parseInt(id);

        return this.moduloService.findById(intId)
    }

    @Put(":id")
    async update(@Param('id') id: string, @Body() modulo: CriaModuloDto): Promise<void> {
        const intId = parseInt(id);

        await this.moduloService.update(intId, modulo)
    }


    @Post()
    async create(@Body() criaModuloDto: CriaModuloDto) {
        return this.moduloService.create(criaModuloDto)
        
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const intId = parseInt(id);
        
        return this.moduloService.delete(intId)
    }
}

//OBS:
//O Endpoint não estará pronto até que app.module.ts import o Modulo.module.ts