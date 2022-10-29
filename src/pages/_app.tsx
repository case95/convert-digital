import { Footer, Header } from "components";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
