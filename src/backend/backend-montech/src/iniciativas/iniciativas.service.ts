import { Injectable } from '@nestjs/common';
import { IniciativaRepository } from './iniciativas.repository'
// import { Iniciativa } from 'src/iniciativas/interfaces/iniciativa.interface';
import { Prisma, PrismaClient, Iniciativa } from '@prisma/client';
import { CriaIniciativaDto } from './dto/criarIniciativa.dto';


@Injectable()
export class IniciativasService {

    constructor(private iniciativaRepository: IniciativaRepository) {}

    // private readonly iniciativas: Iniciativa[] = []

    async findById(id: number): Promise<Iniciativa> {
        return this.iniciativaRepository.findIniciativaById(id);
    }

    async findAll(): Promise<Iniciativa[]> {
        return this.iniciativaRepository.findAll();
        // return this.prisma
    }

    async create(iniciativa: CriaIniciativaDto): Promise<Iniciativa> {
        return this.iniciativaRepository.create(iniciativa)
    }
    // create(iniciativa: Iniciativa): Promise<Iniciativa> {
    // create(iniciativa: any) {
    //     return this.prisma.iniciativa.create({
    //         data: iniciativa as any,
    //         include: {
    //             modulo: true,
    //             parceiro: true,
    //             turma: true
    //         }
    //     })
    // }

    async update(id: number, iniciativa: CriaIniciativaDto): Promise<void> {
        await this.iniciativaRepository.update(id, iniciativa)
    }

    async delete(id: number): Promise<void> {
        await this.iniciativaRepository.delete(id)
    }
}