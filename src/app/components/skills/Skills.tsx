import * as React from "react";
import SkillsCard from "./SkillsCard";
import "./skills.css";
import { SkillsData } from "../../containers/HomePage";

export interface SkillsProps {
  skills: SkillsData;
}

export interface SkillsState {
  /* empty */
}

export interface Skill {
  fields?: Field;
}

export interface Field {
  name: string;
  icon: string;
}

export default class Skills extends React.Component<SkillsProps, SkillsState> {
  render() {
    const { skills } = this.props;
    return (
      <div className="skills-wrapper container">
        {skills &&
          skills.items &&
          skills.items.map((skillItem: Skill, i: number) => {
            if (!skillItem || !skillItem.fields) {
              return;
            }
            return (
              <SkillsCard
                key={i}
                title={skillItem.fields.name}
                icon={skillItem.fields.icon}
              />
            );
          })}
      </div>
    );
  }
}
