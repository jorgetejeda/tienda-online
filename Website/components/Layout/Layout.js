import Head from "next/head";
import Header from "./Header";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';



const client = new ApolloClient({
  uri: "http://localhost:8888/online-store/Server/",
  cache: new InMemoryCache()
});


const Layout = (props) => (
  <div>
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div className="Layout">
      <ApolloProvider client={client}>
        <Header />
        <Fade>
          <Container fluid="md">{props.children}</Container>
        </Fade>
      </ApolloProvider>
    </div>
  </div>
);

export default Layout;
