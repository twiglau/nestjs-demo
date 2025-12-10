-- CreateTable
CREATE TABLE "policies" (
    "id" SERIAL NOT NULL,
    "type" INTEGER NOT NULL,
    "effect" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "fields" JSONB,
    "conditions" JSONB,
    "args" JSONB,
    "encode" TEXT NOT NULL,

    CONSTRAINT "policies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role_policies" (
    "roleId" INTEGER NOT NULL,
    "policyId" INTEGER NOT NULL,

    CONSTRAINT "role_policies_pkey" PRIMARY KEY ("roleId","policyId")
);

-- CreateTable
CREATE TABLE "permission_policies" (
    "permissionId" INTEGER NOT NULL,
    "policyId" INTEGER NOT NULL,

    CONSTRAINT "permission_policies_pkey" PRIMARY KEY ("permissionId","policyId")
);

-- CreateTable
CREATE TABLE "menus" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "component" TEXT,
    "redirect" TEXT,
    "fullPath" TEXT,
    "alias" TEXT,
    "status" INTEGER NOT NULL DEFAULT 1,
    "parent_id" INTEGER,
    "meta_id" INTEGER,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "menus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menu_meta" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "layout" TEXT,
    "order" INTEGER DEFAULT 100,
    "hidden" BOOLEAN NOT NULL DEFAULT false,
    "disabled" BOOLEAN NOT NULL DEFAULT false,
    "icon" TEXT,
    "status" INTEGER NOT NULL DEFAULT 1,
    "menu_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "menu_meta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role_menus" (
    "role_id" INTEGER NOT NULL,
    "menu_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "role_menus_pkey" PRIMARY KEY ("role_id","menu_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "policies_encode_key" ON "policies"("encode");

-- CreateIndex
CREATE UNIQUE INDEX "menus_name_key" ON "menus"("name");

-- CreateIndex
CREATE UNIQUE INDEX "menus_meta_id_key" ON "menus"("meta_id");

-- CreateIndex
CREATE UNIQUE INDEX "menu_meta_menu_id_key" ON "menu_meta"("menu_id");

-- AddForeignKey
ALTER TABLE "role_policies" ADD CONSTRAINT "role_policies_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_policies" ADD CONSTRAINT "role_policies_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "policies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permission_policies" ADD CONSTRAINT "permission_policies_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permission_policies" ADD CONSTRAINT "permission_policies_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "policies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menus" ADD CONSTRAINT "menus_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "menus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_meta" ADD CONSTRAINT "menu_meta_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "menus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_menus" ADD CONSTRAINT "role_menus_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_menus" ADD CONSTRAINT "role_menus_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "menus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
