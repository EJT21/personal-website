import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header className="border-b border-slate-200 bg-slate-50">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
                <NavLink to="/" className="text-base font-semibold tracking-tight text-slate-900">
                    Home
                </NavLink>

                <div className="hidden items-center gap-1 md:flex">
                    <NavLink
                        to="/about"
                        className="rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/skills"
                        className="rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
                    >
                        Skills
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
                    >
                        Contact
                    </NavLink>
                </div>

                <a
                    href="/resume.pdf"
                    className="rounded-md border border-slate-300 bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                    Resume
                </a>
            </nav>
        </header>
    );
}

export default Navbar;