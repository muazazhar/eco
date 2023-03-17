import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "p9pr8gm1",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: string) => builder.image(source);
