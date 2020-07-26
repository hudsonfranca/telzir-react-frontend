import React from 'react';

import { Parallax } from 'react-parallax';
import {
  Container,
  SectionOne,
  SectionTwo,
  CardTitle,
  Card,
  CardBody,
} from './styles';
import ContactImg from '../../assets/contact.jpg';
import question from '../../assets/question.jpg';
import call from '../../assets/call.jpg';
import sms from '../../assets/sms.jpg';
import suport from '../../assets/suport2.jpg';

const Contact: React.FC = () => {
  document.title = 'Contato';
  return (
    <Container data-test="contactContainer">
      <Parallax
        bgImage={ContactImg}
        strength={500}
        bgClassName="react-parallax-bgimage"
      >
        <SectionOne data-test="contactSectionOne">
          <h1>Fale com a Telzir e tire suas dúvidas</h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            exercitationem provident facilis nulla nam vero quod est magnam
            dolorum itaque ipsum, eligendi quam labore optio explicabo? Ad
            molestiae laboriosam quam?
          </p>
        </SectionOne>
      </Parallax>
      <SectionTwo data-test="contactSectionTwo">
        <Card bgUrl={sms} data-test="contactCard">
          <CardTitle>WHATSAPP</CardTitle>
          <CardBody>Seja atendido via WhatsApp</CardBody>
        </Card>
        <Card bgUrl={call} data-test="contactCard">
          <CardTitle>TELEFONE</CardTitle>
          <CardBody>Ligue grátis para a Telzir</CardBody>
        </Card>
        <Card bgUrl={question} data-test="contactCard">
          <CardTitle>OUVIDORIA</CardTitle>
          <CardBody>Sugestões, críticas e reclamações</CardBody>
        </Card>
        <Card bgUrl={suport} data-test="contactCard">
          <CardTitle>ENVIE SUA DÚVIDA</CardTitle>
          <CardBody>Informe o plano e o que precisa</CardBody>
        </Card>
      </SectionTwo>
    </Container>
  );
};

export default Contact;
