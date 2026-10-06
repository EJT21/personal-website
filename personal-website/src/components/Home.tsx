import { Link } from "react-router-dom";
import Contact from "./Contact";
import Skills from "./Skills";
import { currentExperience } from "../data/experience";

function Home() {
    return (
        <>
            <section className="relative overflow-hidden bg-gray-100 px-6 py-8 sm:px-10 sm:py-10 lg:py-12">
                <div className="relative mx-auto grid w-full max-w-5xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-widest">
                            Software Developer
                        </p>

                        <h1 className="mb-5 text-left">Erick Thompson</h1>

                        <p className="max-w-2xl text-left text-lg leading-relaxed">
                            I turn tricky business problems into simple, reliable web applications.
                            I care about clean, maintainable code that makes people’s work a little easier.
                        </p>
                    </div>

                    <div
                        role="img"
                        aria-label="Placeholder for a photo of Erick"
                        className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-sm"
                    >
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest">Photo</p>
                            <p className="mt-2 text-gray-500">[Add your photo here]</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="bg-gray-100 px-6 py-8 sm:px-10 sm:py-10 lg:py-12">
                <div className="mx-auto max-w-5xl text-left">
                    <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest">
                        A little context
                    </p>
                    <h2 className="mb-6 text-center text-3xl font-semibold">About Me</h2>
                    <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
                        <p className="text-lg leading-relaxed">
                            My interest in mathematics and a data science course analyzing COVID-19 data led me to computer science and software development. I enjoy turning problems into useful applications and continue to explore web development, cloud technologies, automation, and AI.
                        </p>
                    </article>
                </div>
            </section>

            <section className="bg-gray-100 px-6 py-8 sm:px-10 sm:py-10 lg:py-12">
                <div className="mx-auto max-w-5xl text-left">
                    <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest">
                        At a glance
                    </p>
                    <h2 className="mb-6 text-center text-3xl font-semibold">Current Experience</h2>
                    <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
                        <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                            <h3 className="text-2xl font-semibold">{currentExperience.title}</h3>
                            <p className="text-sm font-medium text-gray-500">{currentExperience.dates}</p>
                        </div>
                        <p className="mb-4 font-medium">{currentExperience.company}</p>
                        <p className="mb-5 leading-relaxed">{currentExperience.description}</p>
                        <h4 className="mb-2 font-semibold">Accomplishments</h4>
                        <ul className="mb-5 list-disc space-y-1 pl-5 leading-relaxed">
                            {currentExperience.accomplishments.map((item, index) => <li key={`${index}-${item}`}>{item}</li>)}
                        </ul>
                        <p className="mb-6"><span className="font-semibold">Technologies:</span> {currentExperience.technologies}</p>
                        <Link to="/experience" className="inline-flex rounded-xl border border-gray-300 bg-white px-4 py-2 font-medium shadow-sm transition hover:border-gray-500 hover:shadow">
                            View Full Experience →
                        </Link>
                    </article>
                </div>
            </section>

            <Skills />
            <Contact />
        </>
    );
}

export default Home;