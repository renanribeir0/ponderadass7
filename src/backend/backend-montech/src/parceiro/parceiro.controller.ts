import { Controller, Get, Post, Put, Delete, Body, Query, Param } from "@nestjs/common";

// O que está dentro do parênteses da Controller é o conjunto de url a ser acessado, ou seja, o back está disponível na url: 127.0.0.1:3000
//Para acessar os endpoints dessa tabela, acesse a url: 127.0.0.1:3000/tabelaGenerica

@Controller('parceiro')
export class ParceiroController {

    //Cria o Get universal de acesso a url
    @Get()
    nomeDaFuncao() {
        const parceiro = {
            id: 4969,
            createdAt: "20-08-2023",
            nomeEmpresa: "BTG Pactual",
            mercado: "Mercado Financeiro",
            nomeContato: "Mauricio Felicissimo",
            email: "Mauricio.felicissimo@btg.com",
            telefone: "3299939-2807",
            nota: 9.5,
            iniciativas: ["Iniciativa1", "Iniciativa2"]
        }
        return parceiro
    }

    //127.0.0.1:3000/parceiro/<conteudo>
    @Get(':id')
    nomeDaFuncao2(@Param('id') id: string) {
        return `Você acessou no BD o Parceiro de id: ${id}`
    }

    @Post()
    async create(@Body() any: any) {
        return {
            message: `Você criou um(a) Parceiro com id: ${any.id}`
        
        }
    }
}

//OBS:
//O Endpoint não estará pronto até que app.module.ts import o tabelaGenerica.module.ts