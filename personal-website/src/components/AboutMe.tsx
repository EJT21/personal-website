
import { BriefcaseBusiness, GraduationCap, Code2 } from "lucide-react";

const highlights = [
    {
        icon: BriefcaseBusiness,
        title: "3+ Years",
        subtitle: "Professional Experience",
    },
    {
        icon: GraduationCap,
        title: "M.S. Computer Science",
        subtitle: "B.S. Mathematics",
    },
    {
        icon: Code2,
        title: "Full-Stack Development",
        subtitle: "Applications & Automation",
    },
];

export default function AboutMe() {
    return (
        <section id="about" className="bg-gray-50 py-24 px-6">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Left column */}
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                            Get to Know Me
                        </p>

                        <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                            About Me
                        </h2>

                        <div className="space-y-5 text-lg leading-relaxed text-slate-600">
                            <p>
                                I'm a software developer with over three years of
                                professional experience building applications,
                                automating workflows, and solving complex business
                                problems.
                            </p>

                            <p>
                                My background includes full-stack development using
                                C#, ASP.NET Core, Python, JavaScript, and SQL.
                                I enjoy working across the software development
                                lifecycle, from designing databases to deploying
                                reliable applications.
                            </p>

                            <p>
                                What I enjoy most about software engineering is
                                continuously learning, tackling new challenges,
                                and building solutions that make a meaningful impact.
                            </p>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="grid gap-4">
                        {highlights.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="flex items-center gap-5 rounded-2xl
                             border border-slate-200 bg-white p-6
                             shadow-sm transition-all duration-300
                             hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="flex h-14 w-14 shrink-0 items-center
                                  justify-center rounded-xl bg-blue-50
                                  text-blue-600">
                                        <Icon size={28} strokeWidth={1.8} />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-sm text-slate-500">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
