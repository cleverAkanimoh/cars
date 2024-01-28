-- AlterTable
ALTER TABLE "User" ADD COLUMN "role" TEXT;

-- CreateTable
CREATE TABLE "UserInfo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "bio" TEXT,
    "joined" DATETIME NOT NULL,
    "modified" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "UserInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
