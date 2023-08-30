import { Modulo } from "@prisma/client";
import { Parceiro } from "@prisma/client";
import { Turma } from "@prisma/client"

export interface Iniciativa {
  createdAt: Date;
  updatedAt: Date;
  modulo: Modulo;
  moduloId: number;
  parceiro: Parceiro;
  parceiroId: number;
  problema: string;
  escopo: string;
  mvp: string[];
  tema: string;
  turma?: Turma;
  turmaId?: number;
}