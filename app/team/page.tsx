import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Team</h1>
      <ul className="space-y-2">
        <li><Link href="/team/members" className="text-blue-600 hover:underline">Members</Link></li>
        <li><Link href="/team/attributions" className="text-blue-600 hover:underline">Attributions</Link></li>
      </ul>
    </div>
  );
}
