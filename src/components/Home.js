import React from "react";
import styles from "./Home.module.css";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";

import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import "react-typist/dist/Typist.css";
import { FaGithub, FaLinkedinIn, FaRegFilePdf } from "react-icons/fa";
import avatar from "../images/avatar.jpg";
import resume from "../files/Max_Yuan_Resume_2020.pdf";

function Home({ theme, is_mobile }) {
  return (
    <Col
      className={(is_mobile ? "" : styles.container) + " p-0 mx-auto"}
      style={{ marginBottom: is_mobile ? "75px" : "" }}
    >
      <FadeInSection>
        <Row
          className={
            (is_mobile ? styles.mobile_home_content : styles.home_content) +
            " mx-auto"
          }
        >
          <Col md={8} className="p-0 mb-4">
            <Row
              className={
                styles.name +
                " mx-auto " +
                (is_mobile ? "justify-content-center" : "")
              }
              style={{ fontSize: is_mobile ? "52px" : "" }}
            >
              <span className={styles.letter}>M</span>
              <span className={styles.letter}>A</span>
              <span className={styles.letter}>X</span>
              &nbsp;
              <span className={styles.letter}>Y</span>
              <span className={styles.letter}>U</span>
              <span className={styles.letter}>A</span>
              <span className={styles.letter}>N</span>
            </Row>
            <Row
              className={
                styles.description +
                " mx-auto " +
                (is_mobile ? "justify-content-center" : "")
              }
              style={{ fontSize: is_mobile ? "24px" : "" }}
            >
              I do&nbsp;
              <TypistLoop interval={500}>
                {[
                  "Software Development",
                  "Competitive Programming",
                  "Robotics",
                ].map((text) => (
                  <Typist key={text}>
                    <span className={styles.typist_text}>{text}</span>
                    .
                    <Typist.Delay ms={1000} />
                    <Typist.Backspace count={text.length + 1} />
                  </Typist>
                ))}
              </TypistLoop>
            </Row>
            <Row className={styles.email + " mx-auto py-3"}>
              <div className={is_mobile ? "text-center" : ""}>
                Hi! I'm a sophomore studying CS/Econ at Yale. If you want to
                connect, chat, or collaborate on a project, reach out to me
                at&nbsp;
                <a
                  href="mailto: max.yuan@yale.edu"
                  className={styles.highlight_link}
                >
                  max.yuan@yale.edu
                </a>
                .
              </div>
            </Row>
            <Row
              className={
                "mx-auto " + (is_mobile ? "justify-content-center" : "")
              }
            >
              <a
                href="https://github.com/maxyuan6717"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  styles.social_btn +
                  " pr-2 py-2 " +
                  styles.github +
                  (theme === "dark" ? " " + styles.color_dark : "")
                }
                title="Github"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/max-yuan-209930194/"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  styles.social_btn +
                  " p-2 " +
                  styles.linkedin +
                  (theme === "dark" ? " " + styles.color_dark : "")
                }
                title="LinkedIn"
              >
                <FaLinkedinIn size={32} />
              </a>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  styles.social_btn +
                  " pl-2 py-2 " +
                  styles.resume +
                  (theme === "dark" ? " " + styles.color_dark : "")
                }
                title="Resume"
              >
                <FaRegFilePdf size={30} />
              </a>
            </Row>
          </Col>
          <Col md={4} style={{ minHeight: "200px" }}>
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
