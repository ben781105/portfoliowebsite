import FadeInWhenVisible from '../Motion'
import './about.css'

function About() {
  return (
    <div className='about' id='about'>
      <FadeInWhenVisible>
        <h1>About</h1>
      </FadeInWhenVisible>

      <div className="about-content">
        <FadeInWhenVisible variant="fadeLeft" delay={0.2} className="about-text">
          <div className="about-text">
            <p>
              I'm a <span style={{ color: '#e2f87b' }}>self-taught</span> coder and passionate <span style={{ color: '#e2f87b' }}>freelancer</span> with a strong
              drive for continuous learning and improvement. My journey into tech began out of pure curiosity, which grew into a deep
              commitment to mastering code and building impactful solutions.
            </p>
            <p>
              Through countless hours of hands-on projects and self-study, I've gained expertise in modern web development,
              allowing me to turn ideas into well-designed, efficient websites.
            </p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible variant="scaleUp" delay={0.4} className="about-info">
          <div className="about-info">
            <span>
              <h4>Email</h4>
              <p>benardleno78@gmail.com</p>
            </span>
            <span>
              <h4>What I do</h4>
              <p>Freelancer</p>
            </span>
            <span>
              <h4>Phone</h4>
              <p>+256 708 693 920</p>
            </span>
            <span>
              <h4>Rate</h4>
              <p>$5 per hour</p>
            </span>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  )
}

export default About;
