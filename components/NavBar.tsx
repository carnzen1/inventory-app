import Link from "next/link";

export function NavBar() {
  return (
    <nav className="bg-white shadow mb-6">
      <ul className="flex gap-4 p-4">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/assembly">Build</Link></li>
        <li><Link href="/shipments">Ship</Link></li>
        <li><Link href="/parts">Parts</Link></li>
        <li><Link href="/bom">BOMs</Link></li>
      </ul>
    </nav>
  );
}
