import styled from 'styled-components';

interface InputProps {
  error: string | undefined;
}

interface CardProps {
  bgColor?: string;
  color?: string;
  gridArea?: string;
  bgUrl: string;
}

interface TextProps {
  error: string | undefined;
}

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const SectionOne = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);

  h1 {
    font-size: 4rem;
    padding-bottom: 20px;
  }

  p {
    font-size: 2rem;
    width: 50%;
  }
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(11, 12, 16, 0.5);
    position: absolute;
    top: 0;

    z-index: -1;
  }
`;

export const SectionTwo = styled.section`
  width: 100%;
  height: 100vh;
  background-color: var(--quinary);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const Card = styled.div<CardProps>`
  width: 100%;
  grid-area: ${({ gridArea }) => gridArea || ''};
  height: 80%;
  background-image: url(${({ bgUrl }) => bgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${({ color }) => color || 'var(--white)'};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(11, 12, 16, 0.7);
    position: absolute;
    top: 0;

    z-index: -1;
  }
`;

export const Title = styled.p`
  color: var(--white);
  font-size: 4rem;
  height: 50px;
  margin-bottom: 30px;
`;

export const Plans = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.p`
  font-size: 4rem;
  height: 50px;
  margin-bottom: 30px;
  line-height: 6rem;
`;

export const CardBody = styled.p`
  font-size: 3rem;
  height: 50px;
  margin-bottom: 30px;
`;

export const SectionThree = styled.section`
  width: 100%;
  height: 100vh;
  background-color: var(--secondary);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'title title title'
    'form r1 r2';
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  gap: 20px;
`;

export const Form = styled.form`
  grid-area: form;
  width: 100%;
  height: 80%;
  background-color: var(--primary);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  strong a {
    color: var(--primary);

    :hover,
    :active {
      text-decoration: underline;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
  width: 80%;
  height: 75px;
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: ${({ error }) => (error ? '1px solid var(--red)' : 'none')};
  transition: 0.4s;
  font-size: 1.6rem;
  background-color: var(--white);
  padding-left: 5px;

  :focus {
    outline: none !important;
    border: none;
    box-shadow: ${({ error }) =>
      error ? '0 0 7px  var(--red)' : '0 0 9px var(--hover1)'};
  }
`;

export const Select = styled.select<InputProps>`
  width: 100%;
  height: 40px;
  /* border-radius: 5px; */
  border: ${({ error }) => (error ? '1px solid var(--red)' : 'none')};
  transition: 0.4s;
  font-size: 1.6rem;
  background-color: var(--white);
  padding-left: 5px;

  :focus {
    outline: none !important;
    border: none;
    box-shadow: ${({ error }) =>
      error ? '0 0 7px  var(--red)' : '0 0 9px var(--quaternary)'};
  }
`;

export const Text = styled.p<TextProps>`
  color: ${({ error }) => (error ? 'var(--red)' : 'var(--white)')};
  width: 80%;
  height: 10px;
  margin-top: 4px;
  font-size: 1.4rem;
`;

export const InputTitle = styled.label`
  color: var(--white);
  font-size: 1.4rem;
  margin-bottom: 5px;
`;

export const ButtonSubmit = styled.button`
  border-radius: 10px;
  width: 80%;
  height: 40px;
  transition: 0.4s;
  color: var(--primary);
  font-size: 1.8rem;
  background-color: var(--quaternary);
`;

export const MoneyText = styled.p`
  color: var(--white);
  font-size: 2rem;
`;
