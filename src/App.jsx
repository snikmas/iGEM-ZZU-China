import './App.css'
import Header from './components/Header'
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>myy</h1>} />)
)

function App() {

  return (
    // return <RouterProvider/>
    <>
      <Header />

      <Routes>
      {/* later can create loop to create all small routes */}

        <Route path="/" element={''} />
        <Route path="/" element={''} />
      </Routes>

    </>
  )
}

export default App
