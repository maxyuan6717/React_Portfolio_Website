import React from "react";
import styles from "./Footer.module.css";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";
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
          <div className={styles.social_btn + " mx-2 " + styles.email}>
            <FaEnvelopeOpenText
              size={btn_size}
              className={styles.social_icon}
            />
          </div>
          <div className={styles.social_btn + " mx-2 " + styles.github}>
            <FaGithubAlt size={btn_size} className={styles.social_icon} />
          </div>
          <div className={styles.social_btn + " mx-2 " + styles.linkedin}>
            <FaLinkedinIn size={btn_size} className={styles.social_icon} />
          </div>
          <div className={styles.social_btn + " mx-2 " + styles.resume}>
            <FaRegFilePdf size={btn_size} className={styles.social_icon} />
          </div>
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
