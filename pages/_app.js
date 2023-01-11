import "../styles/globals.css";
import Layout from "./components/Layout";

import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
