import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Socials } from "../../components";


const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <div className="flex flex-col justify-center items-center mb-10">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-8"
            >
              Let's Work <span className="text-accent">Together.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" max-w-[700px] mx-auto lg:mx-0 text-center"
            >
              Thank you for taking the time to explore my video editing
              portfolio. Whether you're a filmmaker, business owner, or content
              creator, I look forward to the possibility of collaborating with
              you to bring your ideas to life. Let's embark on a visual journey
              together, where every frame tells a story and leaves a lasting
              impression.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col justify-center items-center gap-4 w-full mx-auto text-lg"
          >
            <p>
              Email:{" "}
              <span className="text-accent font-medium">
                sifeddineelaabid@gmail.com
              </span>
            </p>
            <p>
              Phone Number:{" "}
              <span className="text-accent font-medium">
                +212 7 72 17 44 89
              </span>
            </p>
            <Socials />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
