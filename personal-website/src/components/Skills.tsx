const skills = {
    Languages: ["C#, Python, Javascript, SQL"],
    Backend: ["ASP.NET Core, Web API, Entity Framework Core, Node.js"],
    Frontend: ["React, MVC/Razor, Javascript, HTML / CSS"],
    SQL: ["MS SQL Server"],
    Tools: ["GitHub, Azure Devops, Azure Pipelines, IIS"]
};

function Skills() {
    return (
        <section id="skills" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                {/*Heading*/}
                <div className="mb-12">
                    <p className="mb-2 text-sm font-medium uppercase tracking-widest text-grey-500">
                        Skills
                    </p>

                    <p className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Tech Stack
                    </p>

                    <p className="mt-4 max-w-2xl text-lg text-gray-600">
                        Technologies and tools I use to build web applications, APIs, automation, and data driven software.
                    </p>

                </div>
            </div>
        </section>
    );
}
export default Skills;