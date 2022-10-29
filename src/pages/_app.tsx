import { Footer, Header } from "components";
import "tailwindcss/tailwind.css";
import "style/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
