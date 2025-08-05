import React from 'react'

function SideNavbar({props}) {

  console.log(props)


  function renderSections() {
    return Object.entries(props).map(([key, value]) => {
      return <a key={key} href={`#${key}`}>{value}</a>
    })
  }


  return (
    <div className='sideNavbar'>
      <h4>Contents</h4>
      <div className='sideNavbarContents'>
        { renderSections() }
      </div>
    </div>
  )
}

export default SideNavbar