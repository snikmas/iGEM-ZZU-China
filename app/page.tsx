import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">ZZU-China iGEM Team 2025</h1>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Team</h2>
          <ul className="space-y-2">
            <li><Link href="/team/members" className="text-blue-600 hover:underline">Members</Link></li>
            <li><Link href="/team/attributions" className="text-blue-600 hover:underline">Attributions</Link></li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Project</h2>
          <ul className="space-y-2">
            <li><Link href="/project/description" className="text-blue-600 hover:underline">Description</Link></li>
            <li><Link href="/project/engineering" className="text-blue-600 hover:underline">Engineering</Link></li>
            <li><Link href="/project/contribution" className="text-blue-600 hover:underline">Contribution</Link></li>
            <li><Link href="/project/development" className="text-blue-600 hover:underline">Development</Link></li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Wetlab</h2>
          <ul className="space-y-2">
            <li><Link href="/wetlab/experiments" className="text-blue-600 hover:underline">Experiments</Link></li>
            <li><Link href="/wetlab/results" className="text-blue-600 hover:underline">Results</Link></li>
            <li><Link href="/wetlab/notes" className="text-blue-600 hover:underline">Notes</Link></li>
            <li><Link href="/wetlab/parts" className="text-blue-600 hover:underline">Parts</Link></li>
            <li><Link href="/wetlab/safety" className="text-blue-600 hover:underline">Safety</Link></li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Drylab</h2>
          <ul className="space-y-2">
            <li><Link href="/drylab/model" className="text-blue-600 hover:underline">Model</Link></li>
            <li><Link href="/drylab/software" className="text-blue-600 hover:underline">Software</Link></li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <ul className="space-y-2">
            <li><Link href="/education" className="text-blue-600 hover:underline">Education</Link></li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Human Practice</h2>
          <ul className="space-y-2">
            <li><Link href="/human-practice/ihp" className="text-blue-600 hover:underline">IHP</Link></li>
            <li><Link href="/human-practice/entrepreneurship" className="text-blue-600 hover:underline">Entrepreneurship</Link></li>
            <li><Link href="/human-practice/collaborations" className="text-blue-600 hover:underline">Collaborations</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
