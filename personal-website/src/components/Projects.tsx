function Projects() {
    return (
        <section className="min-h-full bg-gray-100 px-6 py-8 sm:px-10 sm:py-10 lg:py-12">
            <div className="mx-auto max-w-5xl text-left">
                <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest">
                    Selected work
                </p>
                <h1 className="mb-8 text-center">Projects</h1>

                <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-2xl font-semibold">[Project Name]</h2>
                    <p className="mb-5 leading-relaxed">[Project Description]</p>
                    <p className="mb-5"><span className="font-semibold">Technologies:</span> [...]</p>
                    <div className="flex flex-wrap gap-3">
                        <span className="rounded-xl border border-gray-300 bg-white px-4 py-2 font-medium shadow-sm">
                            [GitHub Link]
                        </span>
                        <span className="rounded-xl border border-gray-300 bg-white px-4 py-2 font-medium shadow-sm">
                            [Live Demo]
                        </span>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Projects;
