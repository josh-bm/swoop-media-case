import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import Pluralize from "pluralize";

type Packs = {
  id: number;
  title: string;
  price: number;
  amount: number;
  image: string;
};

export default function Home({ packs }: { packs: Packs[] }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Inbox</title>
        <meta name="description" content="Redeem your packs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Title>
          <H1>My Inbox</H1>
          <H2>Redeem your packs</H2>
        </Title>
        <div>
          {packs?.map(
            ({
              id,
              title,
              price,
              amount,
              image,
            }: {
              id: number;
              title: string;
              price: number;
              amount: number;
              image: string;
            }) => (
              <div key={id}>
                <FlexBox>
                  <Figure>
                    <Img src={`http://localhost:3000/${image}`} alt="{title}" />
                  </Figure>

                  <PackSection>
                    <H5>
                      You have received {amount} {Pluralize("pack", amount)}
                    </H5>
                    <P>{title}</P>
                    <P>USD ${price}</P>
                  </PackSection>
                </FlexBox>
                <HR />
              </div>
            )
          )}
          <ClaimButton>Claim All</ClaimButton>
        </div>
      </Wrapper>
    </div>
  );
}

// Fetch json
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/packs.json");
  const packs = await res.json();

  return { props: { packs } };
};

//Styled Components

const Wrapper = styled.div`
  padding: 1em 3em;
`;

const Title = styled.div`
  text-align: center;
  margin: 0 0 3em 0;
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 3.25em;

  @media (min-width: 768px) {
    font-size: 4em;
  }
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 1.5em;

  @media (min-width: 768px) {
    font-size: 1.75em;
  }
`;

const FlexBox = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 1em;
  }
`;

const PackSection = styled.section`
  text-align: center;

  @media (min-width: 768px) {
    text-align: initial;
  }
`;

const H5 = styled.h5`
  margin: 0;
  font-size: 1.5em;
  @media (min-width: 768px) {
    font-size: 1.75em;
  }
`;

const P = styled.p`
  margin: 0;
  font-size: 1.2em;
  color: var(--gray-text);

  @media (min-width: 768px) {
    font-size: 1.5em;
  }
`;

const Figure = styled.figure`
  display: flex;
  margin: 0 auto 2em auto;
  gap: 1em;
  width: 30%;

  @media (min-width: 425px) {
    width: 20%;
  }

  @media (min-width: 768px) {
    width: 20%;
    margin: 0;
  }

  @media (min-width: 1080px) {
    width: 15%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const HR = styled.hr`
  background-color: var(--dark-gray-line);
  margin: 2em 0;
`;

const ClaimButton = styled.button`
  background-color: var(--yellow-bg);
  color: var(--yellow-text);
  border: none;
  border-radius: 5px;
  padding: 0.3em 0.5em;
  cursor: pointer;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 4em;

  @media (min-width: 768px) {
    margin: 0;
  }

  :hover {
    background-color: var(--darker-yellow-bg);
  }
`;
