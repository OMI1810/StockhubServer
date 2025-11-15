-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('INBOUND', 'OUTBOUND');

-- AlterTable
ALTER TABLE "documents" ADD COLUMN "document_type" "DocumentType" NOT NULL DEFAULT 'INBOUND';

