function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50 py-8">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 px-6 text-center">

                <div className="flex flex-wrap items-center justify-center gap-1">
                    <a href="https://github.com/EJT21" className="rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-200 hover:text-slate-900">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/erickthompson21/" className="rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-200 hover:text-slate-900">
                        LinkedIn
                    </a>
                    <a href="mailto:etommy21@gmail.com" className="rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-200 hover:text-slate-900">
                        Email
                    </a>
                </div>
                <p className="text-sm text-slate-500">
                    © {new Date().getFullYear()} Erick Thompson
                </p>
            </div>
        </footer>
    );
}

export default Footer;