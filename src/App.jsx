import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import { Route, Routes } from "react-router-dom"
import pages from './pages'
// import pathMapping from './utils/pathMapping'
import { Home} from './contents'
import { Navigate } from 'react-router-dom'
import SideNavbar from './components/SideNavbar'

function App() {

  return (
    <>
    <div className="fullSite flex flex-col gap-0">
      <Header />
      <Hero />
      <div className="screen flex flex-col px-20 text-base leading-relaxed mt-10">

        <Routes>
        {/* i wanna redirect to home */}
        <Route path="/" element={<Navigate to="/home" replace />} />


        { Object.entries(pages).map(([key, page]) => {
          const {path, more} = page;
          const contents = more.contents || null;
        
          
        { contents && <SideNavbar contents={contents}/>}

        
          // no subnav
          if(more.length === 1 && !more[0].path) {            
            const Component = more[0].Component
            const contents = more[0].contents || null
            
            return (
              <Route
                key={more[0].title}
                path={path}
                element={
                  <div>
                  {contents && <SideNavbar contents={contents} />}
                    <div >
                      <Component contents={contents}/>
                    </div>
                  </div>}/> )
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
                  <div className="flex gap-10 w-full">
                  {contents && <SideNavbar props={sub.contents} />}
                    <div className='flex-1'>
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
