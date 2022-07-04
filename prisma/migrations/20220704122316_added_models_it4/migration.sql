/*
  Warnings:

  - The primary key for the `product_images` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `product_images` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "product_images" DROP CONSTRAINT "product_images_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "product_images_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "dummy" (
    "id" UUID NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "dummy_pkey" PRIMARY KEY ("id")
);
