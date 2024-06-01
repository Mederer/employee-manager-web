import { Link, Outlet } from "react-router-dom";

function Layout() {

    return (
        <div className="w-3/4 mx-auto pt-4">
            <header className="flex justify-between items-center">
                <h1 className="font-bold transition-all text-2xl hover:skew-x-12 hover:rotate-6 inline">
                    Employee Manager
                </h1>
                <nav>
                    <ul className="flex justify-center space-x-4">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/employees">View Employees</Link>
                        </li>
                        <li>
                            <Link to="/employees/create">Create Employee</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="w-1/2 mx-auto mt-8">
                <Outlet />
            </main>
            <footer>
            </footer>
        </div>
    )
}

export default Layout;