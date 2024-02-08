import { useState } from 'react';
import './App.scss';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosSearch } from 'react-icons/io';
import { MdArrowRight } from 'react-icons/md';
import { RxDividerVertical } from 'react-icons/rx';
import { FaGift } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

import { GrMail } from "react-icons/gr";
function App() {
  return (
    <>
      <nav className="mobile-nav">
        <div className="bgsu-logo">BGSU</div>

        <div className="mobile-nav-right-wrapper">
          <IoIosSearch size="1.5rem" />
          <RxHamburgerMenu size="1.5rem" />
        </div>
      </nav>

      <div className="desktop-nav-wrapper">
        <div className="bgsu-header">Bowling Green State University</div>
        <nav className="desktop-nav">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ fontSize: '3rem' }}>BGSU</div>
              <div
                style={{
                  fontSize: '2rem',
                  paddingLeft: '20px',
                  borderLeft: '1px solid white'
                }}
              >
                Pre College Programs
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '100px'
              }}
            >
              <div style={{ display: 'flex', gap: '20px' }}>
                <div>Academics</div>
                <div>Admissions</div>
                <div>About</div>
                <div>Athletics</div>
                <div>Alumni</div>
                <div>Libraries</div>
                <div>Research</div>
                <div>Students</div>
                <div>International</div>
                <div>News</div>
              </div>
              <div className="right-bottom-desktop-nav">
                <div>
                  Gift
                  <FaGift />
                </div>
                <div>MyBGSU</div>
                <div>
                  Email
                  <GrMail />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="main-wrapper">
        <main>
          <div className="middle-main">
            <div className="left-main">
              <div>Available Summer Camps and Programs</div>
              <div>Summer Camp Experiences Application Resource Page</div>
            </div>
            <div>
              <div className="header-text-wrapper">
                <h1>CyberGuardians</h1>
                <div>
                  BGSU / Pre-College Programs / Summer Academic and Youth
                  Programs / Available Camps and Programs / CyberGuardians
                </div>
              </div>
              <img
                className="cybersecurity-image"
                src="https://www.bgsu.edu/content/dam/BGSU/academics/data/Data-on-Computer-Screen.jpg/jcr:content/renditions/kraken-large.jpg"
              />
              <div className="bottom-main">
                <div className='date-text'>June 24-28, 2024</div>
                <button className="apply-now-btn">
                  Apply Now
                  <MdArrowRight className="md-arrow-right" />
                </button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti minima, aspernatur nostrum commodi voluptates ex porro
                dolore non ipsa quae ducimus, doloremque, consequatur similique
                quidem id reprehenderit ipsum! Beatae impedit eligendi dolor
                dolorum! Deleniti, sapiente. Et quas, quibusdam vero minima
                obcaecati sapiente non dolorum facilis. Pariatur optio illo, eos
                consequuntur vitae impedit. Voluptatum quae deleniti rem commodi
                officia consequatur in? Ea a, voluptatum ullam iusto animi nam
                non voluptatibus porro odio debitis explicabo fuga inventore ab,
                quidem minima ipsum perspiciatis!
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
