import { Product } from "components";
import Head from "next/head";

export default function Home({ product }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Product {...product} />
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  const PRODUCT_ID = "6701794328741";

  const url = new URL(process.env.URL || "http://localhost:3000");
  url.pathname = "/api/product/" + PRODUCT_ID;

  const res = await fetch(url.toString());

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product: data },
  };
}
