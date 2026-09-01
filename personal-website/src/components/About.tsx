function About() {
    return (
        <section id="about" className="min-h-screen px-10 py-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8">
                    About Me
                </h2>

                {/*How I got into programming*/}
                <div className="mb-8">
                    <h3 className="text-2xl font semibold mb-3">
                        My Background
                    </h3>

                    <p className="text-lg leading-relaxed">
                        [Fill in Details...]
                    </p>
                </div>

                {/*What I enjoy working on*/}
                <div className="mb-8">
                    <h3 className="text-2xl font semibold mb-3">
                        What I Enjoy
                    </h3>

                    <p className="text-lg leading-relaxed">
                        [Fill in Details...]
                    </p>
                </div>

                {/*Currently Learning*/}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-3">
                        Currently
                    </h3>

                    <ul className="list-disc list-inside text-lg space-y-2">
                        <li>Skill 1</li>
                        <li>Skill 2</li>
                        <li>Skill 3</li>
                    </ul>
                </div>

                {/*Career Direction*/}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-3">
                        Where I am going
                    </h3>

                    <p className="text-lg leading-relaxed">
                        [Fill in details...]
                    </p>
                </div>
            </div>
        </section>
    );
}
export default About;