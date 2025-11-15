-- CreateEnum
CREATE TYPE "DocumentStatus" AS ENUM ('DRAFT', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');

-- AlterTable
ALTER TABLE "documents" ALTER COLUMN "document_status" TYPE "DocumentStatus" USING ("document_status"::text::"DocumentStatus");
ALTER TABLE "documents" ALTER COLUMN "document_status" SET DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE "documents_products" 
  ALTER COLUMN "document_id" TYPE VARCHAR(255) USING ("document_id"::text),
  ALTER COLUMN "product_id" TYPE VARCHAR(255) USING ("product_id"::text),
  ADD COLUMN "quantity_actual" INTEGER DEFAULT 0;

-- AlterTable
ALTER TABLE "scan_events"
  DROP COLUMN IF EXISTS "device_id",
  DROP COLUMN IF EXISTS "quantity_delta",
  DROP COLUMN IF EXISTS "synced",
  ALTER COLUMN "scan_event_id" TYPE VARCHAR(255) USING ("scan_event_id"::text),
  ALTER COLUMN "document_id" TYPE VARCHAR(255) USING ("document_id"::text),
  ALTER COLUMN "product_id" TYPE VARCHAR(255) USING ("product_id"::text),
  ALTER COLUMN "user_id" TYPE VARCHAR(255) USING ("user_id"::text),
  ADD COLUMN "quantity" INTEGER DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX "products_barcode_key" ON "products"("barcode");

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("organization_id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "documents" ADD CONSTRAINT "documents_warehouse_id_fkey" FOREIGN KEY ("warehouse_id") REFERENCES "warehouses"("warehouse_id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "documents" ADD CONSTRAINT "documents_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents_products" ADD CONSTRAINT "documents_products_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "documents"("document_id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "documents_products" ADD CONSTRAINT "documents_products_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scan_events" ADD CONSTRAINT "scan_events_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "documents"("document_id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "scan_events" ADD CONSTRAINT "scan_events_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "scan_events" ADD CONSTRAINT "scan_events_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

