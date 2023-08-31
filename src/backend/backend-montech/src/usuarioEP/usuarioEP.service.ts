import { Injectable } from '@nestjs/common';
import { UsuarioEPRepository } from './usuarioEP.repository'
// import { UsuarioEP } from 'src/usuarioEP/interfaces/usuarioEP.interface';
import { Prisma, PrismaClient, UsuarioEP } from '@prisma/client';
import { CriaUsuarioEPDto } from './dto/criarUsuarioEP.dto';


@Injectable()
export class UsuarioEPService {

    constructor(private usuarioEPRepository: UsuarioEPRepository) {}

    // private readonly usuarioEP: UsuarioEP[] = []


    async findById(id: number): Promise<UsuarioEP> {
        return this.usuarioEPRepository.findUsuarioEPById(id);
    }

    async findAll(): Promise<UsuarioEP[]> {
        return this.usuarioEPRepository.findAll();
        // return this.prisma
    }

    async create(usuarioEP: CriaUsuarioEPDto): Promise<UsuarioEP> {
        return this.usuarioEPRepository.create(usuarioEP)
    }
    // create(usuarioEP: UsuarioEP): Promise<UsuarioEP> {
    // create(usuarioEP: any) {
    //     return this.prisma.usuarioEP.create({
    //         data: usuarioEP as any,
    //         include: {
    //             modulo: true,
    //             parceiro: true,
    //             turma: true
    //         }
    //     })
    // }

    async update(id: number, data: CriaUsuarioEPDto): Promise<void> {
        await this.usuarioEPRepository.update(id, data)
    }

    async delete(id: number): Promise<void> {
        await this.usuarioEPRepository.delete(id)
    }
}