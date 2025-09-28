import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Human Practice</h1>
      <ul className="space-y-2">
        <li><Link href="/human-practice/ihp" className="text-blue-600 hover:underline">IHP</Link></li>
        <li><Link href="/human-practice/entrepreneurship" className="text-blue-600 hover:underline">Entrepreneurship</Link></li>
        <li><Link href="/human-practice/collaborations" className="text-blue-600 hover:underline">Collaborations</Link></li>
      </ul>
    </div>
  );
}
