import React from "react";
import styles from "./Home.module.css";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";

import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import "react-typist/dist/Typist.css";
import { FaGithub, FaLinkedinIn, FaRegFilePdf } from "react-icons/fa";
import avatar from "../images/avatar.jpg";
// import resume from "../files/Max_Yuan_Resume.pdf";

function Home() {
  return (
    <Col className={styles.container + " p-0 mx-auto"}>
      <FadeInSection>
        <Row className={styles.home_content + " mx-auto"}>
          <Col md={8} className="p-0">
            <Row className={styles.name + " mx-auto"}>
              <span className={styles.letter}>M</span>
              <span className={styles.letter}>A</span>
              <span className={styles.letter}>X</span>
              &nbsp;
              <span className={styles.letter}>Y</span>
              <span className={styles.letter}>U</span>
              <span className={styles.letter}>A</span>
              <span className={styles.letter}>N</span>
            </Row>
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
                Hi! I'm a sophomore studying CS/Econ at Yale. If you want to
                connect, chat, or collaborate on a project, reach out to me
                at&nbsp;
                <a
                  href="mailto: max.yuan@yale.edu"
                  className={styles.highlight_link}
                >
                  max.yuan@yale.edu
                </a>
              </div>
            </Row>
            <Row className="mx-auto">
              <a
                href="https://github.com/maxyuan6717"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social_btn + " pr-2 py-2 " + styles.github}
                title="Github"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/max-yuan-209930194/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social_btn + " p-2 " + styles.linkedin}
                title="LinkedIn"
              >
                <FaLinkedinIn size={32} />
              </a>
              <a
                // href={resume}
                href="/"
                target="_blank"
                rel="noopener noreferrer"
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
              alt="Max Yuan"
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
