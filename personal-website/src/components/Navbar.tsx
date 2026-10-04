function Navbar() {
    return (
        <header className="border-b border-slate-200 bg-white">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
                <a href="#home" className="text-base font-semibold tracking-tight text-slate-900">
                    Erick Thompson
                </a>

                <div className="hidden items-center gap-1 md:flex">
                    <a href="#about" className="rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                        About
                    </a>
                    <a href="#experience" className="rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                        Experience
                    </a>
                    <a href="#skills" className="rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                        Skills
                    </a>
                    <a href="#contact" className="rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                        Contact
                    </a>
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