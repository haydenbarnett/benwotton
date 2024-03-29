import { GetStaticProps } from "next";
import { Client } from "@utils";

const Home = () => {
  return null;
};

export const getStaticProps: GetStaticProps = async () => {
  const client = Client();
  const response = await client.get({
    pageSize: 200,
  });
  const globals = response.results.filter((doc) => doc.type === "globals")[0];
  const projects = response.results.filter((doc) => doc.type === "project");
  return {
    props: {
      globals,
      projects,
    },
  };
};

export default Home;
