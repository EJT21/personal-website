import { currentExperience } from "../data/experience";

function Experience() {
    return (
        <section className="min-h-full bg-gray-100 px-6 py-8 sm:px-10 sm:py-10 lg:py-12">
            <div className="mx-auto max-w-5xl text-left">
                <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest">
                    Career history
                </p>
                <h1 className="mb-8 text-center">Experience</h1>

                <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
                    <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <h2 className="text-2xl font-semibold">{currentExperience.title}</h2>
                        <p className="text-sm font-medium text-gray-500">{currentExperience.dates}</p>
                    </div>
                    <p className="mb-4 font-medium">{currentExperience.company}</p>
                    <p className="mb-5 leading-relaxed">{currentExperience.description}</p>
                    <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                        {currentExperience.accomplishments.map((item, index) => <li key={`${index}-${item}`}>{item}</li>)}
                    </ul>
                    <p className="mt-5"><span className="font-semibold">Technologies:</span> {currentExperience.technologies}</p>
                </article>
            </div>
        </section>
    );
}

export default Experience;
