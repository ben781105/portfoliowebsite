import FadeInWhenVisible from '../Motion'
import './portfolio.css'
import Slider from '../swiper component/slider'

function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <FadeInWhenVisible><h1>Portfolio</h1></FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <p>What sets me apart is not just my technical <span style={{color: '#e2f87b'}}>expertise</span> but also my commitment to sharing great ideas and learning from others.</p>
          <sub className='tap'>Tap image to view details about project</sub>
        </FadeInWhenVisible>
        <FadeInWhenVisible variant='scaleUp' delay={0.5}><Slider /></FadeInWhenVisible>
    </div>
  )
}

export default Portfolio
