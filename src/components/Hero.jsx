import React from 'react'
import pages from '../pages'
import { useLocation } from 'react-router-dom'

export default function Hero() {
  const loc = useLocation();

  for(const[_, page] of Object.entries(pages)){
    for(const sub of page.more){
      const fullPath = sub.path ? `${page.path}/${sub.path}` : page.path;
      if(loc.pathname.startsWith(fullPath) && sub.hero){
        return (
          <div className="w-full">
            <img
              src={sub.hero}
              alt={`${sub.name} hero`}
              className="w-full h-[400px] object-cover m-0!"
            />
          </div>
        )
      }
    }
  }
  return null;
}

