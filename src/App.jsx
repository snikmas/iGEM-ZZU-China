import './App.css'
import Header from './components/Header'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom"
import pages from './pages'
// import pathMapping from './utils/pathMapping'
import { Home } from './contents'
import { Navigate } from 'react-router-dom'
import SideNavbar from './components/SideNavbar'

function App() {

  return (
    // return <RouterProvider path="/home" router={router}/>
    <>
    <div className="fullSite flex flex-col gap-20">

      <Header />
      <div className='screen flex px-30 gap-30 text-base leading-relaxed'>
        < SideNavbar />


        <Routes>
      
        {/* i wanna redirect to home */}
        <Route path="/" element={<Navigate to="/home" replace />} />


        { Object.entries(pages).map(([key, page]) => {
          const {path, more} = page;
          
          // no subnav
          if(more.length === 1 && !more[0].path) {
            
            const Component = more[0].Component
            console.log(Component)
            
            return (
              <Route 
              key={more[0].title} 
              path={path} 
              element={< Component />} 
              />)
            }
            
            // If there are multiple subpages (nested routing)
            return (
              more.map((sub) => {
                const SubComponent = sub.Component;
                return (
                  <Route 
                  key={path} 
                  path={`${path.replace(/^\//, '')}/${sub.path}`}
                  element={<SubComponent />}
                  />)
                }))
              })}  

      <Route path="*" element={<>opps, there's notihng</>}/>
        </Routes>



      </div>
      </div>
    </>
  )
}

export default App
