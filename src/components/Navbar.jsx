import { Link } from "react-router-dom"
import { assets } from "../assets/assets.jsx"

export default function Navbar(){

  const titles = {
    "Home": {
      link: '/home',
      subitems:[]
    },
    "Team": {
      link: '/team',
      subitems: [
        {label: "Members", link: '/'},
        {label: "Attributions", link: '/'}
      ],
    },
    "Project": {
      link: '/project', 
      subitems: [
        {label: "Description", link: '/description'},
        {label: "Engineering", link: '/engineering'},
        {label: "Results", link: '/results'}, 
        {label: "Contribution", link: '/contribution'}, 
        {label: "Development", link: '/development'}]
      },
      "Wet Lab": {
        link: '/wetlab',
        subitems: [
          {label: "Experiments", link: '/experiments'}, 
          {label: "Notebook", link: '/notebook'}, 
          {label: "Parts", link:'/parts'}, 
          {label: "Safety", link: '/safety'}
        ]
      },
      "Dry Lab": {
        link: '/drylab',
        subitems: [
          {label: "Model", link: '/model'},
          {label: "Software", link: '/software'}, 
          {label: "Hardware", link: '/hardware'}
        ]
      },
      "Education": {
        link: '/education',
        subitems: []
      },
      "Human Practice":{
        link: '/human-practice',
        subitems: [
          {label: "Integrated Human Practices", link: "/integrated-human-practices"},
          {label: "Entrepreneurship", link: "/entrepreneurship"},
          {label: "Cooperation", link: "/cooperation"}
        ]
      }
    }
  

  function Subnav(items){
    return (
      <ul className='absolute left-0 top-full pt-7 hidden group-hover:flex bg-header flex-col gap-1.5 p-4 rounded-b-xl border-b-2 border-slate-300 shadow-lg min-w-[150px] z-50'>
        {items.map(({ label, link}, index) => 
          (<li key={index}>
            <Link to={link} className=' hover:text-slate-600 transition-colors duration-200'>{label}</Link>
          </li>
          ))}
      </ul>
      );
    }


  function OutputNavbar( data ){
    return Object.entries(data).map(([title, {link, subitems}]) => (
      <li key={title} className="flex relative group">
        <Link to={link} className=" hover:text-slate-600 transition-colors duration-200">{title}</Link>
        { subitems.length > 0 && 
        <>
          {Subnav(subitems)}
          { < assets.ChevronDownIcon className="w-6 ml-1.5" />}
        </>}
      </li>
      ));
  }


  return (
    <nav>
      <ul className="flex flex-row gap-8 align-middle text-lg">
        {OutputNavbar(titles)}
      </ul>
    </nav>
  )
}