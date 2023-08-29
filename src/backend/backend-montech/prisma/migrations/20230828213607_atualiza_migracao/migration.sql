/*
  Warnings:

  - Added the required column `nomeModulo` to the `Modulo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cnpj` to the `Parceiro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `Parceiro` table without a default value. This is not possible if the table is not empty.
  - Made the column `nomeEmpresa` on table `Parceiro` required. This step will fail if there are existing NULL values in that column.
  - Made the column `mercado` on table `Parceiro` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nomeContato` on table `Parceiro` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `nomeTurma` to the `Turma` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Modulo" ADD COLUMN     "nomeModulo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Parceiro" ADD COLUMN     "cnpj" TEXT NOT NULL,
ADD COLUMN     "cpf" TEXT NOT NULL,
ALTER COLUMN "nomeEmpresa" SET NOT NULL,
ALTER COLUMN "mercado" SET NOT NULL,
ALTER COLUMN "nomeContato" SET NOT NULL,
ALTER COLUMN "nota" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Turma" ADD COLUMN     "nomeTurma" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "UsuarioEP" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "hierarquia" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "UsuarioEP_pkey" PRIMARY KEY ("id")
);
