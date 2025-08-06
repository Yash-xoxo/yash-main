'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Calendar, Award, Code, Server, Monitor, Database, ChevronDown, Menu, X, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

// Star component for twinkling effect
const Star = ({ style }: { style: React.CSSProperties }) => (
  <div 
    className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
    style={style}
  />
)

// Shooting star component
const ShootingStar = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
    initial={{ 
      x: -100, 
      y: -100, 
      opacity: 0,
      scale: 0
    }}
    animate={{ 
      x: window.innerWidth + 100, 
      y: window.innerHeight + 100, 
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1, 0]
    }}
    transition={{
      duration: 2,
      delay: delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 10 + 5,
      ease: "easeOut"
    }}
    style={{
      boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.8)',
      filter: 'blur(0.5px)'
    }}
  />
)

// Stars background component
const StarsBackground = () => {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; animationDelay: string }>>([])
  const [shootingStars, setShootingStars] = useState<Array<{ id: number; delay: number }>>([])

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`
        })
      }
      setStars(newStars)
    }

    // Generate shooting stars
    const generateShootingStars = () => {
      const newShootingStars = []
      for (let i = 0; i < 5; i++) {
        newShootingStars.push({
          id: i,
          delay: Math.random() * 8
        })
      }
      setShootingStars(newShootingStars)
    }

    generateStars()
    generateShootingStars()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Twinkling stars */}
      {stars.map((star) => (
        <Star
          key={star.id}
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.animationDelay
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {shootingStars.map((shootingStar) => (
        <ShootingStar
          key={shootingStar.id}
          delay={shootingStar.delay}
        />
      ))}
    </div>
  )
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const y = useTransform(smoothProgress, [0, 1], ['0%', '50%'])

  const skills = [
    { name: 'Docker', category: 'DevOps', icon: '🐳' },
    { name: 'Kubernetes', category: 'DevOps', icon: '☸️' },
    { name: 'Jenkins', category: 'DevOps', icon: '🔧' },
    { name: 'AWS', category: 'DevOps', icon: '☁️' },
    { name: 'Terraform', category: 'Infra', icon: '🏗️' },
    { name: 'Ansible', category: 'Infra', icon: '⚙️' },
    { name: 'Flask', category: 'Code', icon: '🐍' },
    { name: 'Git', category: 'Code', icon: '📝' },
    { name: 'Linux', category: 'DevOps', icon: '🐧' },
    { name: 'Bash', category: 'Code', icon: '💻' },
    { name: 'CI/CD', category: 'DevOps', icon: '🔄' },
    { name: 'Systemd', category: 'DevOps', icon: '⚡' },
    { name: 'Server Monitoring', category: 'Monitoring', icon: '📊' },
    { name: 'Log Reader', category: 'Monitoring', icon: '📋' },
    { name: 'Troubleshooting', category: 'Monitoring', icon: '🔍' }
  ]

  const projects = [
    {
      title: 'CI/CD Pipeline with Jenkins',
      description: 'Automated deployment pipeline with Jenkins, Docker, and Kubernetes integration for seamless software delivery',
      tags: ['Jenkins', 'Docker', 'CI/CD', 'Kubernetes'],
      link: 'https://linkedin.com/in/yash-gupta-4285b8312',
      image: '/placeholder.svg?height=200&width=300&text=CI/CD+Pipeline+Dashboard'
    },
    {
      title: 'Menu-Based Python Automation',
      description: 'Interactive CLI tool for system automation and task management with intuitive menu-driven interface',
      tags: ['Python', 'Automation', 'CLI', 'System Admin'],
      link: 'https://linkedin.com/in/yash-gupta-4285b8312',
      image: '/placeholder.svg?height=200&width=300&text=Python+CLI+Menu+Interface'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Real-time data visualization dashboard with monitoring capabilities and interactive charts',
      tags: ['Analytics', 'Dashboard', 'Monitoring', 'Visualization'],
      link: 'https://linkedin.com/in/yash-gupta-4285b8312',
      image: '/placeholder.svg?height=200&width=300&text=Analytics+Dashboard+Charts'
    },
    {
      title: 'Stepper Motor Control with PS3 Joystick',
      description: 'Hardware control system using Python and PS3 controller integration for precise motor movements',
      tags: ['Python', 'Hardware', 'Control', 'IoT'],
      link: 'https://github.com/Yash-xoxo',
      image: '/placeholder.svg?height=200&width=300&text=Hardware+Control+System'
    },
    {
      title: 'Custom Compiler in Python',
      description: 'Built a custom programming language compiler from scratch with lexical analysis and code generation',
      tags: ['Python', 'Compiler', 'Language', 'Parser'],
      link: 'https://github.com/Yash-xoxo',
      image: '/placeholder.svg?height=200&width=300&text=Compiler+Architecture+Diagram'
    },
    {
      title: 'Messaging Automation Tool',
      description: 'Multi-platform messaging CLI tool for WhatsApp, Twitter, Gmail, and SMS with scheduling features',
      tags: ['Python', 'Automation', 'Messaging', 'API'],
      link: 'https://github.com/Yash-xoxo',
      image: '/placeholder.svg?height=200&width=300&text=Multi-Platform+Messaging+Tool'
    }
  ]

  const certifications = [
    {
      title: 'RedHat RHCSA – System Administration',
      platform: 'LinkedIn',
      link: 'https://linkedin.com/in/yash-gupta-4285b8312',
      icon: '🎓'
    },
    {
      title: 'Azure Cognitive Services',
      platform: 'Microsoft / Coursera',
      link: 'https://linkedin.com/in/yash-gupta-4285b8312',
      icon: '☁️'
    },
    {
      title: 'AWS Technical Essentials',
      platform: 'AWS via LinkedIn',
      link: 'https://linkedin.com/in/yash-gupta-4285b8312',
      icon: '🏆'
    },
    {
      title: 'Hands-on Challenges in DevOps Tools',
      platform: 'LinkedIn',
      link: 'https://linkedin.com/in/yash-gupta-4285b8312',
      icon: '🔧'
    },
    {
      title: 'Ultimate Linux Troubleshooting Training (2025)',
      platform: 'Udemy',
      link: 'https://linkedin.com/in/yash-gupta-4285b8312',
      icon: '🐧'
    }
  ]

  const timeline = [
    {
      year: '2020',
      title: 'Class 12 - PCM',
      description: 'Completed Higher Secondary Education with Physics, Chemistry, and Mathematics',
      icon: '📚',
      type: 'education',
      details: {
        subjects: ['Physics', 'Chemistry', 'Mathematics'],
        board: 'CBSE',
        focus: 'Science and Mathematics foundation'
      }
    },
    {
      year: '2022–2026',
      title: 'B.Tech in Computer Science',
      description: 'Pursuing Bachelor of Technology in Computer Science Engineering',
      icon: '🎓',
      type: 'education',
      details: {
        specialization: 'Computer Science Engineering',
        focus: 'DevOps, Cloud Computing, Software Development',
        currentYear: '3rd Year'
      }
    },
    {
      year: 'May 2025',
      title: 'Techvyom Pen Plotter Project Presentation',
      description: 'Presented innovative pen plotter project at college tech fest',
      icon: '🛠️',
      type: 'project',
      details: {
        event: 'College Tech Fest',
        achievement: 'Best Innovation Award',
        technology: 'Hardware Control Systems'
      }
    },
    {
      year: '2024',
      title: 'DevOps Internship @ Linux World',
      description: 'Specialized in Cloud, CI/CD, and Automation technologies',
      icon: '☁️',
      type: 'experience',
      details: {
        duration: '6 months',
        technologies: ['Docker', 'Kubernetes', 'Jenkins', 'AWS'],
        achievements: 'Automated deployment processes'
      }
    }
  ]

  const aspirations = [
    {
      title: 'Launch a Cloud-native DevOps Product',
      description: 'Build and launch a comprehensive DevOps platform',
      icon: '🚀'
    },
    {
      title: 'Teach DevOps via LinkedIn/YouTube',
      description: 'Share knowledge and mentor the next generation',
      icon: '📚'
    },
    {
      title: 'Contribute to Arch Linux/Open Source',
      description: 'Give back to the open source community',
      icon: '🐧'
    },
    {
      title: 'Expand into GitOps & AI-based Infrastructure',
      description: 'Explore cutting-edge infrastructure technologies',
      icon: '🤖'
    }
  ]

  const filteredSkills = activeFilter === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Smooth filter transition
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-[#222831] text-[#EEEEEE] min-h-screen relative">
        {/* Stars Background */}
        <StarsBackground />
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-[#222831]/95 backdrop-blur-md z-50 border-b border-[#393E46]/50 transition-all duration-300">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-xl font-bold text-[#00ADB5]"
            >
              Yash Gupta
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Timeline', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-[#00ADB5] transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ADB5] transition-all duration-300 group-hover:w-full"></span>
                </motion.button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="text-[#EEEEEE] hover:text-[#00ADB5] transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: isDarkMode ? 0 : 180 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </motion.div>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-[#EEEEEE] transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0, 
              height: isMenuOpen ? 'auto' : 0 
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#393E46]/95 backdrop-blur-md border-t border-[#00ADB5]/30 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {['About', 'Timeline', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left hover:text-[#00ADB5] transition-all duration-300 py-2"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </nav>

        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
          <motion.div style={{ y }} className="absolute inset-0 opacity-10">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-10 w-32 h-32 bg-[#00ADB5] rounded-full blur-3xl"
            />
            <motion.div 
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 right-10 w-48 h-48 bg-[#00ADB5] rounded-full blur-3xl"
            />
          </motion.div>
          
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm <span className="text-[#00ADB5] gradient-text">Yash</span>
              </motion.h1>
              <motion.h2 
                className="text-2xl md:text-3xl text-[#EEEEEE]/80 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                DevOps Engineer · B.Tech CSE Student
              </motion.h2>
              <motion.p 
                className="text-lg text-[#EEEEEE]/70 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Passionate about automating everything, building robust CI/CD pipelines, 
                and crafting scalable infrastructure solutions. Currently running on Arch Linux 
                and loving every bit of it.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button className="bg-[#00ADB5] hover:bg-[#00ADB5]/80 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00ADB5]/25">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#00ADB5] text-[#00ADB5] hover:bg-[#00ADB5] hover:text-white transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
              </motion.div>

              <motion.div 
                className="flex space-x-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {[
                  { href: "https://github.com/Yash-xoxo", icon: Github },
                  { href: "https://linkedin.com/in/yash-gupta-4285b8312", icon: Linkedin },
                  { href: "mailto:yashg5577@gmail.com", icon: Mail }
                ].map(({ href, icon: Icon }, index) => (
                  <motion.a 
                    key={href}
                    href={href} 
                    className="text-[#EEEEEE]/70 hover:text-[#00ADB5] transition-all duration-300 hover:scale-110"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative">
                <motion.img 
                  src="/placeholder.svg?height=400&width=400&text=Yash+Gupta+Profile" 
                  alt="Yash Gupta"
                  className="w-80 h-80 rounded-full mx-auto border-4 border-[#00ADB5] shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating Code Card */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 top-16 bg-[#393E46]/90 backdrop-blur-sm p-4 rounded-lg border border-[#00ADB5]/30 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <pre className="text-sm font-mono text-[#00ADB5]">
{`const yash = {
  tools: ["Docker", "Kubernetes", "Jenkins"],
  os: "Arch Linux",
  motto: "automate everything"
}`}
                  </pre>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          >
            <ChevronDown className="h-8 w-8 text-[#00ADB5] opacity-70" />
          </motion.div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-20 scroll-animate relative z-10">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl font-bold text-center mb-16"
            >
              My <span className="text-[#00ADB5]">Journey</span>
            </motion.h2>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="flip-card h-48">
                      <div className="flip-card-inner">
                        {/* Front */}
                        <div className="flip-card-front bg-[#393E46]/90 backdrop-blur-sm border border-[#00ADB5]/30 rounded-lg p-4 overflow-hidden">
                          <div className="flex items-start gap-3 mb-2 h-full">
                            <span className="text-2xl flex-shrink-0">{item.icon}</span>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-[#EEEEEE] font-bold text-base leading-tight mb-1 break-words">
                                {item.title}
                              </h3>
                              <p className="text-[#00ADB5] text-sm mb-2">{item.year}</p>
                              <p className="text-[#EEEEEE]/80 text-sm leading-relaxed line-clamp-3">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Back */}
                        <div className="flip-card-back bg-[#00ADB5]/95 backdrop-blur-sm border border-[#00ADB5] rounded-lg p-4 text-white overflow-hidden">
                          <h3 className="font-bold text-lg mb-3 break-words">{item.title}</h3>
                          <div className="text-sm space-y-2 overflow-y-auto max-h-32">
                            <p><strong>Duration:</strong> {item.year}</p>
                            <p><strong>Type:</strong> {item.type}</p>
                            <div>
                              <strong>Key Details:</strong>
                              <ul className="mt-1 space-y-1 text-xs">
                                {item.type === 'education' && item.title.includes('Class 12') && (
                                  <>
                                    <li>• Subjects: {item.details.subjects.join(', ')}</li>
                                    <li>• Board: {item.details.board}</li>
                                    <li>• Focus: {item.details.focus}</li>
                                  </>
                                )}
                                {item.type === 'education' && item.title.includes('B.Tech') && (
                                  <>
                                    <li>• Specialization: {item.details.specialization}</li>
                                    <li>• Current Status: {item.details.currentYear}</li>
                                    <li>• Focus Areas: {item.details.focus}</li>
                                  </>
                                )}
                                {item.type === 'project' && (
                                  <>
                                    <li>• Event: {item.details.event}</li>
                                    <li>• Achievement: {item.details.achievement}</li>
                                    <li>• Technology: {item.details.technology}</li>
                                  </>
                                )}
                                {item.type === 'experience' && (
                                  <>
                                    <li>• Duration: {item.details.duration}</li>
                                    <li>• Tech Stack: {item.details.technologies.join(', ')}</li>
                                    <li>• Key Achievement: {item.details.achievements}</li>
                                  </>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="w-4 h-4 bg-[#00ADB5] rounded-full border-4 border-[#222831] z-10"
                    whileInView={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  />
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-[#393E46]/20 scroll-animate relative z-10">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl font-bold text-center mb-16"
            >
              Technical <span className="text-[#00ADB5]">Skills</span>
            </motion.h2>

            {/* Filter Buttons */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {['All', 'DevOps', 'Monitoring', 'Code', 'Infra'].map((filter, index) => (
                <motion.div
                  key={filter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={activeFilter === filter ? "default" : "outline"}
                    onClick={() => handleFilterChange(filter)}
                    className={`transition-all duration-300 ${activeFilter === filter 
                      ? "bg-[#00ADB5] text-white shadow-lg shadow-[#00ADB5]/25" 
                      : "border-[#00ADB5] text-[#00ADB5] hover:bg-[#00ADB5] hover:text-white"
                    }`}
                  >
                    {filter}
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Grid with Flip Cards */}
            <motion.div 
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto"
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  className="flip-card h-32"
                >
                  <div className="flip-card-inner">
                    {/* Front */}
                    <div className="flip-card-front bg-[#393E46]/90 backdrop-blur-sm border border-[#00ADB5]/30 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">{skill.icon}</div>
                      <div className="text-[#EEEEEE] font-medium text-sm">{skill.name}</div>
                      <Badge variant="secondary" className="mt-2 bg-[#00ADB5]/20 text-[#00ADB5] text-xs">
                        {skill.category}
                      </Badge>
                    </div>
                    
                    {/* Back */}
                    <div className="flip-card-back bg-[#00ADB5]/95 backdrop-blur-sm border border-[#00ADB5] rounded-lg p-4 text-center text-white">
                      <div className="text-lg font-bold mb-2">{skill.name}</div>
                      <div className="text-xs leading-relaxed">
                        {skill.category === 'DevOps' && 'Container orchestration, CI/CD pipelines, automation'}
                        {skill.category === 'Monitoring' && 'System health tracking, log analysis, performance metrics'}
                        {skill.category === 'Code' && 'Development tools, version control, scripting'}
                        {skill.category === 'Infra' && 'Infrastructure as Code, cloud provisioning, configuration'}
                      </div>
                      <div className="mt-2 text-xs opacity-80">
                        Experience Level: {Math.floor(Math.random() * 3) + 2} years
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 scroll-animate relative z-10">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl font-bold text-center mb-16"
            >
              Featured <span className="text-[#00ADB5]">Projects</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className="flip-card h-80"
                >
                  <div className="flip-card-inner">
                    {/* Front */}
                    <div className="flip-card-front bg-[#393E46]/90 backdrop-blur-sm border border-[#00ADB5]/30 rounded-lg overflow-hidden">
                      <div className="relative h-48">
                        <img 
                          src={project.image || "/placeholder.svg"} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#393E46] to-transparent"></div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-[#EEEEEE] font-bold text-lg mb-2">{project.title}</h3>
                        <p className="text-[#EEEEEE]/70 text-sm line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mt-3">
                          {project.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-[#00ADB5]/20 text-[#00ADB5] text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Back */}
                    <div className="flip-card-back bg-[#00ADB5]/95 backdrop-blur-sm border border-[#00ADB5] rounded-lg p-6 text-white">
                      <h3 className="font-bold text-xl mb-4">{project.title}</h3>
                      <p className="text-sm leading-relaxed mb-4">{project.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-white/20 text-white text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-1">Key Features:</h4>
                        <ul className="text-xs space-y-1">
                          <li>• Automated deployment pipeline</li>
                          <li>• Scalable architecture</li>
                          <li>• Real-time monitoring</li>
                        </ul>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full border-white text-white hover:bg-white hover:text-[#00ADB5] mt-auto transition-all duration-300"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 bg-[#393E46]/20 scroll-animate relative z-10">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl font-bold text-center mb-16"
            >
              <span className="text-[#00ADB5]">Certifications</span> & Achievements
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className="flip-card h-48"
                >
                  <div className="flip-card-inner">
                    {/* Front */}
                    <div className="flip-card-front bg-[#393E46]/90 backdrop-blur-sm border border-[#00ADB5]/30 rounded-lg p-6 text-center">
                      <div className="text-4xl mb-4">{cert.icon}</div>
                      <h3 className="text-[#EEEEEE] text-lg font-bold leading-tight mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-[#00ADB5] text-sm">{cert.platform}</p>
                    </div>
                    
                    {/* Back */}
                    <div className="flip-card-back bg-[#00ADB5]/95 backdrop-blur-sm border border-[#00ADB5] rounded-lg p-6 text-white">
                      <h3 className="font-bold text-lg mb-3">{cert.title}</h3>
                      <div className="text-sm space-y-2 mb-4">
                        <p><strong>Platform:</strong> {cert.platform}</p>
                        <p><strong>Status:</strong> Certified</p>
                        <p><strong>Skills:</strong> 
                          {cert.title.includes('RHCSA') && ' System Administration, Linux'}
                          {cert.title.includes('Azure') && ' Cloud Services, AI/ML'}
                          {cert.title.includes('AWS') && ' Cloud Computing, Infrastructure'}
                          {cert.title.includes('DevOps') && ' CI/CD, Automation'}
                          {cert.title.includes('Linux') && ' Troubleshooting, System Management'}
                        </p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full border-white text-white hover:bg-white hover:text-[#00ADB5] transition-all duration-300"
                        onClick={() => window.open(cert.link, '_blank')}
                      >
                        View Certificate <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 scroll-animate relative z-10">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl font-bold text-center mb-16"
            >
              Latest <span className="text-[#00ADB5]">Blog Posts</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-[#393E46]/90 backdrop-blur-sm border-[#00ADB5]/30 h-full transition-all duration-300 hover:border-[#00ADB5] hover:shadow-lg hover:shadow-[#00ADB5]/10">
                    <CardHeader>
                      <div className="w-full h-32 bg-[#00ADB5]/20 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-4xl">🚧</span>
                      </div>
                      <CardTitle className="text-[#EEEEEE]">
                        Coming Soon
                      </CardTitle>
                      <CardDescription className="text-[#EEEEEE]/70">
                        Exciting DevOps content is on the way!
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="bg-[#00ADB5]/20 text-[#00ADB5]">
                          DevOps
                        </Badge>
                        <Badge variant="secondary" className="bg-[#00ADB5]/20 text-[#00ADB5]">
                          Tutorial
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Aspirations Section */}
        <section className="py-20 bg-[#393E46]/20 scroll-animate relative z-10">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl font-bold text-center mb-16"
            >
              Future <span className="text-[#00ADB5]">Aspirations</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {aspirations.map((aspiration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className="flip-card h-48"
                >
                  <div className="flip-card-inner">
                    {/* Front */}
                    <div className="flip-card-front bg-[#393E46]/90 backdrop-blur-sm border border-[#00ADB5]/30 rounded-lg p-6">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{aspiration.icon}</div>
                        <div>
                          <h3 className="text-[#EEEEEE] font-bold text-lg">{aspiration.title}</h3>
                          <p className="text-[#EEEEEE]/70 text-sm mt-2">{aspiration.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back */}
                    <div className="flip-card-back bg-[#00ADB5]/95 backdrop-blur-sm border border-[#00ADB5] rounded-lg p-6 text-white">
                      <h3 className="font-bold text-xl mb-4">{aspiration.title}</h3>
                      <div className="text-sm space-y-2">
                        <p><strong>Timeline:</strong> 2025-2027</p>
                        <p><strong>Focus Areas:</strong></p>
                        <ul className="text-xs space-y-1 mt-2">
                          {aspiration.title.includes('Product') && (
                            <>
                              <li>• Cloud-native architecture</li>
                              <li>• Kubernetes orchestration</li>
                              <li>• DevOps automation tools</li>
                            </>
                          )}
                          {aspiration.title.includes('Teach') && (
                            <>
                              <li>• Content creation</li>
                              <li>• Community building</li>
                              <li>• Knowledge sharing</li>
                            </>
                          )}
                          {aspiration.title.includes('Open Source') && (
                            <>
                              <li>• Linux kernel contributions</li>
                              <li>• Package maintenance</li>
                              <li>• Community involvement</li>
                            </>
                          )}
                          {aspiration.title.includes('GitOps') && (
                            <>
                              <li>• AI-driven infrastructure</li>
                              <li>• GitOps workflows</li>
                              <li>• Intelligent automation</li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 scroll-animate relative z-10">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl font-bold text-center mb-16"
            >
              Get In <span className="text-[#00ADB5]">Touch</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h3 className="text-2xl font-bold mb-8 text-[#00ADB5]">Let's Connect</h3>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "yashg5577@gmail.com", href: "mailto:yashg5577@gmail.com" },
                    { icon: Phone, label: "Phone", value: "+91 78394 91779", href: "tel:+917839491779" },
                    { icon: Github, label: "GitHub", value: "github.com/Yash-xoxo", href: "https://github.com/Yash-xoxo" },
                    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yash-gupta-4285b8312", href: "https://linkedin.com/in/yash-gupta-4285b8312" }
                  ].map(({ icon: Icon, label, value, href }, index) => (
                    <motion.div 
                      key={label}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <Icon className="h-6 w-6 text-[#00ADB5]" />
                      <div>
                        <p className="font-medium">{label}</p>
                        <a href={href} className="text-[#EEEEEE]/70 hover:text-[#00ADB5] transition-colors duration-300">
                          {value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Card className="bg-[#393E46]/90 backdrop-blur-sm border-[#00ADB5]/30 hover:border-[#00ADB5] transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-[#EEEEEE]">Send a Message</CardTitle>
                    <CardDescription className="text-[#EEEEEE]/70">
                      I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input 
                        placeholder="Your Name" 
                        className="bg-[#222831]/80 backdrop-blur-sm border-[#00ADB5]/30 text-[#EEEEEE] placeholder:text-[#EEEEEE]/50 focus:border-[#00ADB5] transition-all duration-300"
                      />
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input 
                        type="email" 
                        placeholder="Your Email" 
                        className="bg-[#222831]/80 backdrop-blur-sm border-[#00ADB5]/30 text-[#EEEEEE] placeholder:text-[#EEEEEE]/50 focus:border-[#00ADB5] transition-all duration-300"
                      />
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Textarea 
                        placeholder="Your Message" 
                        rows={5}
                        className="bg-[#222831]/80 backdrop-blur-sm border-[#00ADB5]/30 text-[#EEEEEE] placeholder:text-[#EEEEEE]/50 focus:border-[#00ADB5] transition-all duration-300 resize-none"
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-[#00ADB5] hover:bg-[#00ADB5]/80 text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#00ADB5]/25">
                        Send Message
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-[#393E46]/50 relative z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-[#EEEEEE]/70 mb-4 md:mb-0"
              >
                © 2025 Yash Gupta — Built with ❤️ on Arch Linux
              </motion.p>
              
              <motion.div 
                className="flex space-x-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {[
                  { href: "https://github.com/Yash-xoxo", icon: Github },
                  { href: "https://linkedin.com/in/yash-gupta-4285b8312", icon: Linkedin },
                  { href: "mailto:yashg5577@gmail.com", icon: Mail }
                ].map(({ href, icon: Icon }, index) => (
                  <motion.a 
                    key={href}
                    href={href} 
                    className="text-[#EEEEEE]/70 hover:text-[#00ADB5] transition-all duration-300"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
            
            <motion.div 
              className="flex justify-center space-x-8 mt-8 text-sm text-[#EEEEEE]/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button 
                className="hover:text-[#00ADB5] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.button>
              <motion.button 
                className="hover:text-[#00ADB5] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Use
              </motion.button>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  )
}
