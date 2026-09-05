import githubIcon from "../assets/github.svg";
import resumeIcon from "../assets/resume.svg";
import emailIcon from "../assets/email.svg";

function Home() {
    return (
        <section className="flex items-start justify-center bg-gray-100 px-10 pt-10 pb-20">
            <div className="w-full max-w-3xl text-center">

                <h1>Erick Thompson</h1>
                <h2>Software Developer</h2>

                <p>
                    I’m a software developer who enjoys turning tricky business problems into
                    simple, reliable web applications. I work primarily with .NET, C#, ASP.NET MVC,
                    Entity Framework Core, React, and TypeScript.
                </p>

                <p>
                    Whether I’m building an internal tool or automating a tedious workflow, I care about
                    writing clean, maintainable code that makes people’s work a little easier.
                </p>

                <div className="mt-6 flex justify-center gap-4">
                    <a className="social-link github-link" href="https://github.com/EJT21">
                        <span className="social-icon"><img src={githubIcon} alt="" /></span>
                        GitHub
                    </a>
                    <a className="social-link linkedin-link" href="https://www.linkedin.com/in/erickthompson21/">
                        <span className="social-icon"><img src="https://www.linkedin.com/favicon.ico" alt="" /></span>
                        LinkedIn
                    </a>
                    <a className="social-link resume-link" href="/resume.pdf">
                        <span className="social-icon"><img src={resumeIcon} alt="" /></span>
                        Resume
                    </a>
                    <a className="social-link email-link" href="mailto:etommy21@gmail.com">
                        <span className="social-icon"><img src={emailIcon} alt="" /></span>
                        Email
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;