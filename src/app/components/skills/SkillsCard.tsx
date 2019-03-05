import * as React from 'react';
import './skillsCard.css';

export interface SkillsCardProps {
  title: String;
  icon: String;
}

export interface SkillsCardState {
  /* empty */
}

export default class SkillsCard extends React.Component<SkillsCardProps, SkillsCardState> {
  render() {
    return (
        <div className='skills-card-wrapper'>
            <i className={`fab fa-${this.props.icon} icon`}></i>
            <h3>{`${this.props.title}`}</h3>
        </div>
    );
  }
};