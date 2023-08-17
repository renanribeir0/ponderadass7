import { Controller, Get, Post, Put, Delete, Body, Query, Param } from "@nestjs/common";

// O que está dentro do parênteses da Controller é o conjunto de url a ser acessado, ou seja, o back está disponível na url: 127.0.0.1:3000
//Para acessar os endpoints dessa tabela, acesse a url: 127.0.0.1:3000/tabelaGenerica

@Controller('tabelaGenerica')
export class TabelaGenericaController {

    //Cria o Get universal de acesso a url
    @Get()
    nomeDaFuncao() {
        const json = {
            conteudoMockado: "Coloque propriedades e valores"
        }
        return json
    }

    //127.0.0.1:3000/tabelaGenerica/<conteudo>
    @Get(':parametro')
    nomeDaFuncao2(@Param('parametro') parametro: string) {
        const json = {
            conteudoMockado: `Aqui você acessa apenas a tabelaGenerica de parametro = ${parametro}`
        }
        return json
    }

    @Post()
    async create(@Body() any: any) {
        return 'Você criou um(a) TabelaGenerica'
    }
}

//OBS:
//O Endpoint não estará pronto até que app.module.ts import o tabelaGenerica.module.ts