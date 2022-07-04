/*
  Warnings:

  - The primary key for the `classifications` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "modules" DROP CONSTRAINT "modules_classificationId_fkey";

-- AlterTable
ALTER TABLE "classifications" DROP CONSTRAINT "classifications_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "classifications_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "classifications_id_seq";

-- AlterTable
ALTER TABLE "modules" ALTER COLUMN "classificationId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "modules" ADD CONSTRAINT "modules_classificationId_fkey" FOREIGN KEY ("classificationId") REFERENCES "classifications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
