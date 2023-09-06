import { Injectable } from '@nestjs/common';
import { ModuloRepository } from './modulos.repository'
// import { Modulos } from 'src/Moduloss/interfaces/Modulos.interface';
import { Prisma, PrismaClient, Modulo } from '@prisma/client';
import { CriaModuloDto } from './dto/criarModulo.dto';


@Injectable()
export class ModuloService {

    constructor(private modulosRepository: ModuloRepository) {}

    // private readonly Moduloss: Modulos[] = []

    async findById(id: number): Promise<Modulo> {
        return this.modulosRepository.findModuloById(id);
    }

    async findAll(): Promise<Modulo[]> {
        return this.modulosRepository.findAll();
        // return this.prisma
    }

    async create(Modulos: CriaModuloDto): Promise<Modulo> {
        return this.modulosRepository.create(Modulos)
    }
    // create(Modulos: Modulos): Promise<Modulo> {
    // create(Modulos: any) {
    //     return this.prisma.Modulos.create({
    //         data: Modulos as any,
    //         include: {
    //             modulo: true,
    //             parceiro: true,
    //             turma: true
    //         }
    //     })
    // }

    async update(id: number, data: CriaModuloDto): Promise<void> {
        await this.modulosRepository.update(id, data)
    }

    async delete(id: number): Promise<void> {
        await this.modulosRepository.delete(id)
    }
}