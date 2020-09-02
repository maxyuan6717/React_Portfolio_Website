import React from "react";
import styles from "./Footer.module.css";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";
import resume from "../files/Max_Yuan_Resume_August_2020.pdf";
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaRegFilePdf,
  FaEnvelopeOpenText,
} from "react-icons/fa";

function Footer() {
  const btn_size = 16;
  return (
    <Col className={styles.container + " p-0 mx-auto"}>
      <FadeInSection>
        <Row className="mx-auto justify-content-center">
          <a
            href="mailto: max.yuan@yale.edu"
            className={styles.social_btn + " mx-2 " + styles.email}
            title="Email"
          >
            <FaEnvelopeOpenText
              size={btn_size}
              className={styles.social_icon}
            />
          </a>
          <a
            href="https://github.com/maxyuan6717"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social_btn + " mx-2 " + styles.github}
            title="Github"
          >
            <FaGithubAlt size={btn_size} className={styles.social_icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/max-yuan-209930194/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social_btn + " mx-2 " + styles.linkedin}
            title="LinkedIn"
          >
            <FaLinkedinIn size={btn_size} className={styles.social_icon} />
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social_btn + " mx-2 " + styles.resume}
            title="Resume"
          >
            <FaRegFilePdf size={btn_size} className={styles.social_icon} />
          </a>
        </Row>
      </FadeInSection>
      <Row className="mx-auto mt-2">
        <div className={styles.footer_text + " mx-auto"}>
          <FadeInSection>
            Designed and Developed by{" "}
            <span className={styles.name}>Max Yuan</span>
          </FadeInSection>
        </div>
      </Row>
    </Col>
  );
}

export default Footer;
