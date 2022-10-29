import { Footer, Header } from "components";
import "tailwindcss/tailwind.css";
import "style/global.css";

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
