import React from "react";
import styles from "./Home.module.css";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";

import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import "react-typist/dist/Typist.css";
import { FaGithub, FaLinkedinIn, FaRegFilePdf } from "react-icons/fa";
import avatar from "../images/avatar.jpg";
import ParticleImage, { forces, Vector } from "react-particle-image";
import maxyuan from "../images/MAXYUAN.png";
// import resume from "../files/Max_Yuan_Resume.pdf";

function Home() {
  return (
    <Col className={styles.container + " p-0 mx-auto"}>
      <FadeInSection>
        <Row className={styles.home_content + " mx-auto"}>
          <Col md={8} className="p-0">
            {/* <h1 className={styles.header}>MAX YUAN</h1> */}
            <div className={styles.particle_name}>
              <ParticleImage
                scale={0.47}
                maxParticles={3000}
                backgroundColor="transparent"
                src={maxyuan}
                mouseMoveForce={(x, y) => forces.disturbance(x, y, 3)}
                touchMoveForce={(x, y) => forces.disturbance(x, y, 3)}
                mouseDownForce={(x, y) => forces.disturbance(x, y, 10)}
                particleOptions={{
                  mass: () => 30,
                  filter: ({ x, y, image }) => {
                    const pixel = image.get(x, y);
                    return pixel.r < 200;
                  },
                  color: () => "#3273dc",
                  friction: () => 0.3,
                  initialPosition: ({ canvasDimensions }) => {
                    return new Vector(
                      canvasDimensions.width / 2,
                      canvasDimensions.height / 2
                    );
                  },
                }}
                height={80}
              />
            </div>
            <Row className={styles.description + " mx-auto"}>
              I do&nbsp;
              <TypistLoop interval={500}>
                {["Web Development", "Competitive Programming", "Robotics"].map(
                  (text) => (
                    <Typist key={text}>
                      <span className={styles.typist_text}>{text}</span>
                      <Typist.Delay ms={1000} />
                      <Typist.Backspace count={text.length} />
                    </Typist>
                  )
                )}
              </TypistLoop>
            </Row>
            <Row className={styles.email + " mx-auto py-3"}>
              <div>
                Hi, I'm a sophomore studying CS/Econ at Yale. If you want to
                connect, chat, or collaborate on a project, reach out to me
                at&nbsp;
                <span className={styles.highlight_link}>max.yuan@yale.edu</span>
              </div>
            </Row>
            <Row className="mx-auto">
              <a
                href="https://github.com/maxyuan6717"
                target="_blank"
                className={styles.social_btn + " pr-2 py-2 " + styles.github}
                title="Github"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/max-yuan-209930194/"
                target="_blank"
                className={styles.social_btn + " p-2 " + styles.linkedin}
                title="LinkedIn"
              >
                <FaLinkedinIn size={32} />
              </a>
              <a
                // href={resume}
                href=""
                target="_blank"
                className={styles.social_btn + " pl-2 py-2 " + styles.resume}
                title="Resume"
              >
                <FaRegFilePdf size={30} />
              </a>
            </Row>
          </Col>
          <Col md={4} className="d-flex">
            <img
              src={avatar}
              width={200}
              className={styles.avatar + " m-auto"}
            />
          </Col>
        </Row>
      </FadeInSection>
    </Col>
  );
}

export default Home;
