import * as React from "react";
import "./homePage.css";
import Header from "../components/header/Header";
import Skills from "../components/skills/Skills";
import Contact from "../components/contact-form/Contact";
import fetchData from "../api";

export interface HomePageProps {
  /* Empty */
}

export interface HomePageState {
  skills: SkillsData;
}

export interface SkillsData {
  items?: Array<object>;
}

export default class HomePage extends React.Component<
  HomePageProps,
  HomePageState
> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      skills: {
        items: []
      }
    };
  }
  async componentDidMount() {
    const skills = await fetchData({ content_type: "skills" });

    this.setState({
      skills: skills
    });
  }
  render() {
    const { skills } = this.state;
    return (
      <div className="homepage-wrapper">
        <Header />
        <Skills skills={skills} />
        <Contact />
      </div>
    );
  }
}
