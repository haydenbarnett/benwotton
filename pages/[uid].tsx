import Head from "next/head";
import type { PrismicDocument } from "@prismicio/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { SliceZone } from "@components";
import { Client } from "../utils/prismicHelpers";
import { queryRepeatableDocuments } from "../utils/queries";
import { pageResolver, projectsResolver } from "../utils/resolvers";

type PageProps = {
  page?: any;
  projects?: any;
};

const Page = ({ page, projects }: PageProps) => {
  if (page?.data) {
    const { meta, slices } = pageResolver(page?.data);
    const allProjects = projectsResolver(projects);
    return (
      <>
        <Head>
          {meta.metaTitle && <title>{meta.metaTitle}</title>}
          {meta.metaDescription && (
            <meta property="og:description" content={meta.metaDescription} />
          )}
        </Head>
        <SliceZone slices={slices} projects={allProjects} />
      </>
    );
  }
  return null;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const client = Client();
  const response = await client.get({
    pageSize: 200,
  });
  const page = response.results.filter((doc) => doc.uid === context?.params?.uid)[0];
  const globals = response.results.filter((doc) => doc.type === "globals")[0];
  const projects = response.results.filter((doc) => doc.type === "project");
  return {
    props: {
      page,
      globals,
      projects,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await queryRepeatableDocuments((doc: PrismicDocument) => doc.type === "page");
  return {
    paths: pages.map((page: PrismicDocument) => `/${page.uid}`),
    fallback: false,
  };
};

export default Page;
