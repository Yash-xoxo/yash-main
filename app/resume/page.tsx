'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Download, ArrowLeft, Layout, GitBranch } from 'lucide-react'
import { useState } from 'react'
import ResumeFlowchart from '@/components/resume-flowchart'

export default function ResumePage() {
  const [viewMode, setViewMode] = useState<'resume' | 'flowchart'>('resume')

  const handlePrint = () => {
    window.print()
  }

  return (
    <main className="min-h-screen bg-[#222831] text-[#EEEEEE]">
      <header className="sticky top-0 z-50 border-b border-[#393E46]/50 bg-[#222831]/95 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button asChild variant="ghost" className="text-[#00ADB5] hover:text-white">
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio</Link>
          </Button>
          
          <div className="flex items-center space-x-4">
            <div className="flex bg-[#393E46]/50 rounded-lg p-1">
              <Button
                onClick={() => setViewMode('resume')}
                variant={viewMode === 'resume' ? 'default' : 'ghost'}
                size="sm"
                className={`text-xs ${viewMode === 'resume' ? 'bg-[#00ADB5] text-white' : 'text-[#EEEEEE] hover:text-white'}`}
              >
                <Layout className="mr-2 h-3 w-3" />
                Resume
              </Button>
              <Button
                onClick={() => setViewMode('flowchart')}
                variant={viewMode === 'flowchart' ? 'default' : 'ghost'}
                size="sm"
                className={`text-xs ${viewMode === 'flowchart' ? 'bg-[#00ADB5] text-white' : 'text-[#EEEEEE] hover:text-white'}`}
              >
                <GitBranch className="mr-2 h-3 w-3" />
                Flowchart
              </Button>
            </div>
            
            <Button onClick={handlePrint} className="bg-[#00ADB5] hover:bg-[#00ADB5]/80 text-white">
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </div>
        </div>
      </header>

      {viewMode === 'resume' ? (
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto bg-[#393E46]/30 border border-[#00ADB5]/20 rounded-lg p-6 print:bg-white print:text-black print:border-0">
            <h1 className="text-3xl font-bold text-[#00ADB5]">Yash Gupta</h1>
            <p className="mt-2">
              Subash Nagar, Bareilly, Uttar Pradesh, India · Phone: 7839491779 · Email: yashg5577@gmail.com
            </p>
            <p className="mt-1">
              LinkedIn: Yash Gupta · GitHub: Yash-xoxo
            </p>

            <h2 className="mt-6 text-2xl font-semibold text-[#00ADB5]">Professional Summary</h2>
            <p className="mt-2 text-[#EEEEEE]/80">
              Passionate and motivated Computer Science graduate eager to explore new technologies, tools, and backend
              operations such as automation and log analysis. Skilled in DevOps practices with hands-on internship
              experience and a drive to continuously learn and improve systems.
            </p>

            <h2 className="mt-6 text-2xl font-semibold text-[#00ADB5]">Education</h2>
            <p className="mt-2 font-medium">B.Tech in Computer Science (Expected July 2026)</p>
            <p className="text-[#EEEEEE]/80">
              Shri Ram Murti Smarak College of Engineering and Technology, Bareilly
            </p>
            <p className="text-[#EEEEEE]/60">Relevant Coursework: Operating Systems</p>

            <h2 className="mt-6 text-2xl font-semibold text-[#00ADB5]">Internship Experience</h2>
            <p className="mt-2 font-medium">DevOps Intern | Linux World, Jaipur (June 2025 – August 2025)</p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-[#EEEEEE]/80">
              <li>Automated CI/CD pipelines using Jenkins</li>
              <li>Deployed containerized microservices on AWS ECS</li>
              <li>Kubernetes cluster management</li>
              <li>Infrastructure as Code using Terraform</li>
              <li>Implemented monitoring and alerting systems using Prometheus and Grafana</li>
              <li>Integrated complete DevOps pipeline</li>
            </ul>

            <h2 className="mt-6 text-2xl font-semibold text-[#00ADB5]">Technical Skills</h2>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-[#EEEEEE]/80">
              <li>Programming: Python (NumPy, Pandas, Flask, Streamlit), JavaScript, Dart, Go, Bash</li>
              <li>DevOps Tools & Platforms: Docker, Kubernetes, RedHat RHEL 9, PuTTY, Bash Scripting, Terraform, Ansible, Jenkins, AWS Cloud, Git/GitHub, MongoDB</li>
              <li>Cloud & CI/CD: Load Balancer, AWS Storage Services, IAM, AWS Container Services</li>
              <li>Monitoring Tools: Prometheus, Grafana</li>
            </ul>

            <h2 className="mt-6 text-2xl font-semibold text-[#00ADB5]">Projects</h2>
            <p className="mt-2 font-medium">Menu-Based Web App using Streamlit | Major Project</p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-[#EEEEEE]/80">
              <li>Developed a menu-driven web application displaying and managing various backend tasks on a single webpage</li>
              <li>Role: Backend Developer</li>
              <li>Technologies: Python, Streamlit, Flask</li>
              <li>Outcome: Improved accessibility and centralized task execution interface</li>
            </ul>

            <h2 className="mt-6 text-2xl font-semibold text-[#00ADB5]">Certifications</h2>
            <p className="mt-2 text-[#EEEEEE]/80">To be updated</p>

            <h2 className="mt-6 text-2xl font-semibold text-[#00ADB5]">Languages & Soft Skills</h2>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-[#EEEEEE]/80">
              <li>Languages: Hindi, English (Fluent)</li>
              <li>Leadership and Team Collaboration</li>
            </ul>
          </div>
        </section>
      ) : (
        <ResumeFlowchart />
      )}
    </main>
  )
}
