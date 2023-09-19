-- CreateTable
CREATE TABLE "_FollowsRelation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FollowsRelation_AB_unique" ON "_FollowsRelation"("A", "B");

-- CreateIndex
CREATE INDEX "_FollowsRelation_B_index" ON "_FollowsRelation"("B");

-- AddForeignKey
ALTER TABLE "_FollowsRelation" ADD CONSTRAINT "_FollowsRelation_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowsRelation" ADD CONSTRAINT "_FollowsRelation_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
