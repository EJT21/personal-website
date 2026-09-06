function About() {
    return (
        <section id="about" className="bg-gray-100 px-6 py-20 sm:px-10 lg:py-28">
            <div className="mx-auto max-w-5xl text-left">
                <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest">
                    A little context
                </p>

                <h2 className="mb-12 text-center text-3xl font-semibold">
                    About Me
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                    <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
                        <h3 className="mb-4 text-2xl font-semibold">
                            My Background
                        </h3>

                        <p className="text-lg leading-relaxed">...</p>
                    </article>

                    <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
                        <h3 className="mb-4 text-2xl font-semibold">
                            Currently
                        </h3>

                        <ul className="list-disc space-y-3 pl-5 text-lg leading-relaxed">
                            <li>Deepening my React and TypeScript skills</li>
                            <li>Learning more about CI/CD pipelines and automated deployments</li>
                            <li>Exploring AI-powered features and AI-assisted development tools</li>
                        </ul>
                    </article>

                    <article className="md:col-span-2 rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
                        <h3 className="mb-4 text-2xl font-semibold">
                            What I Enjoy
                        </h3>

                        <p className="text-lg leading-relaxed">
                            I enjoy building things, solving problems, and learning how things work. One of my favorite parts of software development is taking an idea that starts as a concept and turning it into something real that people can interact with. I'm also someone who enjoys continuously learning. Whether I'm exploring a new programming language, framework, or technology, I like understanding not just how something works, but why it works. Outside of technology, I enjoy staying active, learning Spanish, exploring new places and restaurants, and spending time with the people close to me.
                        </p>
                    </article>

                    <article className="md:col-span-2 rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
                        <h3 className="mb-4 text-2xl font-semibold">
                            Where I Am Going
                        </h3>

                        <p className="text-lg leading-relaxed">
                            [Fill in details...]
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
export default About;