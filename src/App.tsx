import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

export default function DataScientistPortfolio() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'skills', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-sm z-10">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex justify-center space-x-6">
            {['Home', 'Portfolio', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              John Doe
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8"
            >
              Data Scientist & Machine Learning Engineer
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button
                onClick={() => scrollToSection('portfolio')}
                className="bg-white text-blue-700 px-6 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors"
              >
                View My Work
              </button>
            </motion.div>
          </div>
        </section>

        <section id="portfolio" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-100 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a href="#" className="text-blue-600 hover:underline">Learn More</a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {['Python', 'Machine Learning', 'Deep Learning', 'Data Visualization', 'Statistical Analysis', 'SQL', 'TensorFlow', 'PyTorch'].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <p className="font-medium">{skill}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="space-y-12">
              {[
                { title: 'Predictive Analytics Dashboard', description: 'Developed a real-time dashboard for predictive analytics using Python, Dash, and machine learning algorithms.' },
                { title: 'Natural Language Processing Tool', description: 'Created an NLP tool for sentiment analysis and text classification using BERT and PyTorch.' },
                { title: 'Computer Vision Application', description: 'Built a computer vision application for object detection and image segmentation using TensorFlow and OpenCV.' },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center"
                >
                  <div className="md:w-1/2 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-gray-200 h-48 rounded-lg"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
            <div className="max-w-md mx-auto">
              <p className="text-center mb-8">Feel free to reach out for collaborations or just a friendly hello</p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <Github className="w-8 h-8" />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}