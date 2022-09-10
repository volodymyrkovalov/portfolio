import styles from "./About.module.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";

const abouts = [
  {
    title: "Web developer",
    description: "I am a good web developer",
    imgUrl: images.about01,
  },
  {
    title: "Frontend developer",
    description: "I am a good web developer",
    imgUrl: images.about03,
  },
  {
    title: "Backend developer",
    description: "I am a good web developer",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className={`head-text ${styles.header}`}>
        I'm a <span>full stack</span> developer from <span>Ukraine</span> who
        fancies creating <span>Quality</span> software using most modern and
        <span> cutting edge </span> tech
      </h2>

      <div className={styles.profiles}>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className={styles.profileItem}
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, styles.about),
  "about",
  "app__whitebg"
);
