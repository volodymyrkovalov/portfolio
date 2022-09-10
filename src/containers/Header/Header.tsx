import styles from "./Header.module.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div id="home" className={`${styles.appHeader} app__flex`}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={styles.headerInfo}
      >
        <div className={styles.headerBadge}>
          <div className={`${styles.badgeCmp} app__flex`}>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p>Hi, I am</p>
              <h1>Volodymyr</h1>
            </div>
          </div>

          <div className={`${styles.tagCmp} app__flex`}>
            <p>Full Stack JavaScript Developer</p>
            <p>Front-End Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={styles.headerImg}
      >
        <img src={images.profile} alt="profile background" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile circle"
          className={styles.overlayCircle}
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={styles.headerCircles}
      >
        {[images.react, images.node, images.typescript].map((circle, index) => (
          <div className={`${styles.circleCmp} app__flex`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default AppWrap(Header, "home");
