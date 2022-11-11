import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { GetServerSideProps } from "next";

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

const Title = styled.div`
  text-align: center;
  margin: 2em;
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 3.25em;
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 1.5em;
`;

const H5 = styled.h5`
  margin: 0;
  font-size: 1em;
`;

const P = styled.p`
  margin: 0;
  font-size: 0.9em;
  color: #2f3440;
`;

const PackSection = styled.section`
  padding-left: 1em;
`;

const Flexbox = styled.div`
  display: flex;
`;

const Grid = styled.div`
  display: grid;
`;

const Border = styled.div`
  border: solid white 1px;
`;

const Figure = styled.figure`
  width: 20%;
  margin: 0;
`;

const Img = styled.img`
  width: 100%;
`;

const HR = styled.hr`
  background-color: #2f3440;
`;

export default function Home({ data }: IndexPageProps) {
  console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>My Inbox</title>
        <meta name="description" content="Redeem your packs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
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
                <Flexbox>
                  <Figure>
                    <Img
                      src={`http://127.0.0.1:8090/api/files/e3iiocjxrn3afys/${id}/${image}`}
                      alt="{title}"
                    />
                  </Figure>

                  <PackSection>
                    <H5>You have received {amount} new packs</H5>
                    <P>{title}</P>
                    <P>USD ${price}</P>
                  </PackSection>
                </Flexbox>
                <HR />
              </div>
            )
          )}
        </div>
      </div>
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
