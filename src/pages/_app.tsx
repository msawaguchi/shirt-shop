import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";

// import logoImg from '../assets/logo.svg';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
        <Header>
          {/* <img src={logoImg} alt="" /> */}
          <span>😋</span>
        </Header>
        <Component {...pageProps} />
    </Container>
  )
}
