import { prisma } from "./prisma";

export async function getLowStock() {
  return prisma.part.findMany({
    where: {
      onHand: { lt: { minStock: true } },
    },
    select: {
      id: true,
      sku: true,
      name: true,
      onHand: true,
      minStock: true,
    },
  });
}
