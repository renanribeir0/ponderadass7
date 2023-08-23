import { Modulo, Parceiro, Turma } from "@prisma/client";

export class CriaIniciativaDto {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  modulo: Modulo;
  moduloId: number;
  parceiro: Parceiro;
  parceiroId: number;
  problema: string;
  escopo: string;
  mvp: string;
  tema: string;
  turma?: Turma;
  turmaId?: number;
}