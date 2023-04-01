/*
  Warnings:

  - You are about to alter the column `id` on the `Todo` table. The data in that column will be cast from `BigInt` to `String`. This cast may fail. Please make sure the data in the column can be cast.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_Todo" (
    "id" STRING NOT NULL,
    "todo" STRING NOT NULL,
    "date" STRING NOT NULL,
    "time" STRING NOT NULL,
    "userId" STRING NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
DROP INDEX "Todo_userId_idx";
INSERT INTO "_prisma_new_Todo" ("date","id","time","todo","userId") SELECT "date","id","time","todo","userId" FROM "Todo";
DROP TABLE "Todo" CASCADE;
ALTER TABLE "_prisma_new_Todo" RENAME TO "Todo";
CREATE INDEX "Todo_userId_idx" ON "Todo"("userId");
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
