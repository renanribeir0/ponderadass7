import { Controller, Get, Post, Put, Delete, Body, Query, Param } from "@nestjs/common";
import { CriaUsuarioEPDto } from "./dto/criarUsuarioEP.dto";
import { UsuarioEPService } from "./usuarioEP.service";
// import { UsuarioEP } from './interfaces/usuarioEP.interface'
// import { PrismaService } from '../prisma.service'
import { UsuarioEP } from "@prisma/client";


@Controller('usuarioEP')
export class UsuarioEPController {
    constructor(private usuarioEPService: UsuarioEPService) {}

    @Get()
    async findAll(): Promise<UsuarioEP[]> {
        
        return this.usuarioEPService.findAll()
    }


    @Get(':id')
    async findById(@Param('id') id: string): Promise<UsuarioEP> {
        const intId = parseInt(id);
        
        return this.usuarioEPService.findById(intId)
    }

    @Put(":id")
    async update(@Param('id') id: string, @Body() usuarioEP: CriaUsuarioEPDto): Promise<void> {
        const intId = parseInt(id);

        await this.usuarioEPService.update(intId, usuarioEP)
    }

    @Post()
    async create(@Body() criaUsuarioEPDto: CriaUsuarioEPDto) {
        return this.usuarioEPService.create(criaUsuarioEPDto)
        
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const intId = parseInt(id);
        
        return this.usuarioEPService.delete(intId)
    }
}





