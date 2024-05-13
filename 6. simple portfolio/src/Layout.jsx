import { Outlet } from "react-router-dom"
import Header from "./components/header/header/Header"
import Footer from "./components/header/footer/Footer"
function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout