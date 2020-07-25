import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useIntersection } from 'react-use';

import { Parallax } from 'react-parallax';

import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import {
  SectionOne,
  Container,
  PlansSection,
  Card,
  Title,
  CardTitle,
  CardBody,
  Label,
  Form,
  Input,
  Text,
  Select,
  InputTitle,
  ButtonSubmit,
} from './styles';
import Image1 from '../../assets/home.jpg';
import phone from '../../assets/phone.jpg';
import phone2 from '../../assets/phone2.jpg';
import api from '../../services/api';

const validate = Yup.object().shape({
  minutes: Yup.number().required('Por favor forneça os minutos '),
  planId: Yup.number().required('Por favor selecione um plano'),
  priceId: Yup.number().required('Por favor selecione uma horigem e destino'),
});

interface PriceProps {
  id: number;
  price: number;
  createdAt: string;
  updatedAt: string;
  source: {
    id: number;
    code: number;
    createdAt: string;
    updatedAt: string;
  };
  destination: {
    id: number;
    code: number;
    createdAt: string;
    updatedAt: string;
  };
}

interface PlanProps {
  id: number;
  name: string;
  minutes: number;
  createdAt: string;
  updatedAt: string;
}

interface CalcProps {
  result: {
    priceWithPlan: number;
    priceWithoutPlan: number;
  };
  planName: string;
}

const Home: React.FC = () => {
  const sectionRef = useRef(null);
  const [prices, setPrices] = useState<PriceProps[]>();
  const [plans, setPlans] = useState<PlanProps[]>();
  const [calcValue, setValcValue] = useState<CalcProps>();

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

  /*eslint-disable */
  intersection && intersection.intersectionRatio < 0.5
    ? fadeOut('.fadeIn')
    : fadeIn('.fadeIn');
    /* eslint-enable */

  async function handleFormikSubmit(
    values: {
      minutes: string;
      priceId: string;
      planId: string;
    },
    formikHelpers: FormikHelpers<{
      minutes: string;
      priceId: string;
      planId: string;
    }>
  ) {
    try {
      const { data } = await api.post('/calculate-price', {
        minutes: values.minutes,
        priceId: values.priceId,
        planId: values.planId,
      });

      if (data) {
        setValcValue(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function loadPrices() {
    try {
      const { data } = await api.get('/price');
      if (data) {
        setPrices(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function loadPlans() {
    try {
      const { data } = await api.get('/plan');
      if (data) {
        setPlans(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadPrices();
    loadPlans();
  }, []);

  return (
    <Container data-test="homeContainer">
      <Parallax
        bgImage={Image1}
        strength={500}
        bgClassName="react-parallax-bgimage"
      >
        <SectionOne data-test="homeSectionOne">
          <h1> Cofira os produtos e serviços da Telzir.</h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            exercitationem provident facilis nulla nam vero quod est magnam
            dolorum itaque ipsum, eligendi quam labore optio explicabo? Ad
            molestiae laboriosam quam?
          </p>
        </SectionOne>
      </Parallax>

      <PlansSection
        bgColor="var(--quaternary)"
        ref={sectionRef}
        data-test="homeSectionTwo"
      >
        <Title gridArea="title" data-test="homeSectionTwoTitle">
          Nossos melhores planos
        </Title>

        <Card
          className="fadeIn"
          bgUrl={phone}
          gridArea="r1"
          data-test="homeSectionTwoCard"
        >
          <CardTitle>Fale Mais 30</CardTitle>

          <CardBody>Fale até 30 minutos sem pagar nada</CardBody>
        </Card>
        <Card
          className="fadeIn"
          bgUrl={phone}
          gridArea="r2"
          data-test="homeSectionTwoCard"
        >
          <CardTitle>Fale Mais 60</CardTitle>

          <CardBody>Fale até 60 minutos sem pagar nada</CardBody>
        </Card>
        <Card
          className="fadeIn"
          bgUrl={phone}
          gridArea="r3"
          data-test="homeSectionTwoCard"
        >
          <CardTitle>Fale Mais 120</CardTitle>

          <CardBody>Fale até 120 minutos sem pagar nada</CardBody>
        </Card>
      </PlansSection>

      <PlansSection bgColor="var(--secondary)" data-test="homeSectionThree">
        <Title gridArea="title">Compare os nosos Planos</Title>
        <Formik
          initialValues={{ minutes: '', priceId: '', planId: '' }}
          validationSchema={validate}
          onSubmit={handleFormikSubmit}
        >
          {({
            errors,
            touched,
            handleChange,
            values,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit} data-test="homeSectionThreeForm">
              <Label>
                <InputTitle htmlFor="priceId">
                  Selecione a origem e destino
                </InputTitle>

                <Select
                  name="priceId"
                  id="priceId"
                  onChange={handleChange}
                  value={values.priceId}
                  error={errors.priceId}
                >
                  <option value="">Origem e Destino</option>
                  {prices &&
                    prices.map((price) => (
                      <option value={price.id} key={price.id}>
                        {`Origem: ${price.source.code}  // Destino: ${price.destination.code}`}
                      </option>
                    ))}
                </Select>
                {errors.priceId && (
                  <Text error={errors.priceId}>{errors.priceId}</Text>
                )}
              </Label>
              <Label>
                <InputTitle htmlFor="planId"> Selecione um plano</InputTitle>

                <Select
                  name="planId"
                  id="planId"
                  onChange={handleChange}
                  value={values.planId}
                  error={errors.planId}
                >
                  <option value="">Plano</option>
                  {plans &&
                    plans.map((plan) => (
                      <option value={plan.id} key={plan.id}>
                        {plan.name}
                      </option>
                    ))}
                </Select>
                {errors.planId && (
                  <Text error={errors.planId}>{errors.planId}</Text>
                )}
              </Label>
              <Label>
                <InputTitle htmlFor="minutes">Quantidade de minutos</InputTitle>
                <Input
                  type="number"
                  id="minutes"
                  min="1"
                  max="1000"
                  name="minutes"
                  onChange={handleChange}
                  value={values.minutes}
                  error={errors.minutes}
                />
                {errors.minutes && (
                  <Text error={errors.minutes}>{errors.minutes}</Text>
                )}
              </Label>
              <ButtonSubmit>Comparar</ButtonSubmit>
            </Form>
          )}
        </Formik>
        {calcValue && (
          <>
            <Card
              color="var(--white)"
              bgColor="var(--primary)"
              gridArea="r2"
              bgUrl={phone2}
              data-test="homeSectionThreeCard"
            >
              <CardTitle>
                Com o plano
                {`${calcValue.planName}`}
              </CardTitle>

              <CardBody>
                R$
                {`${calcValue.result.priceWithPlan}`}
              </CardBody>
            </Card>
            <Card
              color="var(--white)"
              bgColor="var(--primary)"
              gridArea="r3"
              bgUrl={phone2}
              data-test="homeSectionThreeCard"
            >
              <CardTitle>
                Sem o plano
                {`${calcValue.planName}`}
              </CardTitle>

              <CardBody>
                R$
                {`${calcValue.result.priceWithoutPlan}`}
              </CardBody>
            </Card>
          </>
        )}
      </PlansSection>
    </Container>
  );
};

export default Home;
