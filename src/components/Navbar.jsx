import { Link } from "react-router-dom"
import { assets } from "../assets/assets.jsx"
import { Attributions } from "../contents/Attributions.jsx";

export default function Navbar(){

  const titles = {
    "Home": {
      link: '/', 
      subitems: []
    },
    "Team": {
      subitems: [
        {label: "Members", link: 'members'},
        {label: "Attributions", link: 'attributions'}
      ],
    },
    "Project": {
      subitems: [
        {label: "Description", link: 'description'},
        {label: "Engineering", link: 'engineering'},
        {label: "Results", link: 'results'},
        {label: "Contribution", link: 'contribution'},
        {label: "Development", link: 'development'}]
      },
      "Wet Lab": {
        subitems: [
          {label: "Experiments", link: 'experiments'},
          {label: "Notebook", link: 'notebook'},
          {label: "Parts", link:'parts'},
          {label: "Safety", link: 'safety'}
        ]
      },
      "Dry Lab": {
        subitems: [
          {label: "Model", link: 'model'},
          {label: "Software", link: 'software'},
          {label: "Hardware", link: 'hardware'}
        ]
      },
      "Education": {
        link: '/education',
        subitems: []
      },
      "Human Practice":{
        link: '/human-practice',
        subitems: [
          {label: "Integrated Human Practices", link: "integrated-human-practices"},
          {label: "Entrepreneurship", link: "entrepreneurship"},
          {label: "Cooperation", link: "cooperation"}
        ]
      }
    }
  
    function Subnav(items, parentPath){
      return (
        <ul className='list-none! hidden group-hover:flex absolute left-0 top-full bg-[#d2e0e4] flex-col gap-1.5 rounded-b-xl border-b border-[#D1D5DB] shadow-lg min-w-[150px] m-0! p-4!'>
          {items.map(({ label, link: subPath}, index) => 
            (<li key={index}>
              <Link to={`${parentPath}${subPath.startsWith('/') ? '' : '/'}${subPath}`} className='hover:text-[#1a3c6d] transition-colors duration-200 p-1 rounded-md block'>{label}</Link>
            </li>
            ))}
        </ul>
        );
      }
  
    function OutputNavbar( data ){
      return Object.entries(data).map(([title, {link, subitems}]) => (
        <li key={title} className="flex relative group items-center text-lg font-medium text-[#2c3e50] hover:text-[#1a3c6d]">
          { subitems.length > 0 ? (
            <span className="cursor-default transition-colors duration-200 flex items-center">{title}
            <assets.ChevronDownIcon className="w-5 h-5 ml-1 transition-transform group-hover:rotate-180 duration-200" />
            </span>
            ) : (
                <Link to={link} className="transition-colors duration-200">{title}</Link>
            )
          }
  
          {subitems.length > 0 && (
            < >
            {Subnav(subitems, `/${title.toLowerCase().replace(/\s/g, '-')}`)}
            </>
          )}
        </li>
        ))
    }
  
    return (
      <nav>
        <ul className="flex flex-row gap-8 align-middle">
          {OutputNavbar(titles)}
        </ul>
      </nav>
    )
}