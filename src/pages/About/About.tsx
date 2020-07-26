import React from 'react';

import { Parallax } from 'react-parallax';
import { Container, SectionOne, Section, Image } from './styles';
import about from '../../assets/about.jpg';
import company1 from '../../assets/company1.jpg';
import company2 from '../../assets/company2.jpg';

const About: React.FC = () => {
  document.title = 'Sobre nós';
  return (
    <Container data-test="aboutContainer">
      <Parallax
        bgImage={about}
        strength={500}
        bgClassName="react-parallax-bgimage"
      >
        <SectionOne data-test="aboutSectionOne">
          <h1> Saiba tudo sobre nós.</h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            exercitationem provident facilis nulla nam vero quod est magnam
            dolorum itaque ipsum, eligendi quam labore optio explicabo? Ad
            molestiae laboriosam quam?
          </p>
        </SectionOne>
      </Parallax>
      <Section bgColor="var(--secondary)" data-test="aboutSectionTwo">
        <div data-test="aboutContentSectionTwo">
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
            accusantium assumenda. Obcaecati vel itaque voluptatibus. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
            consequuntur?
          </h2>
        </div>
        <Image bgUrl={company1} data-test="imageSectionTwo" />
      </Section>

      <Section bgColor="var(--primary)" data-test="aboutSectionThree">
        <Image bgUrl={company2} data-test="imageSectionThree" />
        <div data-test="aboutContentSectionThree">
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
            accusantium assumenda. Obcaecati vel itaque voluptatibus. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
            consequuntur?
          </h2>
        </div>
      </Section>
    </Container>
  );
};

export default About;
