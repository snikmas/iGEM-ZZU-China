import React from 'react'

function SideNavbar({ props }) {
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      let coord = el.getBoundingClientRect();
      window.scrollTo({ top: window.scrollY + coord.top - 90, left: 0, behavior: "smooth" });
    }
  }

  function renderSections() {
    return Object.entries(props).map(([key, value], index) => {
      return (
    <a
      key={key}
      onClick={() => scrollToSection(key)}
      className="
        px-5 py-2
        rounded-md
        transition duration-200 ease-in-out
        hover:bg-[#c0d0d6]   /* slightly darker than #D2E0E4 */
        hover:text-gray-900
        cursor-pointer
      "
    >
  {index + 1}. {value}
</a>

      )
    })
  }

  return (
    <div
      className="bg-[#d2e0e4b4] px-4 py-5 
        rounded-lg 
        w-64 
        h-fit 
        sticky top-30 self-start
      "
    >
      <div className="flex flex-col gap-2 text-base">
        {renderSections()}
      </div>
    </div>
  )
}

export default SideNavbar
