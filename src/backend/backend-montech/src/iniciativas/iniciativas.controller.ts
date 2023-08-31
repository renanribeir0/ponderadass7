import { Controller, Get, Post, Put, Delete, Body, Query, Param } from "@nestjs/common";
import { CriaIniciativaDto } from "src/iniciativas/dto/criarIniciativa.dto";
import { IniciativasService } from "./iniciativas.service";
// import { Iniciativa } from './interfaces/iniciativa.interface'
// import { PrismaService } from '../prisma.service'
import { Iniciativa } from "@prisma/client";


@Controller('iniciativas')
export class IniciativasController {
    constructor(private iniciativaService: IniciativasService) {}

    @Get()
    async findAll(): Promise<Iniciativa[]> {
        
        return this.iniciativaService.findAll()
    }


    @Get(':id')
    async findById(@Param('id') id: string): Promise<Iniciativa> {
        const intId = parseInt(id);
        
        return this.iniciativaService.findById(intId)
    }

    @Put(":id")
    async update(@Param('id') id: string, @Body() iniciativa: CriaIniciativaDto): Promise<void> {
        const intId = parseInt(id);

        await this.iniciativaService.update(intId, iniciativa)
    }

    @Post()
    async create(@Body() criaIniciativaDto: CriaIniciativaDto) {
        return this.iniciativaService.create(criaIniciativaDto)
        
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const intId = parseInt(id);
        
        return this.iniciativaService.delete(intId)
    }
}





