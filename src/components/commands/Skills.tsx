import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";
import { skills } from "../../content/skills";

const Skills: React.FC = () => {
  return (
    <Wrapper data-testid="skills">
      <EduIntro>Here are my skills!</EduIntro>
      {skills.map(({ name, detail }) => (
        <EduList key={name}>
          <div className="title">{name}</div>
          <div className="desc">{detail}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

export default Skills;
