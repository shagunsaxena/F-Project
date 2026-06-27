import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Shagun R. Saxena</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Frontend Developer",
            1500,
            "Business Analyst",
            1500,
            "Aspiring Product Owner",
            1500,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          aria-label="Roles"
        />

        <p>
          Building digital experiences and solving business problems through
          technology.
        </p>
      </div>
    </section>
  );
};

export default Hero;