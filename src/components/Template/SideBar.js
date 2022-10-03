import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>

      <header>
        <h2>Elly Aiala</h2>
        <p><a href="mailto:ellymcguffog@gmail.com">ellymcguffog@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Elly</p>
      <p>
        I am a risk-focused professional with experience in financial compliance. Currently, I am
        the Chief Compliance Officer at <a href="https://www.boostb2b.com/">Boost Payment Solutions</a>.
        I am deeply interested and involved in the fintech sphere with a passion to continue
        learning, evolving with the industry and working with a motivated team.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
