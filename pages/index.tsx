import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import Pluralize from "pluralize";

interface IndexPageProps {
  data: {
    items: {
      id: string;
      title: string;
      price: number;
      amount: number;
      image: string;
    }[];
  };
}
export default function Home({ data }: IndexPageProps) {
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
          {data.items.map(
            ({
              id,
              title,
              price,
              amount,
              image,
            }: {
              id: string;
              title: string;
              price: number;
              amount: number;
              image: string;
            }) => (
              <div key={id}>
                <FlexBox>
                  <Figure>
                    <Img
                      src={`http://127.0.0.1:8090/api/files/e3iiocjxrn3afys/${id}/${image}`}
                      alt="{title}"
                    />
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

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/packs/records"
  );
  const data = await res.json();

  return { props: { data } };
};

const Wrapper = styled.div`
  padding: 1em;
`;

const Title = styled.div`
  text-align: center;
  margin: 2em 0 5em 0;

  @media (min-width: 768px) {
    margin: 0 0 1em 0;
  }
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

const H5 = styled.h5`
  margin: 0;
  font-size: 1.5em;
  @media (min-width: 768px) {
    font-size: 1.75em;
  }
`;

const P = styled.p`
  margin: 0.3em 0;
  font-size: 1.2em;
  color: var(--gray-text);

  @media (min-width: 768px) {
    font-size: 1.5em;
  }
`;

const PackSection = styled.section`
  padding-left: 1em;
`;

const FlexBox = styled.div`
  display: flex;
`;

const Figure = styled.figure`
  width: 15%;
  margin: 0;
  @media (min-width: 768px) {
    width: 10%;
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

  :hover {
    background-color: var(--darker-yellow-bg);
  }
`;
