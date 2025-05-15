import './services.css';
import FadeInWhenVisible from '../Motion';
import { FaPenNib, FaPagelines, FaCode, FaBlog } from 'react-icons/fa';
function Services() {
  const servicesData = [
    {
      icon: <FaPenNib className='service-icon' />,
      title: "Web development",
      description: "As a freelancer developer, I translate design concepts into functional and responsive websites that go beyond aesthetics.",
      tech: ["HTML, CSS and Javascript", "React", "Django"],
    },
    {
      icon: <FaPagelines className='service-icon' />,
      title: "Landing Page",
      description: "Crafting engaging landing pages that captivate users and drive conversions.",
      tech: ["HTML, CSS and Javascript", "React"],
    },
    {
      icon: <FaCode className='service-icon' />,
      title: "Frontend Development",
      description: "I do anything related to frontend, from debugging, styling and optimizing to creating responsive and user-friendly interfaces.",
      tech: ["HTML, CSS and Javascript", "Responsive", "React"],
    },
    {
      icon: <FaBlog className='service-icon' />,
      title: "Blog development",
      description: "I create dynamic and engaging blog websites that engage visitors and provide valuable content.",
      tech: ["React", "Django", "MySQL"],
    },
  ];

  return (
    <div className='services' id='services'>
    
        <FadeInWhenVisible><h1>Services</h1></FadeInWhenVisible>
  
  <FadeInWhenVisible delay={0.2}>
    <p className='service-intro'>
    From crafting visually captivating designs to developing seamless and responsive websites, I ensure a holistic digital presence.
  </p>
  </FadeInWhenVisible>


<div className='serviceslist'>
  {servicesData.map((service, index) => (
    <FadeInWhenVisible>
      <div className='service' key={index}>
        <div className='service-name'>
          {service.icon}
          <p>{service.title}</p>
        </div>
      <div className='service-description'>
          <p>{service.description}</p>
      
        <span>
          {service.tech.map((techItem) => (
           
              <li>{techItem}</li>
          
          ))}
        </span>
      </div>

      {index !== servicesData.length - 1 && <hr />}
    </div>
    </FadeInWhenVisible>
  ))}
</div>

    </div>
  );
}

export default Services;
