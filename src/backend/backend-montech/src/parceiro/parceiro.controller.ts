import { Controller, Get, Post, Put, Delete, Body, Query, Param } from "@nestjs/common";

// O que está dentro do parênteses da Controller é o conjunto de url a ser acessado, ou seja, o back está disponível na url: 127.0.0.1:3000
//Para acessar os endpoints dessa tabela, acesse a url: 127.0.0.1:3000/tabelaGenerica

@Controller('parceiro')
export class ParceiroController {

    //Cria o Get universal de acesso a url
    @Get()
    nomeDaFuncao() {
        const json = {
            id: 4969
        }
        return json.id
    }

    //127.0.0.1:3000/parceiro/<conteudo>
    @Get(':nome')
    nomeDaFuncao2(@Param('nome') nome: string) {
        const json = {
            conteudoMockado: `Aqui você acessa apenas o parceiro de parametro = ${nome}`
        }
        return json
    }

    @Post()
    async create(@Body() any: any) {
        return 'Você criou um(a) Parceiro'
    }
}

//OBS:
//O Endpoint não estará pronto até que app.module.ts import o tabelaGenerica.module.ts