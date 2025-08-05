import { Link } from "react-router-dom"
import { assets } from "../assets/assets.jsx"
import { Attributions } from "../contents/Attributions.jsx";

export default function Navbar(){

  const titles = {
    "Home": {
      link: '/home',
      subitems:[]
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
        <ul className='absolute left-0 top-full pt-7 hidden group-hover:flex bg-header flex-col gap-1.5 p-4 rounded-b-xl border-b-2 border-slate-300 shadow-lg min-w-[150px] z-50'>
          {items.map(({ label, link: subPath}, index) => 
            (<li key={index}>
              <Link to={`${parentPath}${subPath.startsWith('/') ? '' : '/'}${subPath}`} className=' hover:text-slate-600 transition-colors duration-200'>{label}</Link>
            </li>
            ))}
        </ul>
        );
      }


  function OutputNavbar( data ){
    return Object.entries(data).map(([title, {link, subitems}]) => (
      <li key={title} className="flex relative group items-center">
        { subitems.length > 0 ? (
          // not clickable, doesnt have subnav
          <span className="cursor-default hover:text-slate-600 transition-colors duration-200 flex items-center">{title}
          <assets.ChevronDownIcon className="w-5 h-5 ml-1" />
          </span>
          ) : (
            // clickable, has subnav
            <Link to={link} className="hover:text-slate-600 transition-colors duration-200">{title}</Link>
          )
        }

        {subitems.length > 0 && (
          <>
          {Subnav(subitems, `/${title.toLowerCase().replace(/\s/g, '-')}`)}
          </>
        )}
      </li>
      ))
 }


  return (
    <nav>
      <ul className="flex flex-row gap-8 align-middle text-lg">
        {OutputNavbar(titles)}
      </ul>
    </nav>
  )
}