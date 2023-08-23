import { Controller, Get, Post, Put, Delete, Body, Query, Param } from "@nestjs/common";
import { CriaIniciativaDto } from "src/iniciativas/dto/criarIniciativa.dto";
import { IniciativasService } from "src/iniciativas/iniciativas.service";
import { PrismaService } from '../prisma.service'
import { Iniciativa as IniciativaModel } from "@prisma/client";


@Controller('iniciativas')
export class IniciativasController {
    constructor(private iniciativaService: IniciativasService) {}

    @Get()
    // async findAll(): Promise<IniciativaModel[]> {
    async findAll() {
        
        return this.iniciativaService.findAll();
    }


    @Get(':id')
    // async findById(@Param('id') id: number): Promise<IniciativaModel> {
    async findById(@Param('id') id: number) {
        
        return this.iniciativaService.findById(id)
    }

    @Post()
    async create(@Body() criaIniciativaDto: CriaIniciativaDto) {
        return this.iniciativaService.create(criaIniciativaDto)
    }
}