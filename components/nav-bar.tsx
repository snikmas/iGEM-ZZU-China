import Link from "next/link";

type MenuItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const menu: MenuItem[] = [
  {
    label: "Team",
    href: "/team",
    children: [
      { label: "Members", href: "/team/members" },
      { label: "Attributions", href: "/team/attributions" },
    ],
  },
  {
    label: "Project",
    href: "/project",
    children: [
      { label: "Description", href: "/project/description" },
      { label: "Engineering", href: "/project/engineering" },
      { label: "Contribution", href: "/project/contribution" },
      { label: "Development", href: "/project/development" },
    ],
  },
  {
    label: "Wetlab",
    href: "/wetlab",
    children: [
      { label: "Experiments", href: "/wetlab/experiments" },
      { label: "Results", href: "/wetlab/results" },
      { label: "Notes", href: "/wetlab/notes" },
      { label: "Parts", href: "/wetlab/parts" },
      { label: "Safety", href: "/wetlab/safety" },
    ],
  },
  {
    label: "Drylab",
    href: "/drylab",
    children: [
      { label: "Model", href: "/drylab/model" },
      { label: "Software", href: "/drylab/software" },
    ],
  },
  {
    label: "Human Practice",
    href: "/human-practice",
    children: [
      { label: "IHP", href: "/human-practice/ihp" },
      { label: "Entrepreneurship", href: "/human-practice/entrepreneurship" },
      { label: "Collaborations", href: "/human-practice/collaborations" },
    ],
  },
];

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full shadow" style={{ backgroundColor: "#69393e" }}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-white font-semibold">ZZU-China</Link>
          <ul className="flex items-center gap-6">
            {menu.map((item) => (
              <li key={item.label} className="relative group">
                <Link
                  href={(item.children && item.children.length > 0) ? item.children[0].href : (item.href || "#")}
                  className="text-white hover:underline"
                >
                  {item.label}
                </Link>
                {item.children && item.children.length > 0 && (
                  <div className="absolute left-0 top-full z-50 hidden min-w-[220px] rounded-md border bg-white p-2 shadow-lg group-hover:block">
                    <ul className="space-y-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded px-3 py-1.5 text-slate-800 hover:bg-slate-100"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
