import './App.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosSearch } from 'react-icons/io';
import { FaGift } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

export default function App() {
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
                <div>Mock</div>
                <div>Mock</div>
                <div>Mock</div>
                <div>Mock</div>
                <div>Mock</div>
                <div>Mock</div>
                <div>Mock</div>
                <div>Mock</div>
                <div>Mock</div>
                <div>Mock</div>
              </div>
              <div className="right-bottom-desktop-nav">
                <div>
                  Mock
                  <FaGift />
                </div>
                <div>Mock</div>
                <div>
                  Mock
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
                <div style={{ fontSize: '0.8rem' }}>
                  <a href="">BGSU</a> / <a href="">Pre-College Programs</a> /
                  <a href="">Summer Academic and Youth Programs</a> /{' '}
                  <a href="">Available Camps and Programs</a> /{' '}
                  <a href="">CyberGuardians</a>
                </div>
              </div>
              <img
                className="cybersecurity-image"
                src="https://www.bgsu.edu/content/dam/BGSU/academics/data/Data-on-Computer-Screen.jpg/jcr:content/renditions/kraken-large.jpg"
              />
              <div className="bottom-main">
                <div className="date-text">
                  <strong>June 24-28, 2024</strong>
                </div>
                <button className="apply-now-btn">Apply Now</button>
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
