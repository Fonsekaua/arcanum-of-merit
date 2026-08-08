-- CreateEnum
CREATE TYPE "role" AS ENUM ('teacher', 'student');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "avatar" TEXT,
    "role" "role" NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(300) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "house_id" INTEGER NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "houses" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "banner" VARCHAR(300) NOT NULL,
    "describle" TEXT NOT NULL,

    CONSTRAINT "houses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "earningpoints" (
    "id" SERIAL NOT NULL,
    "points" INTEGER NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "earningpoints_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "losspoints" (
    "id" SERIAL NOT NULL,
    "points" INTEGER NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "losspoints_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "fk_users_house" FOREIGN KEY ("house_id") REFERENCES "houses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "earningpoints" ADD CONSTRAINT "earningpoints_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "losspoints" ADD CONSTRAINT "losspoints_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
