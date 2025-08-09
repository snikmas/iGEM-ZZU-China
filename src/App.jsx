import './App.css'
import Header from './components/Header'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom"
import pages from './pages'
// import pathMapping from './utils/pathMapping'
import { Home} from './contents'
import { Navigate } from 'react-router-dom'
import SideNavbar from './components/SideNavbar'

function App() {

  return (
    <>
    <div className="fullSite flex flex-col gap-20">

      <Header />
      <div className='screen flex px-10 gap-25 text-base leading-relaxed'>

        
        <Routes>
      
        {/* i wanna redirect to home */}
        <Route path="/" element={<Navigate to="/home" replace />} />


        { Object.entries(pages).map(([key, page]) => {
          const {path, more} = page;
          const contents = more.contents || null;
        
          
        { contents && <SideNavbar contents={contents} />}

        
          // no subnav
          if(more.length === 1 && !more[0].path) {
            
            const Component = more[0].Component
            const contents = more[0].contents || null
            
            return (
              <Route
                key={more[0].title}
                path={path}
                element={
                  <div className="flex gap-10 w-full">
                  {contents && <SideNavbar contents={contents} />}
                    <div className="flex-1">
                      <Component contents={contents}/>
                    </div>
                  </div>}/>)
            }
            
            // If there are multiple subpages (nested routing)
            return (
              more.map((sub) => {
                const SubComponent = sub.Component;
                const contents = sub.contents || null

                return (
                  <Route 
                  key={path} 
                  path={`${path.replace(/^\//, '')}/${sub.path}`}
                  element={
                  <div>
                  {contents && <SideNavbar props={sub.contents} />}
                    <div className='pl-70'>
                      <SubComponent props={sub.contents} />
                    </div>
                  </div>}
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
