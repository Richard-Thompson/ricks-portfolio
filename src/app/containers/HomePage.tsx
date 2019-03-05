import * as React from 'react';
import './homePage.css';
import Header from '../components/header/Header';
import Skills from '../components/skills/Skills';
import Contact from '../components/contact-form/Contact';

export interface HomePageProps {
 /* Empty */
}

export interface HomePageState {
  /* empty */
}

export default class HomePage extends React.Component<HomePageProps, HomePageState> {
  render() {
    return (
        <div className='homepage-wrapper'>
            <Header />
            <Skills />
            <Contact />
        </div>
    );
  }
};