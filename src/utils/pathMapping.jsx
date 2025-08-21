import pages from "../pages";
import React from 'react'
import { Routes, Route } from 'react-router-dom'


function pathMapping() {


  return (
  <Routes basename="/zzu-china">
    { Object.entries(pages).map(([key, page]) => {
      const {path, more} = page;


      // no subnav
      if(more.length === 1) {
        return (<Route key={more[0].title} path={path} element={<more.Component />} />)
      }

      // its a subnav
      return (more.map((sub) => {
        return (<Route key={sub.title} path={path + sub.path} element={<sub.Component/>} />)
      })) 
    })}
  </Routes>)
}

export default pathMapping