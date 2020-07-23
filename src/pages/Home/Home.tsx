import React, { useRef } from 'react';
import gsap from 'gsap';
import { useIntersection } from 'react-use';

import { Parallax } from 'react-parallax';

import {
  Container,
  SectionOne,
  SectionTwo,
  Card,
  Title,
  Plans,
  CardTitle,
  CardBody,
  SectionThree,
} from './styles';
import Image1 from '../../assets/home.jpg';
import iphone1 from '../../assets/iphone1.jpg';

const Home: React.FC = () => {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  const fadeIn = (element: any) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (element: any) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power4.out',
    });
  };

  intersection && intersection.intersectionRatio < 0.5
    ? fadeOut('.fadeIn')
    : fadeIn('.fadeIn');

  return (
    <Container>
      <Parallax bgImage={Image1} strength={500}>
        <SectionOne>
          <h1> Cofira os produtos e serviços da Telzir.</h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            exercitationem provident facilis nulla nam vero quod est magnam
            dolorum itaque ipsum, eligendi quam labore optio explicabo? Ad
            molestiae laboriosam quam?
          </p>
        </SectionOne>
      </Parallax>

      <SectionTwo ref={sectionRef}>
        <Title>Nossos melhores planos</Title>

        <Plans>
          <Card className="fadeIn">
            <CardTitle>Fale Mais 30</CardTitle>

            <CardBody>Fale até 30 minutos sem pagar nada</CardBody>
          </Card>
          <Card className="fadeIn">
            <CardTitle>Fale Mais 60</CardTitle>

            <CardBody>Fale até 60 minutos sem pagar nada</CardBody>
          </Card>
          <Card className="fadeIn">
            <CardTitle>Fale Mais 120</CardTitle>

            <CardBody>Fale até 120 minutos sem pagar nada</CardBody>
          </Card>
        </Plans>
      </SectionTwo>
      <Parallax bgImage={Image1} strength={500}>
        <SectionThree>
          <Title>Compare os Planos</Title>
        </SectionThree>
      </Parallax>
    </Container>
  );
};

export default Home;
