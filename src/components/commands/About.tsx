import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";
import { profile } from "../../content/profile";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>{profile.name}</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>{profile.role}</HighlightAlt> based in{" "}
        {profile.location}.
      </p>
      <p>{profile.summary}</p>
    </AboutWrapper>
  );
};

export default About;
