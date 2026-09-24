import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";
import { experiences } from "../../content/experiences";

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="experience">
      <EduIntro>Here is my work experience!</EduIntro>
      {experiences.map(({ title, org, period, desc }) => (
        <EduList key={`${title}-${org}`}>
          <div className="title">{`${title} | ${org} | ${period}`}</div>
          {desc && <div className="desc">{desc}</div>}
        </EduList>
      ))}
    </Wrapper>
  );
};

export default Experience;
