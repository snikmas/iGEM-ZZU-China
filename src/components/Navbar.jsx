// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export default function Navbar() {
  const titles = {
    Home: { link: "/", subitems: [] },
    Team: {
      subitems: [
        { label: "Members", link: "members" },
        { label: "Attributions", link: "attributions" },
      ],
    },
    Project: {
      subitems: [
        { label: "Description", link: "description" },
        { label: "Engineering", link: "engineering" },
        { label: "Results", link: "results" },
        { label: "Contribution", link: "contribution" },
        { label: "Development", link: "development" },
      ],
    },
    "Wet Lab": {
      subitems: [
        { label: "Experiments", link: "experiments" },
        { label: "Notebook", link: "notebook" },
        { label: "Parts", link: "parts" },
        { label: "Safety", link: "safety" },
      ],
    },
    "Dry Lab": {
      subitems: [
        { label: "Model", link: "model" },
        { label: "Software", link: "software" },
        { label: "Hardware", link: "hardware" },
      ],
    },
    Education: { link: "/education", subitems: [] },
    "Human Practice": {
      subitems: [
        { label: "Integrated Human Practices", link: "integrated-human-practices" },
        { label: "Entrepreneurship", link: "entrepreneurship" },
        { label: "Cooperation", link: "cooperation" },
      ],
    },
  };

  function Subnav(items, parentPath) {
    return (
      <ul className="absolute bg-white shadow-lg rounded-md min-w-[160px]    group-hover:flex flex-col mt-0 z-50 ml-0! p-2! hidden">
        {items.map(({ label, link }, i) => (
          <li key={i}>
            <Link
              to={`${parentPath}${link.startsWith("/") ? "" : "/"}${link}`}
              className="block px-2 py-2 rounded hover:bg-[#c0d0d6] hover:text-[#1a3c6d] transition-colors duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  function renderNavbar(data) {
    return Object.entries(data).map(([title, { link, subitems }]) => (
      <li key={title} className="relative group text-base font-semibold text-[#2c3e50] hover:text-[#1a3c6d]">
        {subitems.length > 0 ? (
          <span className="flex items-center cursor-default">
            {title}
            <assets.ChevronDownIcon className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180 duration-200" />
          </span>
        ) : (
          <Link to={link} className="transition-colors duration-200">{title}</Link>
        )}
        {subitems.length > 0 && Subnav(subitems, `/${title.toLowerCase().replace(/\s/g, "-")}`)}
      </li>
    ));
  }

  return (
    <nav className="h-full">
      <ul className="flex gap-6 items-center h-full">{renderNavbar(titles)}</ul>
    </nav>
  );
}
