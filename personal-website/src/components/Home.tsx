function Home() {
    return (
        <section className="flex min-h-screen items-start justify-center px-10 pt-10">
            <div className="w-full max-w-3xl text-center">

                <h1>Erick Thompson</h1>
                <h2>Software Developer</h2>

                <p>Software Developer specializing in .NET, C#, MVC,
                    Entity Framework Core, react/typescript, and web application development.
                </p>

                <p>
                    I build business applications and automation tools with a focus on
                    clean, maintanable code.
                </p>

                <div className="mt-6 flex justify-center gap-4">
                    <a href="https://github.com/EJT21">GitHub</a>
                    <a href="https://www.linkedin.com/in/erickthompson21/">LinkedIn</a>
                    <a href="/resume.pdf">Resume</a>
                    <a href="mailto:etommy21@gmail.com">Email</a>
                </div>
            </div>
        </section>
    );
}

export default Home;