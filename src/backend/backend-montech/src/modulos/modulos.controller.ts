import { Controller, Get, Post, Put, Delete, Body, Query, Param } from "@nestjs/common";

// O que está dentro do parênteses da Controller é o conjunto de url a ser acessado, ou seja, o back está disponível na url: 127.0.0.1:3000
//Para acessar os endpoints dessa tabela, acesse a url: 127.0.0.1:3000/tabelaGenerica

@Controller('modulos')
export class ModulosController {

    //Cria o Get universal de acesso a url
    @Get()
    nomeDaFuncao() {
        const modulo = {
            id: 69,
            descricao: "Construção de lógica para predição com inteligência artificial",
            competencias: ["Interpretar e elaborar planos de negócios: 'Planos de negócios'", "Traduzir a estratégia em planos de marketing e comunicação: 'Branding e comunicação'", "Idealizar estruturas organizacionais: 'Cultura organizacional'", "Idealizar estruturas organizacionais: 'Governança corporativa'", "Decidir sobre investimentos, financiamentos e gestão de recursos: 'Ciclo de funding em startups'"],
            iniciativasId: 0 
        }
        return modulo
    }

    //127.0.0.1:3000/parceiro/<conteudo>
    @Get(':id')
    nomeDaFuncao2(@Param('id') id: string) {
        
        return `Você acessou no BD o Módulo de id: ${id}`    
    }

    @Post()
    async create(@Body() any: any) {
        return {
            message: `Você criou um Módulo com id ${any.id}`

        }
    }
}

//OBS:
//O Endpoint não estará pronto até que app.module.ts import o tabelaGenerica.module.ts