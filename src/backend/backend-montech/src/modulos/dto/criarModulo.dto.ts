import { Iniciativa } from "@prisma/client";

export class CriaModuloDto {
    nomeModulo: string;
    descricao: string;
    competencias: string[]
    iniciativas?: Iniciativa[]
  }