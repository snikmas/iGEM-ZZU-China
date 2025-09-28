import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Wetlab</h1>
      <ul className="space-y-2">
        <li><Link href="/wetlab/experiments" className="text-blue-600 hover:underline">Experiments</Link></li>
        <li><Link href="/wetlab/results" className="text-blue-600 hover:underline">Results</Link></li>
        <li><Link href="/wetlab/notes" className="text-blue-600 hover:underline">Notes</Link></li>
        <li><Link href="/wetlab/parts" className="text-blue-600 hover:underline">Parts</Link></li>
        <li><Link href="/wetlab/safety" className="text-blue-600 hover:underline">Safety</Link></li>
      </ul>
    </div>
  );
}
