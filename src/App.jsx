import './App.css'
import Header from './components/Header'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom"
import pages from './pages'
// import pathMapping from './utils/pathMapping'
import { Home } from './contents'
import { Navigate } from 'react-router-dom'

// import Home from './contents/index'


// const router = createBrowserRouter(
  // createRoutesFromElements(<Route index element={<h1>myy</h1>} />)
// )

// const router = createBrowserRouter(
  // createRoutesFromElements(<Route index element={s} />)
// )

// const router = createBrowserRouter([{
  // path:'/home',
  // need get from pages
  // element: <Home />,
  // errorElement: <div>oh sorry what are you doing here</div>
// }]);

function App() {

  return (
    // return <RouterProvider path="/home" router={router}/>
    <>
      <Header />

      <Routes basename="/zzu-china">
      
        {/* homepage */}
        <Route index element={< Home /> } />

        {/* i wanna redirect the wrong */}
        <Route path="/" element={<Navigate to="/" replace />} />


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



    </>
  )
}

export default App
