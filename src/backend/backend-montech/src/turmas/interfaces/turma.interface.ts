import { Iniciativa } from "@prisma/client";

export interface Turma {
    id: number;
    iniciativas: Iniciativa[];
}