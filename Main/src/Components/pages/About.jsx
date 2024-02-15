import React from "react";
import Footer from "../Footer";

/*import teamImage from 'src/assets/img/team.jpg'; */
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">
          Where the Future of Learning Takes Flight
        </h2>
        <p className="para">
          {" "}
          At Garuda, we believe immersive technology holds the key to shattering
          the limitations of traditional education. Our groundbreaking VR
          platform transcends textbooks and lectures, plunging learners into
          extraordinary educational experiences that fuel limitless
          understanding. With our groundbreaking cryptocurrency rewards system,
          we're transforming knowledge into a currency of its own, fueling a
          global community of passionate, empowered learners. Garuda isn't just
          about education – it's about igniting the spark of human brilliance.
          <br></br>
          Garuda isn't just a learning platform; it's your personal flight
          companion on your journey towards knowledge and self-improvement. With
          Garuda's intuitive dashboard, you're the pilot in the cockpit! Monitor
          your progress across different subjects, visualizing your
          accomplishments and pinpointing areas for future growth. As you soar
          through lessons and challenges, Garuda celebrates your wins with
          exciting badges and rewards. These aren't just shiny trinkets –
          they're symbols of your conquered milestones and motivation to keep
          reaching for the clouds. Whether it's unlocking exclusive content,
          earning special recognition, or fueling a bit of friendly competition,
          Garuda's rewards system transforms your learning into a thrilling
          adventure, propelling you ever higher!
        </p>
        <h2 className="section-title">Our Mission</h2>
        <p className="mission-statement">
          At Garuda, we believe the future of education is decentralized and
          infinitely explorable. Our mission is to pioneer VR-powered learning
          environments that shatter the constraints of physical classrooms,
          unleashing the boundless potential of student curiosity. Coupled with
          cryptocurrency-based tokenomics, we aim to incentivize not just
          passive consumption but active contribution, collaboration, and the
          organic growth of an educational metaverse.
        </p>
      <h2 className="team-title">Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member" id="abdur-raheem">
            <h4>Abdur Raheem</h4>
            <p>Unity 3D, React Frontend, Team Management</p>
          </div>
          <div className="team-member" id="dharshini">
            <h4>Dharshini</h4>
            <p>Unity 3D, Plugin Development, Functionalities</p>
          </div>

          <div className="team-member" id="srivatsan">
            <h4>Srivatsan</h4>
            <p>Backend Development, Smart Contracts</p>
          </div>
        </div>
      </div>
      <div className=""> 
      </div>
    </section>
  );
};
export default About;
