-- CreateTable
CREATE TABLE "Parceiro" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nomeEmpresa" TEXT,
    "mercado" TEXT,
    "nomeContato" TEXT,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,
    "importancia" TEXT NOT NULL,

    CONSTRAINT "Parceiro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Iniciativa" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "moduloId" INTEGER,
    "parceiroId" INTEGER,
    "problema" TEXT,
    "escopo" TEXT,
    "mvp" TEXT NOT NULL,
    "tema" TEXT NOT NULL,
    "turmaId" INTEGER NOT NULL,

    CONSTRAINT "Iniciativa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modulo" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT,
    "competencias" TEXT[],

    CONSTRAINT "Modulo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turma" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Turma_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Parceiro_email_key" ON "Parceiro"("email");

-- AddForeignKey
ALTER TABLE "Iniciativa" ADD CONSTRAINT "Iniciativa_moduloId_fkey" FOREIGN KEY ("moduloId") REFERENCES "Modulo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Iniciativa" ADD CONSTRAINT "Iniciativa_parceiroId_fkey" FOREIGN KEY ("parceiroId") REFERENCES "Parceiro"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Iniciativa" ADD CONSTRAINT "Iniciativa_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
