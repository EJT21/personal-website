const skills = [
    {
        category: "Languages",
        technologies: ["C#", "Python", "JavaScript", "SQL"],
    },
    {
        category: "Backend",
        technologies: ["ASP.NET Core", "Web API", "Entity Framework Core", "Node.js"],
    },
    {
        category: "Frontend",
        technologies: ["React", "MVC/Razor", "HTML/CSS"],
    },
    {
        category: "SQL",
        technologies: ["MS SQL Server"],
    },
    {
        category: "Tools",
        technologies: ["GitHub", "Azure DevOps", "Azure Pipelines", "IIS"],
    },
    {
        category: "AI",
        technologies: ["GitHub Copilot", "Claude", "Codex"],
    },
];

function Skills() {
    return (
        <section id="skills" className="bg-gray-100 px-6 py-24">
            <div className="mx-auto max-w-6xl">
                {/*Heading*/}
                <div className="mb-12">
                    <h3 className="text-2xl  font-semibold mb-3">
                        Skills
                    </h3>

                    <p className="mx-auto mt-4 pb-4 text-center text-lg text-gray-600">
                        Technologies and tools I use to build web applications, APIs, automation, and data driven software.
                    </p>
                    {/*Skill Categories*/}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {skills.map(({ category, technologies }) => (
                            <div key={category} className="flex h-64 flex-col rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm">
                                <h3 className="mb-4 text-lg text-center font-semibold text-gray-800">
                                    {category}
                                </h3>

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
                                            text-gray-700
                                            leading-tight
                                            transition
                                            hover:border-gray-400
                                            hover:bg-gray-100
                                            hover:text-gray-900
                                            ">
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
}
export default Skills;