/*
  Warnings:

  - Made the column `landmark` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nearestBusStop` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `referralSource` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `landmark` VARCHAR(191) NOT NULL,
    MODIFY `nearestBusStop` VARCHAR(191) NOT NULL,
    MODIFY `referralSource` VARCHAR(191) NOT NULL;
