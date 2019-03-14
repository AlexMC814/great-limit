import React, { Component, Fragment } from 'react';

import './LandingPage.scss';

import Hero from './Hero/Hero';
import About from './About/About';
import VideoCourse from './VideoCourse/VideoCourse';
import Programms from './Programms/Programms';
import Promo from './Promo/Promo';
import Footer from '../../UI/Footer/Footer';

export default class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <section className='hero-section'>
          <Hero />
        </section>
        <section className='about-section'>
          <About />
        </section>
        <section className='video-course-section'>
          <VideoCourse />
        </section>
        <section className='programms-section'>
          <Programms />
        </section>
        <section className='promo-section'>
          <Promo />
        </section>
        <footer>
          <Footer />
        </footer>
      </Fragment>
    );
  }
}
