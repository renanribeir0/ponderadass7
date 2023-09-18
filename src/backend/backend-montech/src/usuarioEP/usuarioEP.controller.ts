import { Controller, Get, Put, Delete, Body, Query, Param } from "@nestjs/common";
import { CriaUsuarioEPDto } from "./dto/criarUsuarioEP.dto";
import { UsuarioEPService } from "./usuarioEP.service";
import { UsuarioEP } from "@prisma/client";

// ... outras importações

@Controller('usuarioEP')
export class UsuarioEPController {
    constructor(private usuarioEPService: UsuarioEPService) {}

    @Get()
    funcao() {
        return {
            resposta: "O GET Usuarios FUNCIONA"
        };
    }

    @Get('listar')
    async findAll(): Promise<UsuarioEP[]> {
        return this.usuarioEPService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<UsuarioEP> {
        const intId = parseInt(id);
        
        return this.usuarioEPService.findById(intId);
    }

    @Put(":id")
    async update(@Param('id') id: string, @Body() usuarioEP: CriaUsuarioEPDto): Promise<void> {
        const intId = parseInt(id);

        await this.usuarioEPService.update(intId, usuarioEP);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const intId = parseInt(id);
        
        return this.usuarioEPService.delete(intId);
    }
    
    @Get('outra-rota-get')
    outraRotaGet() {
        return {
            resposta: "Esta é outra rota GET"
        };
    }
}
