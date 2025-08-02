import { Outlet } from "react-router-dom"
import Navbar from "./components/static/Navbar"
import Footer from "./components/static/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
