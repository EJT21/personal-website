import githubIcon from "../assets/github.svg";
import resumeIcon from "../assets/resume.svg";
import emailIcon from "../assets/email.svg";

function Home() {
    return (
        <section className="relative overflow-hidden bg-gray-100 px-6 py-20 sm:px-10 lg:py-28">
            <div className="relative mx-auto grid w-full max-w-5xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                    <p className="mb-4 text-sm font-semibold uppercase tracking-widest">
                        Software Developer
                    </p>

                    <h1 className="mb-5 text-left">Erick Thompson</h1>

                    <p className="max-w-2xl text-left text-lg leading-relaxed">
                        I turn tricky business problems into simple, reliable web applications.
                        I care about clean, maintainable code that makes people’s work a little easier.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a className="social-link rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm transition hover:border-gray-500 hover:shadow" href="https://github.com/EJT21">
                            <span className="social-icon"><img src={githubIcon} alt="" /></span>
                            GitHub
                        </a>
                        <a className="social-link rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm transition hover:border-gray-500 hover:shadow" href="https://www.linkedin.com/in/erickthompson21/">
                            <span className="social-icon"><img src="https://www.linkedin.com/favicon.ico" alt="" /></span>
                            LinkedIn
                        </a>
                        <a className="social-link rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm transition hover:border-gray-500 hover:shadow" href="/resume.pdf">
                            <span className="social-icon"><img src={resumeIcon} alt="" /></span>
                            Resume
                        </a>
                        <a className="social-link rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm transition hover:border-gray-500 hover:shadow" href="mailto:etommy21@gmail.com">
                            <span className="social-icon"><img src={emailIcon} alt="" /></span>
                            Email
                        </a>
                    </div>
                </div>

                <aside className="rounded-2xl border border-gray-300 bg-white p-6 text-left shadow-sm">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-widest">
                        Core stack
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {[".NET", "C#", "ASP.NET MVC", "Entity Framework Core", "React", "TypeScript"].map((technology) => (
                            <span key={technology} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium">
                                {technology}
                            </span>
                        ))}
                    </div>
                </aside>
            </div>
        </section>
    );
}

export default Home;