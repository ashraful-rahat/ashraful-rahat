import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import Skills from "@/components/Skill";

export default function HomePage() {
  return (
    <div>
      {/* Home Section */}
      <section id="home">
        <Banner />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Project Section */}
      <section id="projects">
        <Project />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Education Section */}
      <section>
        <Education />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
