import type { PrismicDocument } from "@prismicio/client";

export const API_ENDPOINT = `https://${process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT}.cdn.prismic.io/api/v2`;
export const API_TOKEN =
  process.env.PRISMIC_ACCESS_TOKEN ?? process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN;

export const linkResolver = (doc: PrismicDocument) => {
  if (doc.type === "page") {
    return `/${doc.uid}`;
  }
  return "/";
};

export const hrefResolver = (doc: PrismicDocument) => {
  if (doc.type === "page") {
    return "/[uid]";
  }
  return "/";
};
