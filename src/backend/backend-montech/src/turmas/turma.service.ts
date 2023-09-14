import { Injectable } from "@nestjs/common";
import { TurmaRepository } from "./turma.repository";
import { Turma } from "@prisma/client";
import { CriaTurmaDto } from "./dto/criarTurma.dto";

@Injectable()
export class TurmasService {
    constructor(private turmaRepository: TurmaRepository) {}

    async findById(id: number): Promise<Turma>{
        return this.turmaRepository.findById(id);
    }

    async findAll(): Promise<Turma[]>{
        return this.turmaRepository.findAll();
    }
    
    async create(turma: CriaTurmaDto): Promise<Turma>{
        return this.turmaRepository.create(turma);
    }
    async update(id: number, data: CriaTurmaDto): Promise<void> {
        await this.turmaRepository.update(id, data);
    }

    async delete (id: number): Promise<void>{
        await this.turmaRepository.delete(id);
    }

}