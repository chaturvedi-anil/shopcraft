/*
  Warnings:

  - A unique constraint covering the columns `[createdBy,name]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."Product_createdAt_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Product_createdBy_name_key" ON "Product"("createdBy", "name");
