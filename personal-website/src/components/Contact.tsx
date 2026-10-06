function Contact() {
    return (
        <section id="contact" className="bg-gray-100 px-6 py-8 sm:px-10 sm:py-10 lg:py-12">
            <div className="mx-auto max-w-5xl text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest">
                    Get in touch
                </p>
                <h2 className="mb-4 text-3xl font-semibold">Contact</h2>
                <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed">
                    Have a question or want to connect? Send me an email.
                </p>
                <a
                    href="mailto:etommy21@gmail.com"
                    className="inline-flex rounded-xl border border-gray-300 bg-white px-4 py-2 font-medium shadow-sm transition hover:border-gray-500 hover:shadow"
                >
                    Email Erick
                </a>
            </div>
        </section>
    );
}
export default Contact;