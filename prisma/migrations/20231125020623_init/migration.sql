-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefones" JSONB NOT NULL,
    "data_de_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ultimo_login" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_de_atualizacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
