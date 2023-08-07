import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  padding: 20vh 0;
  width: fit-content;

  * {
    font-size: 20px;
  }
`;

const Title = styled.div`
  font-size: 40px;
`;

export const CxmmunalSupport = () => {
  return (
    <Container>
      <Title>We&apos;re Cxmmunal!</Title>
      <div>If you have any questions or feedback, you can contact us here:</div>
      <br />
      <div>Address: 485 Commonwealth Ave, Boston, MA 02215</div>
      <div>Email: benjamin.chen@yale.edu</div>
      <div>Phone: {"+1(610)914-8699"}</div>
    </Container>
  );
};
