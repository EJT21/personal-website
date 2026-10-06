import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header className="border-b border-slate-200 bg-slate-50">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
                <NavLink to="/" className="text-base font-semibold tracking-tight text-slate-900">
                    Home
                </NavLink>

                <div className="order-3 flex w-full flex-wrap items-center justify-center gap-0.5 md:order-none md:w-auto md:gap-1">
                    <NavLink
                        to="/experience"
                        className="rounded-md px-2 py-2 text-xs text-slate-600 transition hover:bg-slate-200 hover:text-slate-900 sm:px-3 sm:text-sm"
                    >
                        Experience
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className="rounded-md px-2 py-2 text-xs text-slate-600 transition hover:bg-slate-200 hover:text-slate-900 sm:px-3 sm:text-sm"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="rounded-md px-2 py-2 text-xs text-slate-600 transition hover:bg-slate-200 hover:text-slate-900 sm:px-3 sm:text-sm"
                    >
                        Contact
                    </NavLink>
                </div>

                <a
                    href="/resume.pdf"
                    className="order-2 rounded-md border border-slate-300 bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700 md:order-none"
                >
                    Resume
                </a>
            </nav>
        </header>
    );
}

export default Navbar;