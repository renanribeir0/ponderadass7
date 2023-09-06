import { Parceiro } from "@prisma/client";

export class CriaParceiroDto {
    nomeEmpresa: String;
    mercado: String;
    nomeContato: String;
    email: String;
    telefone: String;
    nota: number;
}