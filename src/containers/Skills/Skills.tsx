import styles from "./Skills.module.scss";
import {
  SiAmazonaws,
  SiApollographql,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMaterialui,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPassport,
  SiPostgresql,
  SiRabbitmq,
  SiReact,
  SiRedux,
  SiReduxsaga,
  SiSass,
  SiSocketdotio,
  SiStyledcomponents,
  SiSwagger,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiWebpack,
  SiYarn,
} from "react-icons/si";

import { FaClipboardList, FaInfinity } from "react-icons/fa";
import { BsBraces, BsFillCloudArrowUpFill } from "react-icons/bs";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";

const skills = [
  {
    title: "Front-end",
    technologies: [
      { title: "HTML", icon: <SiHtml5 /> },
      { title: "CSS", icon: <SiCss3 /> },
      { title: "SASS", icon: <SiSass /> },
      { title: "Tailwind CSS", icon: <SiTailwindcss /> },
      { title: "JavaScript", icon: <SiJavascript /> },
      { title: "TypeScript", icon: <SiTypescript /> },
      { title: "React", icon: <SiReact /> },
      { title: "Redux", icon: <SiRedux /> },
      { title: "Redux Saga", icon: <SiReduxsaga /> },
      { title: "MUI", icon: <SiMaterialui /> },
      { title: "NextJS", icon: <SiNextdotjs /> },
      { title: "React Hook Form", icon: <FaClipboardList /> },
      { title: "React Testing Library", icon: <SiTestinglibrary /> },
      { title: "Apollo Client", icon: <SiApollographql /> },
      { title: "Styled Components", icon: <SiStyledcomponents /> },
      { title: "Framer Motion", icon: <SiFramer /> },
    ],
  },
  {
    title: "Back-end",
    technologies: [
      { title: "JavaScript", icon: <SiJavascript /> },
      { title: "TypeScript", icon: <SiTypescript /> },
      { title: "Node JS", icon: <SiNodedotjs /> },
      { title: "Express", icon: <SiExpress /> },
      { title: "Nest JS", icon: <SiNestjs /> },
      { title: "MongoDB", icon: <SiMongodb /> },
      { title: "PostgreSQL", icon: <SiPostgresql /> },
      { title: "Swagger", icon: <SiSwagger /> },
      { title: "TypeORM", icon: <BsBraces /> },
      { title: "PassportJS", icon: <SiPassport /> },
      { title: "Cloudinary", icon: <BsFillCloudArrowUpFill /> },
      { title: "Apollo Server", icon: <SiApollographql /> },
      { title: "RabbitMQ", icon: <SiRabbitmq /> },
    ],
  },
  {
    title: "Miscellaneous",
    technologies: [
      { title: "Git", icon: <SiGit /> },
      { title: "GitHub", icon: <SiGithub /> },
      { title: "Firebase", icon: <SiFirebase /> },
      { title: "Webpack", icon: <SiWebpack /> },
      { title: "Heroku", icon: <SiHeroku /> },
      { title: "Jest", icon: <SiJest /> },
      { title: "NPM", icon: <SiNpm /> },
      { title: "Yarn", icon: <SiYarn /> },
      { title: "CI/CD", icon: <FaInfinity /> },
      { title: "Socket.io", icon: <SiSocketdotio /> },
      { title: "AWS", icon: <SiAmazonaws /> },
      { title: "Docker", icon: <SiDocker /> },
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills">
      <h2 className={`head-text ${styles.header}`}>
        My <span>Skills</span>
      </h2>

      <div className={styles.profiles}>
        {skills.map((skillGroup, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            className={styles.profileItem}
            key={skillGroup.title + index}
            transition={{ duration: 1, type: "tween" }}
          >
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {skillGroup.title}
            </h2>
            <div className={styles.technologiesList}>
              {skillGroup.technologies.map((tech, index) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2, type: "tween" }}
                  className={styles.techItem}
                  key={tech.title + index}
                >
                  <span>{tech.icon}</span>
                  <h6>{tech.title}</h6>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default AppWrap(
  MotionWrap(Skills, styles.skills),
  "skills",
  "app__whitebg"
);
