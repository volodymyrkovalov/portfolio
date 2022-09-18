import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/volodymyrkovalov">
        <SiGithub />
      </a>
      <a href="https://www.instagram.com/just.a.techie">
        <SiInstagram />
      </a>
      <a href="https://www.linkedin.com/in/volodymyr-kovalov-4b38b324b">
        <SiLinkedin />
      </a>
    </div>
  );
};
export default SocialMedia;
