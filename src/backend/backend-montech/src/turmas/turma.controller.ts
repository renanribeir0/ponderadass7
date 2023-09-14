import { Controller, Get, Post, Put, Delete, Body, Query, Param } from "@nestjs/common";
import { Turma } from "@prisma/client";
import { TurmasService } from "./turma.service";
import { CriaTurmaDto } from "./dto/criarTurma.dto";

@Controller('turma')
export class TurmaController{
    constructor (private  turmasService: TurmasService){}

    // Encontrando um conjunto de turmas na tabela
    @Get()
    async findAll(): Promise<Turma[]>{
        return await this.turmasService.findAll();
    }

    //Encontrando uma turma por Id
    @Get(':id')
    async findById(@Param('id') id: string): Promise<Turma> {
        const intId = parseInt(id)

        return this.turmasService.findById(intId);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() turma: CriaTurmaDto): Promise<void> {
        const intId = parseInt(id);
        await this.turmasService.update(intId, turma);
    }

    @Post()
    async create(@Body() criaTurmaDto: CriaTurmaDto){
        return this.turmasService.create(criaTurmaDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        const intId = parseInt(id);
        return this.turmasService.delete(intId);
    }
}
