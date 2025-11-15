-- AlterTable
ALTER TABLE "warehouses" ADD COLUMN "qr_token" VARCHAR(255),
ADD COLUMN "qr_token_expires_in" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "warehouses_qr_token_key" ON "warehouses"("qr_token");

