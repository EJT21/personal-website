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

                <div className="grid grid-cols-1 gap-6">
                    <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
                        <h3 className="mb-4 text-2xl font-semibold">
                            My Background
                        </h3>

                        <p className="text-lg leading-relaxed">
                            My path into software development started with my interest in mathematics. I have always enjoyed solving difficult problems, finding patterns, and understanding why something works rather than simply knowing that it works. I began to see the connection between mathematics and computer science while taking a data science course, where I used probability, statistics, and R to analyze COVID-19 data and visualize trends. That experience led me to pursue computer science and eventually a career in software development.
                        </p>
                        <br />
                        <p className="text-lg leading-relaxed">
                            What I enjoy most about software development is the combination of problem solving, creativity, and constant learning. I like taking an idea or problem and turning it into something useful, whether that's a web application, an automation tool, or something completely new. Today, I'm particularly interested in web development, cloud technologies, automation, and AI, and I enjoy learning how different technologies can work together to build better applications.
                        </p>
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

                    <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
                        <h3 className="mb-4 text-2xl font-semibold">
                            What I Enjoy
                        </h3>

                        <p className="text-lg leading-relaxed">
                            I enjoy building things, solving problems, and learning how things work. One of my favorite parts of software development is taking an idea that starts as a concept and turning it into something real that people can interact with. I'm also someone who enjoys continuously learning. Whether I'm exploring a new programming language, framework, or technology, I like understanding not just how something works, but why it works. Outside of technology, I enjoy staying active, learning Spanish, exploring new places and restaurants, and spending time with the people close to me.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
export default About;