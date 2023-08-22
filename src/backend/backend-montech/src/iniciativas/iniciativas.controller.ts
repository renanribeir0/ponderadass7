import { Controller, Get, Post, Put, Delete, Body, Query, Param } from "@nestjs/common";
import { CriaIniciativaDto } from "src/iniciativas/dto/criarIniciativa.dto";
import { IniciativasService } from "src/iniciativas/iniciativas.service";

@Controller('iniciativas')
export class IniciativasController {
    constructor(private iniciativaService: IniciativasService) {}

    @Get()
    findAll() {
        
        return this.iniciativaService.findById()
    }


    @Get(':id')
    findById(@Param('id') id: string) {
        const json2 = {
            luis: id
        }
        return json2
    }

    @Post()
    async create(@Body() criaIniciativaDto: CriaIniciativaDto) {
        return {
            message: `Você criou uma iniciativa para o ${criaIniciativaDto.modulo}`
        }
    }
}