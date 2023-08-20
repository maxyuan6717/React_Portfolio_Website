import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  padding: 20vh 0;
  width: fit-content;
  max-width: 750px;

  * {
    font-size: 20px;
  }
`;

const Title = styled.div`
  font-size: 40px;
`;

export const CxmmunalAccountDeletion = () => {
  return (
    <Container>
      <Title>Cxmmunal Account Deletion</Title>
      <div>
        Send an email to benjamin.chen@yale.edu with the subject line "Cxmmunal
        Account Deletion" to delete your account.
      </div>
      <br />
      <div>
        All data associated with your account will be deleted within 30 days of
        your request, including your name, username, phone number, location
        data, photos, and in-app messages.
      </div>
    </Container>
  );
};
