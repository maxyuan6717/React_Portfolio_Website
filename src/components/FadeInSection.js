import React, { useState, useRef, useEffect } from "react";
import { trackGA } from "../util/functions";
import "./FadeInSection.css";

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible) setVisible(true);
        if (props.setVisible && entry.isIntersecting && !isVisible)
          props.setVisible(true);
      });
    });
    observer.observe(domRef.current);
  }, [isVisible, props]);

  useEffect(() => {
    if (isVisible && props.section) {
      trackGA("Section Views", `Viewed ${props.section}`);
    }
  }, [isVisible, props.section]);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;
