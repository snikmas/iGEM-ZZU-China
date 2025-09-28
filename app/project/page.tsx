import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Project</h1>
      <ul className="space-y-2">
        <li><Link href="/project/description" className="text-blue-600 hover:underline">Description</Link></li>
        <li><Link href="/project/engineering" className="text-blue-600 hover:underline">Engineering</Link></li>
        <li><Link href="/project/contribution" className="text-blue-600 hover:underline">Contribution</Link></li>
        <li><Link href="/project/development" className="text-blue-600 hover:underline">Development</Link></li>
      </ul>
    </div>
  );
}
