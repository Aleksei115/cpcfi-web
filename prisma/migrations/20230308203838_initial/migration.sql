-- CreateTable
CREATE TABLE "testimonie_aux" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(25) NOT NULL,
    "description" VARCHAR(600) NOT NULL,
    "testimonie_img" TEXT,
    "generation_id" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "testimonie_aux_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prospect_sponsor" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "prospect_sponsor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "testimonie_aux_name_key" ON "testimonie_aux"("name");

-- CreateIndex
CREATE UNIQUE INDEX "prospect_sponsor_email_key" ON "prospect_sponsor"("email");
