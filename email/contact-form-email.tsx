import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EmailMessage {
  message: string;
  senderEmail: string;
}

export default function ContactFormEmail({
  message,
  senderEmail,
}: EmailMessage) {
  return (
    <Html>
      <Head />
      <Preview>New message from my portfolio</Preview>
      <Body style={{ backgroundColor: "grey", color: "#000" }}>
        <Container>
          <Section
            style={{
              backgroundColor: "white",
              border: "1px solid rgba(0,0,0,0.1)",
              margin: "1rem 0",
              padding: "1rem 2rem",
            }}
          >
            <Heading>You got message from contact form</Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>Sender's email - {senderEmail}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
