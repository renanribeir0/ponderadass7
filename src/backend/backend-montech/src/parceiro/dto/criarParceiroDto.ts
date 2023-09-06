import { Parceiro } from "@prisma/client";

export class CriaParceiroDto {
    nomeEmpresa: String;
    mercado: String;
    senha: String;
    cnpj: String;
    nomeContato: String;
    cpf: String;
    email: String;
    telefone: String;
    nota: number;
}