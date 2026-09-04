function About() {
    return (
        <section id="about" className="min-h-screen px-10 pt-10 pb-20">
            <div className="max-w-4xl mx-auto text-left">
                <h2 className="text-4xl text-center font-bold mb-8">
                    About Me
                </h2>

                {/*How I got into programming*/}
                <div className="mb-8">
                    <h3 className="text-2xl text-center font semibold mb-3">
                        My Background
                    </h3>

                    <p>...</p>
                </div>

                {/*What I enjoy working on*/}
                <div className="mb-8">
                    <h3 className="text-2xl text-center font semibold mb-3">
                        What I Enjoy
                    </h3>

                    <p className="text-lg leading-relaxed">
                        <p>I enjoy building things, solving problems, and learning how things work. One of my favorite parts of software development is taking an idea that starts as a concept and turning it into something real that people can interact with.</p>
                        <br />
                        <p>I'm also someone who enjoys continuously learning. Whether I'm exploring a new programming language, framework, or technology, I like understanding not just how something works, but why it works. This is one of the things that originally drew me to computer science and continues to keep me interested in the field.</p>
                        <br />
                        <p>Outside of technology, I enjoy staying active, learning music, exploring new places and restaurants, and spending time with the people close to me. I like having a balance between working on things that challenge me intellectually and activities that let me step away from a computer.</p>

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