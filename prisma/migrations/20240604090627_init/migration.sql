-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT,
    "slug" TEXT NOT NULL DEFAULT '/',
    "subdomain" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);
