import React, { useState } from "react";
import { Col } from "react-bootstrap";
import ProgressBar from "./ProgressBar";
import FadeInSection from "./FadeInSection";

function ProgCircle({ progress, text, indx, num_cols }) {
  const colors = ["#75a3eb", "#ffa454", "#75eb85"];
  var options = {
    strokeWidth: 4,
    color: colors[indx],
    trailColor: "#f4f4f4",
    text: {
      style: {
        fontSize: "15px",
        textAlign: "center",
        color: "black",
        position: "absolute",
        left: "50%",
        top: "50%",
        padding: 0,
        margin: 0,
        transform: {
          prefix: true,
          value: "translate(-50%, -50%)",
        },
      },
    },
  };
  const [visible, setVisible] = useState(false);

  return (
    <Col xs={12 / num_cols}>
      <FadeInSection setVisible={setVisible}>
        {visible ? (
          <ProgressBar.Circle
            progress={progress}
            text={text}
            options={options}
            initialAnimate={true}
          />
        ) : (
          <div style={{ height: 105 }} />
        )}
      </FadeInSection>
    </Col>
  );
}

export default ProgCircle;
