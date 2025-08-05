  import React from 'react'

  function SideNavbar({props}) {

    function scrollToSection(id){
      const el = document.getElementById(id);
      console.log(el)
      if(el){
        let coord = el.getBoundingClientRect();
        console.log(coord)
        window.scrollTo(0, coord.top - 90)
      }
    }

    function renderSections() {
      return Object.entries(props).map(([key, value]) => {
        return <h6 className='render' key={key} onClick={() => scrollToSection(key)}>{value}</h6>
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