import * as React from "react";
import SkillsCard from "./SkillsCard";
import Contentful from "../Contentful";
import "./skills.css";

export interface SkillsProps {
  /* empty */
}

export interface SkillsState {
  /* empty */
}

export default class Skills extends React.Component<SkillsProps, SkillsState> {
  render() {
    return (
      <div>
        {/* tslint:disable-next-line:no-any */}
        <Contentful
          query={{ content_type: "skills" }}
          render={(items: object) => {
            return (
              <div className="skills-wrapper container">
                {Object.keys(items).map((key: string, i: number) => {
                  return (
                    <SkillsCard
                      key={i}
                      title={items[key].fields.name}
                      icon={items[key].fields.icon}
                    />
                  );
                })}
              </div>
            );
          }}
        />
      </div>
    );
  }
}
