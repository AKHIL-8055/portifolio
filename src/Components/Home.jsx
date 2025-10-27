import React, { useRef, useState } from 'react';
import './Home.css';
import amazonpic from '../assets/amazonclonepic.png';
import CBpic from '../assets/akhil_aipic.png';
import Linkhubpic from '../assets/linkhubpic.png';
import MSpic from '../assets/meetingsummariserpic.png';
import RPSpic from '../assets/rockpapersisscorpic.png';
import SCpic from '../assets/skincarepic.png';
import TMpic from '../assets/taskmanager.jpg';
import jobpic from '../assets/jobsportalpic.png'; 
import logo from '../assets/logo.jpg';
import linkedinIcon from '../assets/linkedin.png';
import leetcodeIcon from '../assets/leetcode.png';
import githubIcon from '../assets/githublogo.png';
import gfgIcon from '../assets/gfglogo.png';

const Home = () => {
  // Refs for smooth scrolling to sections
  const homeRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const certificatesRef = useRef(null);
  const contactRef = useRef(null);

  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

// Projects data - GitHub URLs updated, no demo URLs
const projects = [
  {
    id: 1,
    title: "Job Portal for Unorganized Sector",
    description: "A comprehensive job portal designed to connect workers from the unorganized sector with potential job providers. This platform simplifies the process of finding employment for workers in sectors like cleaning, catering, delivery, and construction. Features include worker registration, job posting by employers, search and filter options, and secure contact between employers and workers.",
    technologies: ["React","Spring Boot", "MySQL", "REST APIs"],
    githubUrl: "https://github.com/AKHIL-8055/Jobs-Portal-Backend-v1.0",
    image: jobpic
  },
  {
    id: 2,
    title: "LinkHub - Class WhatsApp Group Finder",
    description: "A platform to help university students find and join class WhatsApp groups. In many universities, students attend different classes for different subjects, leading to communication gaps. LinkHub bridges this gap by providing a centralized platform where students can search, join, and interact with class-specific groups securely. It supports user authentication, group management, and privacy features.",
    technologies: ["React", "Spring Boot", "MySQL", "REST APIs"],
    githubUrl: "https://github.com/AKHIL-8055/LinkHub_public",
    image: Linkhubpic
  },
  {
    id: 3,
    title: "Meeting Summarizer",
    description: "A web application that converts meeting audio files into clear, concise text summaries. Users can upload audio recordings, and the system uses AI-powered speech-to-text processing to generate summarized meeting notes. This helps teams save time on manual note-taking and improves information retention.",
    technologies: ["ReactJS", "Spring Boot", "Python", "Whisper API"],
    githubUrl: "https://github.com/AKHIL-8055/Meeting-Summarizer",
    image: MSpic
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Users can create tasks, assign them to team members, set deadlines, and track progress through an interactive dashboard.",
    technologies: ["React", "Spring Boot", "MySQL", "REST APIs"],
    githubUrl: "https://github.com/AKHIL-8055/Task-Management-App",
    image: TMpic
  },
  // Mini Projects
  {
    id: 5,
    title: "Chatbot using Gemini API",
    description: "A conversational AI chatbot that allows users to interact for information retrieval, FAQs, and casual conversation. The frontend is built with ReactJS, the backend uses Spring Boot, and Gemini API powers the AI responses.",
    technologies: ["ReactJS", "Spring Boot", "Gemini API"],
    githubUrl: "https://github.com/AKHIL-8055/Chatbot-",
    image: CBpic
  },
  {
    id: 6,
    title: "Rock Paper Scissors Game",
    description: "A simple frontend game where users can play Rock-Paper-Scissors against the computer. Built with interactive UI elements and animations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/AKHIL-8055/Rock-Paper-Scissors-game",
    image: RPSpic
  },
  {
    id: 7,
    title: "Skin Care Website",
    description: "A frontend web application showcasing skincare products, tips, and routines. Built entirely in ReactJS for a responsive and interactive user experience.",
    technologies: ["ReactJS"],
    githubUrl: "https://github.com/AKHIL-8055/SkinCare",
    image: SCpic
  },
  // {
  //   id: 8,
  //   title: "Food Delivery Backend",
  //   description: "Backend API for a food delivery application with features like restaurant management, order placement, tracking, and user authentication. Designed to handle multiple concurrent requests efficiently.",
  //   technologies: ["Spring Boot", "MySQL", "REST APIs"],
  //   githubUrl: "#",
  //   image: FDpic
  // },
  {
    id: 9,
    title: "Amazon Clone",
    description: "A frontend clone of the Amazon website built with HTML and CSS. It demonstrates responsive product listings, navigation, and basic layout design principles.",
    technologies: ["HTML", "CSS"],
    githubUrl: "https://github.com/AKHIL-8055/Amazon_clone",
    image: amazonpic
  }
];


  // Certificate data
const certificates = [
  {
    id: 1,
    title: "Java Certification",
    issuer: "Infosys Springboard",
    date: "2023",
    description: "Completed the Java Programming course covering OOP concepts, data structures, and exception handling.",
    url: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:1718be47-a626-4757-9100-859e1be0c4d8"
  },
  {
    id: 2,
    title: "JavaScript Certification",
    issuer: "Cisco Networking Academy",
    date: "2022",
    description: "Completed the JavaScript Essentials course covering fundamentals.",
    url: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:de2364d1-7e63-4925-9f42-8a26e9997a30"
  },
  {
    id: 3,
    title: "3rd Prize - Project Expo",
    issuer: "VIT-AP University",
    date: "2024",
    description: "Awarded for LinkHub class WhatsApp group finder project at VIT-AP Project Expo 2024",
    url: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:74cf7e05-c346-493d-9003-191480ab32a0"
  },
  {
    id: 4,
    title: "Ongoing Technical Achievements",
    description: `
      Projects Built: 5+ Java Full Stack Projects
      DSA Proficiency: 500+ Problems Solved (Java)
    `,
    url: "#"
  }
];


  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Full Stack Developer</div>
        <ul className="nav-links">
          <li><button className="nav-button" onClick={() => scrollToSection(homeRef)}>Home</button></li>
          <li><button className="nav-button" onClick={() => scrollToSection(educationRef)}>Education</button></li>
          <li><button className="nav-button" onClick={() => scrollToSection(projectsRef)}>Projects</button></li>
          <li><button className="nav-button" onClick={() => scrollToSection(experienceRef)}>Experience</button></li>
          <li><button className="nav-button" onClick={() => scrollToSection(skillsRef)}>Skills</button></li>
          <li><button className="nav-button" onClick={() => scrollToSection(certificatesRef)}>Certificates</button></li>
          <li><button className="nav-button" onClick={() => scrollToSection(contactRef)}>Contact</button></li>
        </ul>
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
        {isMenuOpen && (
          <ul className="mobile-menu">
            <li><button className="nav-button" onClick={() => scrollToSection(homeRef)}>Home</button></li>
            <li><button className="nav-button" onClick={() => scrollToSection(educationRef)}>Education</button></li>
            <li><button className="nav-button" onClick={() => scrollToSection(projectsRef)}>Projects</button></li>
            <li><button className="nav-button" onClick={() => scrollToSection(experienceRef)}>Experience</button></li>
            <li><button className="nav-button" onClick={() => scrollToSection(skillsRef)}>Skills</button></li>
            <li><button className="nav-button" onClick={() => scrollToSection(certificatesRef)}>Certificates</button></li>
            <li><button className="nav-button" onClick={() => scrollToSection(contactRef)}>Contact</button></li>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm <span className="highlight">Akhil</span></h1>
          <p className="hero-subtitle">Full Stack Developer & AI Enthusiast</p>
          <p className="hero-description">
I’m a final-year B.Tech CSE student at Vellore Institute of Technology with a strong passion for full-stack development. I’ve built over 5 end-to-end web applications and solved 500+ DSA problems. I’m proficient in Java, JavaScript, SQL, and full-stack Java development. I specialize in building high-performance web solutions with intuitive frontends, robust backends, and secure, AI-integrated architectures.
          </p>
          <div className="hero-buttons">
            <button className="btn primary" onClick={() => window.open('https://acrobat.adobe.com/id/urn:aaid:sc:AP:60f7b18a-c8ad-4400-a1ae-ee58503d8add', '_blank')}>
              View Resume
            </button>
            <button className="btn secondary" onClick={() => scrollToSection(projectsRef)}>View Projects</button>
          </div>
          <div className="hero-stats">
                  <div className="social-icons">
          <a href="https://www.linkedin.com/in/akhil-vulchi-404b761a9/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://leetcode.com/u/Akhil-8055/" target="_blank" rel="noopener noreferrer">
            <img src={leetcodeIcon} alt="LeetCode" />
          </a>
          <a href="https://github.com/AKHIL-8055" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.geeksforgeeks.org/user/vulchi2t5f/" target="_blank" rel="noopener noreferrer">
            <img src={gfgIcon} alt="GeeksforGeeks" />
          </a>
        </div>
          </div>
        </div>
        <div className="hero-image">
          {/* <div className="profile-image"></div> */}
          <img src={logo} alt="Akhil Vulchi" />
        </div>

      </section>

      {/* Education Section */}
      <section ref={educationRef} className="section">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          <div className="education-card">
            <h3>Bachelor of Technology in Computer Science</h3>
            <p className="institution">Vellore Institute of Technology, AP</p>
            <p className="duration">2022 - 2026</p>
          </div>
          <div className="education-card">
            <h3>Intermediate Education</h3>
            <p className="institution">Narayana Junior College</p>
            <p className="duration">2020 - 2022</p>
          </div>
          <div className="education-card">
            <h3>School Education</h3>
            <p className="institution">Sri Chaitanya Techno School</p>
            <p className="duration">2019 - 2020</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="section">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubUrl} className="btn github" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="btn secondary" target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="section">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          <div className="experience-item">
            <h3>Frontend Developer Intern</h3>
            <a className="company" href='https://media.maigha.com/'>Maigha Media Private Limited</a>
            <p className="duration">June 2025 - August 2025</p>
            <ul>
              <li>Supported the integration of Google Sign-In within the frontend services</li>
              <li>Assisted in integrating magic link authentication features</li>
              <li>Contributed to establishing connection between frontend components and backend endpoints</li>
              <li>Implemented basic UI elements as per company design and wireframes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skills-list">
              <span className="skill-item">Java</span>
              <span className="skill-item">JavaScript</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Frontend Technologies</h3>
            <div className="skills-list">
              <span className="skill-item">ReactJS</span>
              <span className="skill-item">Tailwind CSS</span>
              <span className="skill-item">HTML5</span>
              <span className="skill-item">CSS3</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend Technologies</h3>
            <div className="skills-list">
              <span className="skill-item">Spring Boot</span>
              <span className="skill-item">Spring Security</span>
              <span className="skill-item">Spring Data JPA</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Databases</h3>
            <div className="skills-list">
              <span className="skill-item">MySQL</span>
              <span className="skill-item">PostgreSQL</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools & Platforms</h3>
            <div className="skills-list">
              <span className="skill-item">Git & GitHub</span>
              <span className="skill-item">Postman</span>
              <span className="skill-item">VS Code</span>
              <span className="skill-item">IntelliJ IDEA</span>

            </div>
          </div>
          <div className="skill-category">
            <h3>Problem Solving</h3>
            <div className="skills-list">
              <span className="skill-item">Data Structures</span>
              <span className="skill-item">Algorithms</span>
              <span className="skill-item">solved problems (500+)</span>
              
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section ref={certificatesRef} className="section">
        <h2 className="section-title">Certificates & Achievements</h2>
        <div className="certificates-grid">
          {certificates.map(cert => (
            <div key={cert.id} className={`certificate-card ${cert.id === 3 ? 'achievement-card' : ''}`}>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <span className="cert-date">{cert.date}</span>
              {cert.description && <p className="achievement-desc">{cert.description}</p>}
              <button 
                className="btn secondary" 
                onClick={() => window.open(cert.url, '_blank')}
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always open to discussing new opportunities and interesting projects.</p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong> vulchiakhil@gmail.com
              </div>
              <div className="contact-item">
                <strong>Phone:</strong> +91 8125725307
              </div>
              <div className="contact-item">
                <strong>Location:</strong> Amaravati , India
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/akhil-vulchi-404b761a9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/AKHIL-8055" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://leetcode.com/u/Akhil-8055/" target="_blank" rel="noopener noreferrer">LeetCode</a>
              <a href="https://www.geeksforgeeks.org/user/vulchi2t5f/" target="_blank" rel="noopener noreferrer">GFG</a>
            </div>
            <div className="quote-section">
              <h4>Great software is not just about writing code—it's about solving real problems with elegant solutions.</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Home;



