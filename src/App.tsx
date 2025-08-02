import { Outlet } from "react-router-dom"
import Navbar from "./components/static/Navbar"
import Footer from "./components/static/Footer"
import { ToastProvider } from "./components/providers/toast-provider"

function App() {
  return (
    <>
      <ToastProvider />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
