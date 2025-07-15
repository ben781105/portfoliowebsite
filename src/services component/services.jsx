import './services.css';
import FadeInWhenVisible from '../Motion';
import { FaPenNib, FaPagelines, FaCode, FaBlog } from 'react-icons/fa';
import { FaPalette } from 'react-icons/fa6';
function Services() {
  const servicesData = [
    {
      icon: <FaPenNib className='service-icon' />,
      title: "Web development",
      description: "As a freelancer developer, I translate design concepts into functional and responsive websites that go beyond aesthetics.",
      tech: ["HTML, CSS and Javascript", "React and Redux", "Django","tailwind"],
    },
    {
      icon:<FaPalette className='service-icon'/>,
      title: "Figma to Code",
      description: "I convert Figma designs into clean and efficient, responsive websites using modern frontend tools like React and Tailwind.",
      tech: ["HTML, CSS and Javascript", "React", "tailwind"],
    },
    {
      icon: <FaPagelines className='service-icon' />,
      title: "Landing Page",
      description: " I Craft engaging, mobile-first landing pages that captivate users and drive conversions.",
      tech: ["HTML, CSS and Javascript", "React","tailwind"],
    },
    {
      icon: <FaCode className='service-icon' />,
      title: "Frontend Engineering",
      description: "UI implementation , debugging and performance optimization, I focus on building interactive, accessible, and responsive user interfaces",
      tech: ["HTML, CSS and Javascript", "tailwind", "React","Django"],
    },
    {
      icon: <FaBlog className='service-icon' />,
      title: "Website Redesign",
      description: "I modernize outdated websites by improving layout, usability, and responsiveness using the latest web technologies.",
      tech: ["React", "Django", "Tailwind","Javascript"],
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
