import { Injectable } from '@nestjs/common';
import { ModuloRepository } from './modulos.repository'
// import { Modulos } from 'src/Moduloss/interfaces/Modulos.interface';
import { Prisma, PrismaClient, Modulo } from '@prisma/client';
import { CriaModulosDto } from './dto/criarModulos.dto';


@Injectable()
export class ModulossService {

    constructor(private modulosRepository: ModulosRepository) {}

    // private readonly Moduloss: Modulos[] = []

    async findById(id: number): Promise<Modulo> {
        return this.modulosRepository.findModulosById(id);
    }

    async findAll(): Promise<Modulo[]> {
        return this.modulosRepository.findAll();
        // return this.prisma
    }

    async create(Modulos: CriaModulosDto): Promise<Modulo> {
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

    async update(id: number, data: CriaModulosDto): Promise<void> {
        await this.modulosRepository.update(id, data)
    }

    async delete(id: number): Promise<void> {
        await this.modulosRepository.delete(id)
    }
}