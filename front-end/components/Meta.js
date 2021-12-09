import Head from "next/head";

const Meta = ({ title, keywords, description, siteTitle }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/romance.svg" />
      <title>{`${title} | ${siteTitle}`}</title>
    </Head>
  );
};

Meta.defaultProps = {
  siteTitle: "Welcome To ZoroShop - One Stop Solution",
  keywords: "electronics, buy electronics, cheap electroincs",
  description: "We sell the best products for cheap",
  author: "Sayan Mukherjee",
  title: "Sayan",
};

export default Meta;
