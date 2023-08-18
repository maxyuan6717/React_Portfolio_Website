import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  padding: 100px 12px;
  max-width: 750px;

  * {
    font-size: 18px;
  }
`;

const Title = styled.div`
  font-size: 40px;
`;

export const CxmmunalPrivacy = () => {
  return (
    <Container>
      <Title>Cxmmunal's Privacy Policy</Title>
      <div>
        This Privacy Policy describes how your personal information is
        collected, used, and shared when you use the Cxmmunal mobile application
        (referred to as the "App"). By using the App, you consent to the
        practices described in this Privacy Policy.
      </div>
      <br />
      <div>
        <b>1. Information We Collect</b>
      </div>
      <div>
        When you use the App, we may collect certain information from you,
        including:
      </div>
      <ul>
        <li>
          Location Data: The App may request access to your device's location to
          provide location-based features. This data is used solely for the
          purpose of enhancing your experience within the App.
        </li>
        <li>
          Personal Information: We collect your first name, last name, and phone
          number to create and manage your user account. This information is
          necessary to facilitate communication within the App.
        </li>
      </ul>
      <div>
        <b>2. Use of Information</b>
      </div>
      <div>We use the collected information for the following purposes:</div>
      <ul>
        <li>
          User Account Management: Your first name, last name, and phone number
          are used to create and manage your user account within the App.
        </li>
        <li>
          Location-Based Features: Location data is utilized to provide
          location-based features, such as finding nearby events or connecting
          with other users in your vicinity.
        </li>
        <li>
          Communication: We may use your provided contact information to
          communicate with you regarding important updates, announcements, or
          support inquiries related to the App.
        </li>
      </ul>
      <div>
        <b>3. Data Sharing</b>
      </div>
      <div>
        We do not share, sell, or disclose your personal information to third
        parties, data brokers, or advertisers. Your information is only used
        within the App for the purposes described in this Privacy Policy.
      </div>
      <br />
      <div>
        <b>4. Data Security</b>
      </div>
      <div>
        We take reasonable precautions to protect your personal information from
        unauthorized access, loss, misuse, disclosure, alteration, or
        destruction. However, no data transmission over the internet or wireless
        network can be guaranteed to be 100% secure.
      </div>
      <br />
      <div>
        <b>5. Your Choices</b>
      </div>
      <div>
        You have the right to access, correct, update, or delete your personal
        information within the App. You can also choose to disable location
        services on your device, but this may impact the functionality of
        location-based features.
      </div>
      <br />
      <div>
        <b>6. Contact Us</b>
      </div>
      <div>
        If you have any questions or concerns about this Privacy Policy, or if
        you would like to exercise your rights or make a complaint, please
        contact us at <b>benjamin.chen@yale.edu</b>
      </div>
      <br />
      <div>
        <b>7. Changes to Privacy Policy</b>
      </div>
      <div>
        We reserve the right to modify this Privacy Policy at any time, so
        please review it frequently. Changes and clarifications will take effect
        immediately upon posting on the App. Your continued use of the App after
        any modifications indicates your acceptance of those changes.
      </div>
      <br />
      <div>
        By using the Cxmmunal App, you acknowledge that you have read and
        understood this Privacy Policy and agree to its terms and conditions.
      </div>
      <br />
      <div>Last updated: August 7th, 2023.</div>
    </Container>
  );
};
