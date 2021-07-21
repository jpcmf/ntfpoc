import { motion } from "framer-motion";
import { Layout } from "../components/Layout";

import "../styles/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <motion.div layout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </motion.div>
  );
}

export default MyApp;
