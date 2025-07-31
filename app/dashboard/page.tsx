import { getLowStock } from "@/lib/shortage";
import { LowStockTable } from "@/components/LowStockTable";

export default async function Dashboard() {
  const lowStock = await getLowStock();
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Low‑Stock Dashboard</h1>
      <LowStockTable data={lowStock} />
    </>
  );
}
