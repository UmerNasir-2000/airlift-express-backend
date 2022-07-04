/*
  Warnings:

  - The primary key for the `dummy` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "dummy" DROP CONSTRAINT "dummy_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "dummy_pkey" PRIMARY KEY ("id");
