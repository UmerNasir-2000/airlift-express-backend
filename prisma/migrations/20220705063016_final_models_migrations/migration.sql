/*
  Warnings:

  - The primary key for the `modules` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `product_images` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `product_variants` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `sub_categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `dummy` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_moduleId_fkey";

-- DropForeignKey
ALTER TABLE "product_images" DROP CONSTRAINT "product_images_productVariantId_fkey";

-- DropForeignKey
ALTER TABLE "product_variants" DROP CONSTRAINT "product_variants_productId_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_subCategoryId_fkey";

-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "moduleId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "modules" DROP CONSTRAINT "modules_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "modules_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "modules_id_seq";

-- AlterTable
ALTER TABLE "product_images" DROP CONSTRAINT "product_images_pkey",
ALTER COLUMN "productVariantId" SET DATA TYPE TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "product_images_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "product_images_id_seq";

-- AlterTable
ALTER TABLE "product_variants" DROP CONSTRAINT "product_variants_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "productId" SET DATA TYPE TEXT,
ADD CONSTRAINT "product_variants_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "product_variants_id_seq";

-- AlterTable
ALTER TABLE "products" DROP CONSTRAINT "products_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "subCategoryId" SET DATA TYPE TEXT,
ADD CONSTRAINT "products_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "products_id_seq";

-- AlterTable
ALTER TABLE "sub_categories" DROP CONSTRAINT "sub_categories_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "sub_categories_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "sub_categories_id_seq";

-- DropTable
DROP TABLE "dummy";

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "sub_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_variants" ADD CONSTRAINT "product_variants_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_images" ADD CONSTRAINT "product_images_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "product_variants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
