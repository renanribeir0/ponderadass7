import { Injectable } from '@nestjs/common';
import { ParceiroRepository } from './parceiro.respository';
import { Parceiro } from '@prisma/client';
import { CriaParceiroDto } from './dto/criarParceiroDto';

@Injectable()
export class ParceiroService {
    constructor(private parceiroRepository: ParceiroRepository){}

        async findAll(): Promise<Parceiro[]> {
        return this.parceiroRepository.findAll();
        // return this.prisma
    }
    async findById(id: number): Promise<Parceiro> {
        return this.parceiroRepository.findParceiroById(id);
    }

    async create(parceiro: CriaParceiroDto): Promise<Parceiro> {
        return this.parceiroRepository.create(parceiro);
    }

    async update(id: number, data: CriaParceiroDto): Promise<void> {
        await this.parceiroRepository.update(id, data);
    }
    

    async delete(id: number): Promise<void> {
        await this.parceiroRepository.delete(id)
    }
}