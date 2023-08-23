/*
  Warnings:

  - You are about to drop the column `importancia` on the `Parceiro` table. All the data in the column will be lost.
  - Made the column `moduloId` on table `Iniciativa` required. This step will fail if there are existing NULL values in that column.
  - Made the column `parceiroId` on table `Iniciativa` required. This step will fail if there are existing NULL values in that column.
  - Made the column `problema` on table `Iniciativa` required. This step will fail if there are existing NULL values in that column.
  - Made the column `escopo` on table `Iniciativa` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Iniciativa" DROP CONSTRAINT "Iniciativa_moduloId_fkey";

-- DropForeignKey
ALTER TABLE "Iniciativa" DROP CONSTRAINT "Iniciativa_parceiroId_fkey";

-- DropForeignKey
ALTER TABLE "Iniciativa" DROP CONSTRAINT "Iniciativa_turmaId_fkey";

-- AlterTable
ALTER TABLE "Iniciativa" ALTER COLUMN "moduloId" SET NOT NULL,
ALTER COLUMN "parceiroId" SET NOT NULL,
ALTER COLUMN "problema" SET NOT NULL,
ALTER COLUMN "escopo" SET NOT NULL,
ALTER COLUMN "turmaId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Parceiro" DROP COLUMN "importancia";

-- AddForeignKey
ALTER TABLE "Iniciativa" ADD CONSTRAINT "Iniciativa_moduloId_fkey" FOREIGN KEY ("moduloId") REFERENCES "Modulo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Iniciativa" ADD CONSTRAINT "Iniciativa_parceiroId_fkey" FOREIGN KEY ("parceiroId") REFERENCES "Parceiro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Iniciativa" ADD CONSTRAINT "Iniciativa_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("id") ON DELETE SET NULL ON UPDATE CASCADE;
