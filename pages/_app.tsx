import "../styles/globals.css";
import type { AppProps } from "next/app";
import LayOut from "../components/layouts";
import NavContextProvider from "../context/nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavContextProvider>
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </NavContextProvider>
  );
}

export default MyApp;
