const skills = {
    Languages: ["C#", "Python", "JavaScript"],
    Backend: ["ASP.NET Core", "Web API", "Entity Framework Core", "Node.js"],
    Frontend: ["React", "MVC/Razor", "HTML/CSS"],
    SQL: ["MS SQL Server"],
    Tools: ["GitHub", "Azure DevOps", "Azure Pipelines", "IIS"],
    AI: ["GitHub Copilot", "Claude", "Codex"],
};

function Skills() {
    return (
        <section id="skills" className="bg-gray-100 px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest">
                    Tools of the trade
                </p>

                <h2 className="mb-4 text-center text-3xl font-semibold">
                    Skills
                </h2>

                <p className="mx-auto mb-12 max-w-2xl text-center text-lg leading-relaxed">
                    Technologies and tools I use to build web applications, APIs, automation, and data-driven software.
                </p>

                <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {Object.entries(skills).map(([category, technologies], index) => (
                        <article key={category} className="flex h-full min-h-56 flex-col rounded-2xl border border-gray-300 bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
                            <div className="mb-5 flex items-center justify-between border-b border-gray-200 pb-4">
                                <h3 className="text-lg font-semibold">
                                    {category}
                                </h3>
                                <span className="text-sm font-semibold tracking-widest text-gray-400">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 content-start gap-3">
                                {technologies.map((technology) => (
                                    <span key={technology}
                                        className="
                                            flex h-14 w-full items-center justify-center rounded-lg
                                            border border-gray-200
                                            bg-gray-50
                                            px-3 py-2
                                            text-base font-medium
                                            text-center
                                            leading-tight
                                            transition
                                            hover:border-gray-400
                                            hover:bg-gray-100
                                            ">
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section >
    );
}
export default Skills;