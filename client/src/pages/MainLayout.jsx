import { Outlet } from "react-router-dom"
import NavbarComponent from "../components/NavbarComponent"

const MainLayout = () => {
    return (
        <>
        <NavbarComponent/>
        <Outlet/>
        </>
    )
}

export default MainLayout