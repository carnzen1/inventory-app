type Row = {
  id: string;
  sku: string;
  name: string;
  onHand: number;
  minStock: number;
};

export function LowStockTable({ data }: { data: Row[] }) {
  return (
    <table className="min-w-full bg-white shadow">
      <thead>
        <tr>
          <th className="p-2 text-left">SKU</th>
          <th className="p-2 text-left">Name</th>
          <th className="p-2">On Hand</th>
          <th className="p-2">Min Stock</th>
          <th className="p-2">Shortage</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="border-t">
            <td className="p-2">{row.sku}</td>
            <td className="p-2">{row.name}</td>
            <td className="p-2 text-center">{row.onHand}</td>
            <td className="p-2 text-center">{row.minStock}</td>
            <td className="p-2 text-center text-red-600 font-semibold">
              {row.minStock - row.onHand}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
