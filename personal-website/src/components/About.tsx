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

                        <p className="text-lg leading-relaxed">
                            My path into software development started with my interest in mathematics. I have always enjoyed solving difficult problems, finding patterns, and understanding why something works rather than simply knowing that it works. One of the things I enjoy most about mathematics is being able to prove that a solution is correct. I found that same way of thinking in computer science, where problems can be broken down logically and solutions can be tested and refined.
                        </p>
                        <br />
                        <p className="text-lg leading-relaxed">
                            I began to see the connection between mathematics and computer science more clearly while taking a data science course. We used probability and statistics to analyze COVID-19 data, learning R and using simulations to explore infection rates and visualize trends. I enjoyed taking mathematical ideas and using programming to turn them into something tangible.
                        </p>
                        <br />
                        <p className="text-lg leading-relaxed">
                            That experience led me to pursue computer science and eventually a career in software development. What continues to draw me to software is the combination of problem solving, creativity, and constant learning. I enjoy taking an idea or problem, developing a solution, and putting my own perspective into what I build. There is something especially rewarding about creating a solution that didn't exist before or finding a better way to improve something that already does.
                        </p>
                        <br />
                        <p className="text-lg leading-relaxed">
                            Today, I enjoy working across different areas of development. I'm particularly interested in web development, cloud technologies, automation, and AI, and I enjoy learning new technologies and figuring out how they can work together to build better applications. Ultimately, I want to continue growing as a developer while building software that is useful, creative, and capable of making an impact at scale.
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