import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Drylab</h1>
      <ul className="space-y-2">
        <li><Link href="/drylab/model" className="text-blue-600 hover:underline">Model</Link></li>
        <li><Link href="/drylab/software" className="text-blue-600 hover:underline">Software</Link></li>
      </ul>
    </div>
  );
}
