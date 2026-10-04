function Navbar() {
    return (
        <nav className="flex justify-between p-4">
            <a href="#home">Erick Thompson</a>

            <div className="flex gap-4">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
                <a href="/resume.pdf">Resume</a>
            </div>
        </nav>
    );
}
export default Navbar;