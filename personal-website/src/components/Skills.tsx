const skillGroups = [
    {
        name: "Languages",
        description: "The building blocks I write with.",
        skills: ["C#", "Python", "JavaScript", "HTML", "CSS"],
        accent: "border-t-sky-500",
        dot: "bg-sky-500",
    },
    {
        name: "Frameworks",
        description: "Tools for building complete applications.",
        skills: ["ASP.NET Core", "Web API", "Entity Framework Core", "React", "MVC / Razor"],
        accent: "border-t-violet-500",
        dot: "bg-violet-500",
    },
    {
        name: "Tools",
        description: "Platforms and services in my workflow.",
        skills: ["MS SQL Server", "GitHub", "Azure DevOps", "Azure Pipelines", "IIS", "GitHub Copilot"],
        accent: "border-t-emerald-500",
        dot: "bg-emerald-500",
    },
];

function Skills() {
    return (
        <section id="skills" className="bg-gray-100 px-6 py-8 sm:px-10 sm:py-10 lg:py-12">
            <div className="mx-auto max-w-6xl">
                <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                    What I work with
                </p>

                <h2 className="mb-4 text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    Skills &amp; Technologies
                </h2>

                <p className="mx-auto mb-10 max-w-2xl text-center leading-relaxed text-gray-600">
                    A snapshot of the languages, frameworks, and tools I use to build reliable software.
                </p>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map(({ name, description, skills, accent, dot }) => (
                        <article
                            key={name}
                            className={`flex h-full flex-col rounded-2xl border border-gray-200 border-t-4 ${accent} bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg`}
                        >
                            <div className="mb-6">
                                <div>
                                    <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                                        {name}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{description}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap content-start gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-white"
                                    >
                                        <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Skills;