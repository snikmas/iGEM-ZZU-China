import pages from "../pages";
import React from 'react'

function pathMapping() {
  return (<>
    { Object.entries(pages).map(([key, page]) => {
      console.log(path, more)

      const {path, more} = page;


      // no subnav
      if(more.length == 1) {
        console.log(" no subnav!!")
        return (

        <Link key={more[0].title} to={path}> 
          <more.Component /> 
        </Link>)
      } else {
        // its a subnav
        return (more.forEach((sub) => {
          return (
          <Link key={sub.title} to={path + subPath.path}>
            <sub.Component/>
          </Link>
          )
        })) 
      }
      
    }) }
  </>)
}

export default pathMapping