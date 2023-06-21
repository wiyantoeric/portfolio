import Head from "next/head";

function Container({ pageName, children }) {
  return (
    <>
      <Head>
        <title>{pageName}</title>
        <link rel="icon" href="/favicon.ico" ></link>
      </Head>
      {children}
    </>
  );
}

export default Container;
