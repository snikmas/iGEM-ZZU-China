  import React from 'react'

  function SideNavbar({props}) {

    function scrollToSection(id){
      const el = document.getElementById(id);
      console.log(el)
      if(el){
        let coord = el.getBoundingClientRect();
        console.log(coord)
        window.scrollTo({top: coord.top - 90, left: 0, behavior: "smooth" })
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