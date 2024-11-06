import React from 'react';
import { Html,Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/components';

type ContactFormProps={
    message:string,
    senderEmail: string
}

export default function ContactFormEmail({message,senderEmail}:ContactFormProps) {
  return <Html>
    <Head/>
    <Preview>New message from your portfolio site</Preview>
    <Tailwind>
        <Body className="bg-gray-100">
            <Container>
                <Section className="bg-white border border-black/10 my-10 px-10 py-4 rounded-md">
                    <Heading className="leading-tight">Received new message from Portfolio.</Heading>
                    <Text>{message}</Text>
                    <Hr/>
                    <Text>Mail from : {senderEmail}</Text>
                </Section>
            </Container>
        </Body>
    </Tailwind>
  </Html>
}
