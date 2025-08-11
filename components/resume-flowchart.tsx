'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface FlowchartNode {
  id: string
  title: string
  content: string | string[]
  type: 'heading' | 'content'
}

const resumeData: FlowchartNode[] = [
  {
    id: 'contact',
    title: 'Contact Information',
    content: 'Yash Gupta\nSubash Nagar, Bareilly, Uttar Pradesh, India\nPhone: 7839491779\nEmail: yashg5577@gmail.com\nLinkedIn: Yash Gupta\nGitHub: Yash-xoxo',
    type: 'heading'
  },
  {
    id: 'summary',
    title: 'Professional Summary',
    content: 'Passionate and motivated Computer Science graduate eager to explore new technologies, tools, and backend operations such as automation and log analysis. Skilled in DevOps practices with hands-on internship experience and a drive to continuously learn and improve systems.',
    type: 'content'
  },
  {
    id: 'education',
    title: 'Education',
    content: 'B.Tech in Computer Science (Expected July 2026)\nShri Ram Murti Smarak College of Engineering and Technology, Bareilly\nRelevant Coursework: Operating Systems',
    type: 'heading'
  },
  {
    id: 'internship',
    title: 'Internship Experience',
    content: [
      'DevOps Intern | Linux World, Jaipur (June 2025 – August 2025)',
      '• Automated CI/CD pipelines using Jenkins',
      '• Deployed containerized microservices on AWS ECS',
      '• Kubernetes cluster management',
      '• Infrastructure as Code using Terraform',
      '• Implemented monitoring and alerting systems using Prometheus and Grafana',
      '• Integrated complete DevOps pipeline'
    ],
    type: 'content'
  },
  {
    id: 'skills',
    title: 'Technical Skills',
    content: [
      '• Programming: Python (NumPy, Pandas, Flask, Streamlit), JavaScript, Dart, Go, Bash',
      '• DevOps Tools & Platforms: Docker, Kubernetes, RedHat RHEL 9, PuTTY, Bash Scripting, Terraform, Ansible, Jenkins, AWS Cloud, Git/GitHub, MongoDB',
      '• Cloud & CI/CD: Load Balancer, AWS Storage Services, IAM, AWS Container Services',
      '• Monitoring Tools: Prometheus, Grafana'
    ],
    type: 'content'
  },
  {
    id: 'projects',
    title: 'Projects',
    content: [
      'Menu-Based Web App using Streamlit | Major Project',
      '• Developed a menu-driven web application displaying and managing various backend tasks on a single webpage',
      '• Role: Backend Developer',
      '• Technologies: Python, Streamlit, Flask',
      '• Outcome: Improved accessibility and centralized task execution interface'
    ],
    type: 'content'
  },
  {
    id: 'certifications',
    title: 'Certifications',
    content: 'To be updated',
    type: 'content'
  },
  {
    id: 'languages',
    title: 'Languages & Soft Skills',
    content: [
      '• Languages: Hindi, English (Fluent)',
      '• Leadership and Team Collaboration'
    ],
    type: 'content'
  }
]

export default function ResumeFlowchart() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % resumeData.length)
        setIsAnimating(false)
      }, 1000)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  }

  const nodeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#222831] via-[#393E46] to-[#222831] p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center text-[#00ADB5] mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Resume Flowchart
        </motion.h1>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div 
            className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00ADB5] to-[#393E46]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          {resumeData.map((node, index) => (
            <motion.div
              key={node.id}
              className={`relative mb-12 ${index % 2 === 0 ? 'ml-0' : 'ml-16'}`}
              initial="hidden"
              animate={currentIndex === index ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {/* Timeline dot */}
              <motion.div
                className={`absolute w-4 h-4 rounded-full bg-[#00ADB5] border-4 border-[#222831] ${
                  index % 2 === 0 ? 'left-6' : 'left-20'
                }`}
                variants={nodeVariants}
                animate={currentIndex === index ? "pulse" : "visible"}
              />
              
              {/* Content card */}
              <motion.div
                className={`bg-[#393E46]/80 backdrop-blur-sm border border-[#00ADB5]/30 rounded-lg p-6 shadow-xl ${
                  index % 2 === 0 ? 'ml-16' : 'mr-16'
                }`}
                variants={nodeVariants}
              >
                <motion.h2 
                  className="text-2xl font-bold text-[#00ADB5] mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {node.title}
                </motion.h2>
                
                <motion.div
                  className="text-[#EEEEEE]/90"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {Array.isArray(node.content) ? (
                    <ul className="space-y-2">
                      {node.content.map((item, itemIndex) => (
                        <motion.li 
                          key={itemIndex}
                          className="text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + itemIndex * 0.1, duration: 0.3 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm leading-relaxed">{node.content}</p>
                  )}
                </motion.div>
              </motion.div>
              
              {/* Connecting line */}
              {index < resumeData.length - 1 && (
                <motion.div
                  className={`absolute w-16 h-0.5 bg-gradient-to-r from-[#00ADB5] to-transparent ${
                    index % 2 === 0 ? 'left-8 top-8' : 'left-20 top-8'
                  }`}
                  variants={lineVariants}
                />
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Progress indicator */}
        <motion.div 
          className="flex justify-center mt-8 space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {resumeData.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? 'bg-[#00ADB5]' : 'bg-[#393E46]'
              }`}
              animate={currentIndex === index ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.5 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
