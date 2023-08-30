import { Modulo, Parceiro, Turma } from "@prisma/client";

export class CriaIniciativaDto {
  moduloId: number;
  parceiroId: number;
  problema: string;
  escopo: string;
  mvp: string[];
  tema: string;
  turmaId?: number;
}