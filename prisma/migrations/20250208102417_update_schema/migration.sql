/*
  Warnings:

  - You are about to drop the column `linkUrl` on the `Banner` table. All the data in the column will be lost.
  - Added the required column `adTitle` to the `Banner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Banner` DROP COLUMN `linkUrl`,
    ADD COLUMN `adTitle` VARCHAR(191) NOT NULL,
    ADD COLUMN `detailUrl` VARCHAR(191) NULL;
