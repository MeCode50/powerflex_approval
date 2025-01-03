/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phoneNumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[bvn]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bankStatement` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `businessHouseNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `businessName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `businessRole` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bvn` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyRegDoc` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lga` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `streetAddress` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `town` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - The required column `userid` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `utilityBill` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `validId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_username_key` ON `User`;

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `username`,
    ADD COLUMN `bankStatement` VARCHAR(191) NOT NULL,
    ADD COLUMN `businessHouseNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `businessName` VARCHAR(191) NOT NULL,
    ADD COLUMN `businessRole` VARCHAR(191) NOT NULL,
    ADD COLUMN `bvn` VARCHAR(191) NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `companyRegDoc` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `landmark` VARCHAR(191) NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL,
    ADD COLUMN `lga` VARCHAR(191) NOT NULL,
    ADD COLUMN `nearestBusStop` VARCHAR(191) NULL,
    ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `referralSource` VARCHAR(191) NULL,
    ADD COLUMN `state` VARCHAR(191) NOT NULL,
    ADD COLUMN `streetAddress` VARCHAR(191) NOT NULL,
    ADD COLUMN `town` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `userid` VARCHAR(191) NOT NULL,
    ADD COLUMN `utilityBill` VARCHAR(191) NOT NULL,
    ADD COLUMN `validId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`userid`);

-- CreateIndex
CREATE UNIQUE INDEX `User_phoneNumber_key` ON `User`(`phoneNumber`);

-- CreateIndex
CREATE UNIQUE INDEX `User_bvn_key` ON `User`(`bvn`);

-- CreateIndex
CREATE INDEX `User_businessName_idx` ON `User`(`businessName`);

-- CreateIndex
CREATE INDEX `User_city_idx` ON `User`(`city`);

-- CreateIndex
CREATE INDEX `User_state_idx` ON `User`(`state`);
