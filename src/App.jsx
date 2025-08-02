import './App.css'
import Header from './components/Header'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom"
import pages from './pages'
import pathMapping from './utils/pathMapping'

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
      {pathMapping()}

    </>
  )
}

export default App
