import { useState } from "react";
import styles from "./Work.module.scss";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import { images } from "../../constants";

interface IWork {
  title: string;
  imageUrl: string;
  tags: WorkType[];
  projectLink: string;
  codeLink: string;
  description: string;
}

type WorkType = "All" | "Frontend" | "Backend" | "Full stack";

const initialWorks = [
  {
    title: "!NTROVERT",
    imageUrl: images.about01,
    tags: ["Full stack"] as WorkType[],
    projectLink: "https://luxury-banoffee-3b694d.netlify.app",
    codeLink: "https://github.com/megapolisboy/social-media-app-frontend",
    description: 'MERN stack team project "Social media app !NTROVERT"',
  },
  {
    title: "Music app",
    imageUrl: images.about02,
    tags: ["Backend"] as WorkType[],
    projectLink: "",
    codeLink: "https://github.com/megapolisboy/music-app-backend",
    description: "Music app API with NestJS",
  },
  {
    title: "Spotify clone",
    imageUrl: images.spotify,
    tags: ["Frontend"] as WorkType[],
    projectLink: "https://spotify-clone-snowy-nine.vercel.app",
    codeLink: "https://github.com/megapolisboy/spotify-clone",
    description: "Spotify clone using 3rd party Spotify API with NextJS",
  },
  {
    title: "Amazon clone",
    imageUrl: images.amazon,
    tags: ["Frontend"] as WorkType[],
    projectLink: "https://amazon-clone-ebon-two.vercel.app",
    codeLink: "https://github.com/megapolisboy/amazon-clone",
    description: "Amazon clone with NextJS",
  },
  {
    title: "Uber clone",
    imageUrl: images.mobile,
    tags: ["Frontend"] as WorkType[],
    projectLink: "https://uber-clone-d290zkj18-megapolisboy.vercel.app/",
    codeLink: "https://github.com/megapolisboy/uber-clone",
    description: "Amazon clone with NextJS",
  },
];

const Work = () => {
  const [works, setWorks] = useState<IWork[]>(initialWorks);
  const [filterWork, setFilterWork] = useState<IWork[]>(initialWorks);
  const [activeFilter, setActiveFilter] = useState<WorkType>("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item: WorkType) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work: any) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className={styles.workFilter}>
        {["All", "Frontend", "Backend", "Full stack"].map((item, index) => (
          <div
            key={item + index}
            onClick={() => handleWorkFilter(item as WorkType)}
            className={`${styles.workFilterItem} app__flex p-text ${
              activeFilter === item ? styles.itemActive : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={styles.workPortfolio}
      >
        {filterWork.map((work: any, index) => (
          <div className={`${styles.workItem} app__flex`} key={index}>
            <div className={`${styles.workImg} app__flex`}>
              <img
                src={work.imageUrl}
                alt={work.title}
                className={
                  work.title === "Amazon clone"
                    ? styles.imageFill
                    : styles.imageCover
                }
              />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className={`${styles.workHover} app__flex`}
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className={`${styles.workContent} app__flex`}>
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className={`${styles.workTag} app__flex`}>
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};
export default AppWrap(
  MotionWrap(Work, styles.works),
  "work",
  "app__primarybg"
);
