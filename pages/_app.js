import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/globals.css";
import { Layout, Transition } from "../components";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
