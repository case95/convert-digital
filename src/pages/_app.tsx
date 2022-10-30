import { Footer, Header } from "components";
import "tailwindcss/tailwind.css";
import "style/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <a href="#main" className="absolute -left-96 z-1">
        Skip to main content
      </a>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
