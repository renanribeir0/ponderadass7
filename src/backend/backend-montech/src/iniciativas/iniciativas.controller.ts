import { Controller, Get, Post, Put, Delete, Body, Query, Param } from "@nestjs/common";
// import { CriaIniciativaDto } from "src/iniciativas/dto/criarIniciativa.dto";
import { IniciativasService } from "src/iniciativas/iniciativas.service";
import { PrismaService } from '../prisma.service'
import { Iniciativa as IniciativaModel } from "@prisma/client";


@Controller('iniciativas')
export class IniciativasController {
    constructor(private iniciativaService: IniciativasService) {}

    @Get()
    // async findAll(): Promise<IniciativaModel[]> {
    async findAll() {
        
        // return this.iniciativaService.findAll();
        return {
            id: 1,
            modulo: "06 - Engenharia de Software"
        }
    }


    // @Get(':id')
    // // async findById(@Param('id') id: number): Promise<IniciativaModel> {
    // async findById(@Param('id') id: number) {
        
    //     return this.iniciativaService.findById(id)
    // }

    @Post()
    async create(@Body() any: any) {
    // async create(@Body() criaIniciativaDto: CriaIniciativaDto) {
        // return this.iniciativaService.create(criaIniciativaDto)
        return {
            message: `Você criou uma Iniciativa de id: ${any.id}`
        }
    }
}