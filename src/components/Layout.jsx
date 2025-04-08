import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;