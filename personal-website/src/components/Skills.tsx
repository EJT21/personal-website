const skills = {
    Languages: ["C#, Python, Javascript, SQL"],
    Backend: ["ASP.NET Core, Web API, Entity Framework Core, Node.js"],
    Frontend: ["React, MVC/Razor, HTML / CSS"],
    SQL: ["MS SQL Server"],
    Tools: ["GitHub, Azure Devops, Azure Pipelines, IIS"],
    AI: ["GitHub Co-pilot, Claude, Codex"]
};

function Skills() {
    return (
        <section id="skills" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                {/*Heading*/}
                <div className="mb-12">
                    <h3 className="text-2xl  font-semibold mb-3">
                        Skills
                    </h3>

                    <p className="mx-auto mt-4 text-center text-lg text-gray-600">
                        Technologies and tools I use to build web applications, APIs, automation, and data driven software.
                    </p>
                    {/*Skill Categories*/}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {Object.entries(skills).map(([category, technologies]) => (
                            <div key={category} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                                <h3 className="mb-5 text-lg font-semibold">
                                    {category}
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {technologies.map((technology) => (
                                        <span key={technology}
                                            className="
                                            rounded-lg
                                            border border-gray-200
                                            bg-gray-50
                                            px-3 py-2
                                            text-sm font-medium
                                            text-gray-700
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