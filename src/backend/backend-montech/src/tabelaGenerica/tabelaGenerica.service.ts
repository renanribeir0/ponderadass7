import { Injectable } from '@nestjs/common'
import { TabelaGenericaRepository } from './tabelaGenerica.repository'
import { TabelaGenerica } from './interfaces/tabelaGenerica.interface'
import { CriaTabelaGenericaDto } from './dto/criarTabelaGenerica.dto'

// A função da Service é colocar as nossas regras de Negócio, entenda que a controller recebe as informações do endpoint / front
// A Service irá executar as funcionalidades corretas e enviar à Repository, para que lá ocorram as manipulações dos dados

@Injectable()
export class TabelaGenericaService {
    constructor(private tabelaGenericaRepository: TabelaGenericaRepository) {}

    async findById(id: number): Promise<TabelaGenerica> {
        return this.tabelaGenericaRepository.findById(id)
    }

    async findAll(): Promise<TabelaGenerica[]> {
        return this.tabelaGenericaRepository.findAll();
    }

    async create(tabelaGenerica: CriaTabelaGenericaDto): Promise<TabelaGenerica> {
        return this.tabelaGenericaRepository.create(tabelaGenerica)
    }

    async update(id: number, data: CriaTabelaGenericaDto): Promise<void> {
        await this.tabelaGenericaRepository.update(id, data)
    }

    async delete(id: number): Promise<void> {
        await this.tabelaGenericaRepository.delete(id)
    }
}