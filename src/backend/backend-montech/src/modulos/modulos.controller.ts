import { Controller, Get, Post, Put, Delete, Body, Query, Param } from "@nestjs/common";

// O que está dentro do parênteses da Controller é o conjunto de url a ser acessado, ou seja, o back está disponível na url: 127.0.0.1:3000
//Para acessar os endpoints dessa tabela, acesse a url: 127.0.0.1:3000/tabelaGenerica

@Controller('modulos')
export class ModulosController {

    //Cria o Get universal de acesso a url
    @Get()
    nomeDaFuncao() {
        const modulos = [{
            
                id: 2,
                nomeModulo: "Módulo 02 - Ciclo Básico",
                descricao: "Desenvolvimento de uma plataforma Web",
                competencias: [
                    "Identificar_tendências e oportunidades de mercado: 'Frameworks(Oceano Azul, 5 forças, 4P's, 6D)'",
                    "Interpretar_e_elaborar_planos_de_negócios : 'Incubadoras e ecossistema de Startups'",
                    "Traduzir_a_estratégia_em_planos_de_marketing_e_comunicação: 'Pesquisa de mercado e tendências'",
                    "Elaborar_orçamentos_e_fluxos_de_caixa: 'Fluxo de Caixa, juros simples e compostos'",
                    "Elaborar_orçamentos_e_fluxos_de_caixa: 'Taxa de desconto, IRR, NPV, PV e FV'"
    
                ],
            },

            {
                id: 3,
                nomeModulo: "Módulo 03 - Ciclo Básico",
                descricao: "Construção de lógica para predição com inteligência artificial",
                competencias: [
                "Interpretar e elaborar planos de negócios: 'Planos de negócios'", 
                "Traduzir a estratégia em planos de marketing e comunicação: 'Branding e comunicação'", 
                "Idealizar estruturas organizacionais: 'Cultura organizacional'", 
                "Idealizar estruturas organizacionais: 'Governança corporativa'", 
                "Decidir sobre investimentos, financiamentos e gestão de recursos: 'Ciclo de funding em startups'"
                ],
                
                
            },
        
        
        ]
        return modulos
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