import { Link, NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link to="/" className="flex-shrink-0 flex items-center">
                                <span className="text-2xl font-bold text-purple-700">Redux</span>
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            <div className="flex space-x-4">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => isActive ? 'text-purple-700 font-bold' : 'text-gray-700 font-bold'}>Home</NavLink>
                                <NavLink
                                    to="/pokemon"
                                    className={({ isActive }) => isActive ? 'text-purple-700 font-bold' : 'text-gray-700 font-bold'}>Pokemon</NavLink>
                            </div>
                        </div>
                        <div className="flex items-center sm:hidden">
                            {/* <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-purple-700 hover:text-purple-900 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? (
                                    <X className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button> */}
                        </div>
                    </div>
                </div>

                {/* {isMenuOpen && (
                    <div className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <MobileNavLink href="/">Home</MobileNavLink>
                            <MobileNavLink href="/about">About</MobileNavLink>
                            <MobileNavLink href="/services">Services</MobileNavLink>
                            <MobileNavLink href="/contact">Contact</MobileNavLink>
                        </div>
                    </div>
                )} */}
            </nav>
            <Outlet />
        </>
    )
}
