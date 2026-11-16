'use client'

import { useCallback, useEffect, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  Award,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Download,
  FolderGit2,
  GraduationCap,
  Github,
  Home,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Wrench,
} from 'lucide-react'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''
const RESUME_URL = `${BASE}/Yash-Gupta-Resume.pdf`
const GITHUB = 'https://github.com/Yash-xoxo'
const LINKEDIN = 'https://linkedin.com/in/yash-gupta-4285b8312'
const EMAIL = 'mail@yashx.cloud'
const PHONE = '+91 78394 91779'

/* ───────────────────────────── data (from resume) ───────────────────────────── */

const experience = [
  {
    role: 'DevOps Engineer',
    company: 'Savitron.ai',
    color: '#00ADB5',
    points: [
      'Managed Linux servers, Docker-based applications, and cloud infrastructure.',
      'Built and maintained CI/CD pipelines using Jenkins and GitHub.',
      'Automated deployments and infrastructure management using scripting and Infrastructure as Code practices.',
      'Configured reverse proxies, SSL/TLS, monitoring, and production environments to ensure reliability and availability.',
    ],
  },
  {
    role: 'DevOps & Cloud Intern',
    company: 'LinuxWorld Informatics Pvt. Ltd.',
    color: '#F2A154',
    points: [
      'Worked with Docker, Kubernetes, AWS, Terraform, and Ansible to deploy and manage cloud infrastructure.',
      'Built CI/CD pipelines using Jenkins for automated build, testing, and deployment.',
      'Implemented monitoring with Prometheus and Grafana and managed Linux-based servers.',
      'Developed a Streamlit-based automation platform integrating DevOps tools through a centralized dashboard.',
    ],
  },
]

const projects = [
  {
    title: 'Proxmox Virtualization Infrastructure',
    sub: 'Type-1 Hypervisor Deployment',
    concept: 'Enterprise-grade virtualization stack enabling isolated compute environments for development, testing, and automation workloads.',
    stack: ['Proxmox VE', 'KVM/QEMU', 'LXC', 'Debian', 'ZFS'],
    highlights: [
      'Provisioned multi-VM cluster with high-efficiency virtualization',
      'Configured virtual networking, storage pools, ISO provisioning, and containerized workloads',
      'Enabled a full on-prem hypervisor capability for scalable DevOps experiments',
    ],
  },
  {
    title: 'n8n-Driven AI Workflow Engine',
    sub: 'LLM-enhanced data pipelines',
    concept: 'Autonomous news, DevOps insights, and LLM-enhanced data pipelines.',
    stack: ['n8n', 'Gemini API', 'Telegram/Discord Bots', 'Docker', 'RSS'],
    highlights: [
      'Automated scheduling engine (45-minute continuous aggregation cycle)',
      'LLM-powered summarization for Kubernetes/Cloud/DevOps feeds',
      'Multi-platform publishing via chatbots',
    ],
  },
  {
    title: 'Containerized Full-Stack Travel Platform',
    sub: 'Microservice architecture',
    concept: 'End-to-end travel booking ecosystem built on a containerized microservice architecture.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker Compose'],
    highlights: [
      'Secure auth workflows, booking CRUD flows, and service isolation',
      'Modern glass-morphism UI across devices',
      'Full containerization for seamless deployment',
    ],
  },
  {
    title: 'Kubernetes Auto-Scaling Web Cluster',
    sub: 'Self-healing infrastructure',
    concept: 'Self-healing, load-adaptive web infrastructure modeling production cloud behavior.',
    stack: ['Kubernetes (HPA)', 'Minikube', 'Docker', 'Apache HTTPD'],
    highlights: [
      'CPU-driven horizontal autoscaling (HPA)',
      'Simulated real-world load with 10+ replica pods',
      'Highly resilient NodePort exposure with live traffic testing',
    ],
  },
  {
    title: 'CI/CD Pipeline for Python Microservices',
    sub: 'Automated build → deploy',
    concept: 'Automated integration and deployment lifecycle for Python workloads.',
    stack: ['Jenkins', 'GitHub', 'Docker', 'Pytest'],
    highlights: [
      'Commit-triggered Jenkins pipeline with automated tests',
      'Docker image build-push-deploy flow',
      'Production-grade CI/CD simulation for microservices',
    ],
  },
  {
    title: 'Offline AI Model Ecosystem',
    sub: 'Air-gapped LLM platform',
    concept: 'Local compute environment for running LLMs and vision models without internet connectivity.',
    stack: ['Ollama', 'Hugging Face', 'Open WebUI', 'DeepSeek', 'LLaMA 3.1', 'Gemma'],
    highlights: [
      'Multi-model management with hardware-accelerated inference',
      'Fully air-gapped AI development platform',
      'Integrated text and vision generation workflows',
    ],
  },
]

const skillGroups = [
  { name: 'Core DevOps Tools', items: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible', 'Git', 'GitHub Actions'] },
  { name: 'Cloud Platforms', items: ['AWS EC2', 'S3', 'IAM', 'VPC', 'CloudWatch'] },
  { name: 'Monitoring & Observability', items: ['Prometheus', 'Grafana', 'Node Exporter'] },
  { name: 'Infrastructure & Automation', items: ['CI/CD Pipelines', 'IaC', 'Containerization'] },
  { name: 'Operating Systems', items: ['Arch Linux', 'Ubuntu', 'RHEL', 'Fedora'] },
  { name: 'Programming & Scripting', items: ['Python', 'Bash', 'Flask'] },
]

const certGroups = [
  {
    issuer: 'Amazon Web Services Training and Certification',
    date: 'Oct 2025',
    color: '#F2A154',
    items: ['AWS Cloud Quest: Generative AI Practitioner – Training Badge', 'AWS Cloud Quest: Cloud Practitioner – Training Badge'],
  },
  {
    issuer: 'Linux Foundation Training',
    date: 'Nov 2025 & May 2025',
    color: '#38BDF8',
    items: ['Blockchain: Understanding Its Uses and Implications (LFS170)', 'Kubernetes: 入門 (LFS158JP)'],
  },
  {
    issuer: 'LinuxWorld Informatics Private Limited',
    date: 'Aug 2025 & Jul 2025',
    color: '#F87171',
    items: ['JASBAA 4.0 – Startup Show Casting (TRAVOZOM)', 'AWS Cloud With Artificial Intelligence Workshop'],
  },
  {
    issuer: 'Udemy',
    date: 'Nov 2024 & Jun 2025',
    color: '#A78BFA',
    items: ['Linux Red Hat Certified System Administrator (RHCSA – EX200)', 'PostgreSQL Bootcamp'],
  },
]

const blogs = [
  { title: 'Docker & Kubernetes: Use Cases in Industries', href: '/blog/docker-kubernetes-industries' },
  { title: 'Monitoring in the Wild: Prometheus & Grafana', href: '/blog/monitoring-prometheus-grafana' },
  { title: 'Linux at Work: RHEL 9 and Other Distros', href: '/blog/redhat-rhel9-linux-distros' },
]

const sections = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'skills', label: 'Skills & Education', icon: Wrench },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
] as const

type SectionId = (typeof sections)[number]['id']

/* ───────────────────────────── background ───────────────────────────── */

const StarsBackground = () => {
  const [stars, setStars] = useState<Array<{ id: number; style: CSSProperties }>>([])
  useEffect(() => {
    setStars(
      Array.from({ length: 110 }, (_, id) => ({
        id,
        style: { left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s` },
      })),
    )
  }, [])
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((s) => (
        <div key={s.id} className="absolute w-1 h-1 bg-white rounded-full animate-twinkle" style={s.style} />
      ))}
      <div className="absolute top-10 left-10 w-48 h-48 bg-[#00ADB5]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#00ADB5]/10 rounded-full blur-3xl" />
    </div>
  )
}

/* ───────────────────────────── small pieces ───────────────────────────── */

const Heading = ({ children, accent }: { children: React.ReactNode; accent: string }) => (
  <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-5 text-center">
    {children} <span className="text-[#00ADB5]">{accent}</span>
  </h2>
)

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2 py-0.5 rounded-md bg-[#00ADB5]/15 text-[#00ADB5] text-xs border border-[#00ADB5]/25">{children}</span>
)

const panel = 'bg-[#393E46]/70 backdrop-blur-sm border border-[#00ADB5]/25 rounded-xl'

/* ───────────────────────────── sections ───────────────────────────── */

function HomeSection({ go }: { go: (id: SectionId) => void }) {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-14 items-center max-w-5xl w-full">
        <div className="order-2 md:order-1">
          <p className="text-[#00ADB5] font-mono text-sm mb-2">Hello, I&apos;m</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Yash Gupta</h1>
          <h2 className="text-xl md:text-2xl text-[#EEEEEE]/80 mb-4">DevOps &amp; Cloud Developer</h2>
          <p className="text-[#EEEEEE]/70 leading-relaxed text-sm md:text-base mb-5">
            Passionate and dedicated <span className="text-[#00ADB5] font-semibold">DevOps Engineer</span> with a strong drive to excel in fast-paced and
            challenging environments. Known for a hunger to continuously learn and adapt to emerging technologies, I thrive on solving complex problems and
            implementing efficient solutions. I aim to streamline processes, enhance system reliability, and contribute to the overall profitability and
            growth of the organization.
          </p>
          <div className="flex items-center gap-2 text-sm text-[#EEEEEE]/60 mb-5">
            <MapPin className="h-4 w-4 text-[#00ADB5]" /> Gurugram, Haryana, India
          </div>
          <div className="flex flex-wrap gap-3 mb-5">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-[#00ADB5] text-white text-sm font-medium hover:bg-[#00ADB5]/80 transition hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
            <button
              onClick={() => go('projects')}
              className="inline-flex items-center px-4 py-2 rounded-lg border border-[#00ADB5] text-[#00ADB5] text-sm font-medium hover:bg-[#00ADB5] hover:text-white transition"
            >
              View Projects <ChevronRight className="ml-1 h-4 w-4" />
            </button>
            <button
              onClick={() => go('contact')}
              className="inline-flex items-center px-4 py-2 rounded-lg border border-[#EEEEEE]/30 text-[#EEEEEE] text-sm font-medium hover:border-[#00ADB5] hover:text-[#00ADB5] transition"
            >
              Get In Touch
            </button>
          </div>
          <div className="flex gap-5">
            {[
              { href: GITHUB, Icon: Github, label: 'GitHub' },
              { href: LINKEDIN, Icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${EMAIL}`, Icon: Mail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} aria-label={label} className="text-[#EEEEEE]/70 hover:text-[#00ADB5] transition hover:scale-110">
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://github.com/Yash-xoxo/yash-search/blob/main/assets/img/passport-new.jpg?raw=true"
            alt="Yash Gupta"
            className="w-36 h-36 md:w-72 md:h-72 rounded-full border-4 border-[#00ADB5] shadow-2xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

function ExperienceSection() {
  return (
    <div className="h-full flex flex-col justify-center max-w-6xl mx-auto w-full">
      <Heading accent="Experience">Work</Heading>
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {experience.map((job) => (
          <div key={job.company} className={`${panel} p-5`} style={{ borderTop: `3px solid ${job.color}` }}>
            <h3 className="text-lg md:text-xl font-bold" style={{ color: job.color }}>
              {job.role}
            </h3>
            <p className="text-[#EEEEEE]/60 text-sm mb-3">{job.company}</p>
            <ul className="space-y-2 text-sm text-[#EEEEEE]/80 leading-relaxed">
              {job.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-[#00ADB5] mt-1">▹</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectsSection() {
  const [i, setI] = useState(0)
  const p = projects[i]
  return (
    <div className="h-full flex flex-col justify-center max-w-6xl mx-auto w-full">
      <Heading accent="Projects">Featured</Heading>
      <div className="grid md:grid-cols-[18rem_1fr] gap-4">
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-1">
          {projects.map((proj, idx) => (
            <button
              key={proj.title}
              onClick={() => setI(idx)}
              className={`text-left shrink-0 md:shrink w-56 md:w-auto px-3 py-2 rounded-lg border text-sm transition ${
                idx === i
                  ? 'bg-[#00ADB5] border-[#00ADB5] text-white'
                  : 'bg-[#393E46]/60 border-[#00ADB5]/20 text-[#EEEEEE]/80 hover:border-[#00ADB5]'
              }`}
            >
              <span className="font-mono opacity-70 mr-1">{idx + 1}.</span>
              {proj.title}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className={`${panel} p-5 md:p-6`}
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="text-xl font-bold text-[#00ADB5]">{p.title}</h3>
                <p className="text-sm text-[#EEEEEE]/60">{p.sub}</p>
              </div>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center text-sm text-[#00ADB5] hover:text-white transition"
              >
                Demo <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            <p className="text-xs uppercase tracking-wider text-[#F2A154] mb-1">Concept</p>
            <p className="text-sm text-[#EEEEEE]/80 mb-3">{p.concept}</p>
            <p className="text-xs uppercase tracking-wider text-[#F2A154] mb-1">Tech Stack</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {p.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
            <p className="text-xs uppercase tracking-wider text-[#F2A154] mb-1">Highlights</p>
            <ul className="space-y-1.5 text-sm text-[#EEEEEE]/80">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-[#00ADB5]">●</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

function SkillsSection() {
  return (
    <div className="h-full flex flex-col justify-center max-w-6xl mx-auto w-full">
      <Heading accent="& Education">Skills</Heading>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
        {skillGroups.map((g) => (
          <div key={g.name} className={`${panel} p-3`}>
            <h3 className="text-sm font-semibold text-[#00ADB5] mb-2">{g.name}</h3>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={`${panel} p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2`}>
        <div className="flex gap-3">
          <GraduationCap className="h-8 w-8 text-[#00ADB5] shrink-0" />
          <div>
            <h3 className="font-bold">Bachelor&apos;s Degree in Computer Science &amp; Engineering</h3>
            <p className="text-sm text-[#EEEEEE]/60">Dr. A.P.J. Abdul Kalam Technical University</p>
            <p className="text-xs text-[#EEEEEE]/70 mt-1">
              Specialized in <b>Software Engineering</b> and <b>Database Management</b>. Learned about <b>Operating System</b> behavior and{' '}
              <b>Algorithms</b> with <b>Mathematics</b>.
            </p>
          </div>
        </div>
        <p className="text-sm font-semibold text-[#EEEEEE]/80 md:text-right shrink-0">
          August 2022 – July 2026
          <br />
          <span className="font-normal text-[#EEEEEE]/60">Bareilly</span>
        </p>
      </div>
    </div>
  )
}

function CertificatesSection() {
  return (
    <div className="h-full flex flex-col justify-center max-w-6xl mx-auto w-full">
      <Heading accent="Certificates">Training &amp;</Heading>
      <div className="grid md:grid-cols-2 gap-3 md:gap-4">
        {certGroups.map((g) => (
          <div key={g.issuer} className={`${panel} p-4`} style={{ borderLeft: `4px solid ${g.color}` }}>
            <div className="flex items-start gap-2 mb-2">
              <Cloud className="h-4 w-4 mt-0.5 shrink-0" style={{ color: g.color }} />
              <div>
                <p className="text-sm font-semibold" style={{ color: g.color }}>
                  {g.issuer}
                </p>
                <p className="text-xs text-[#EEEEEE]/50">{g.date}</p>
              </div>
            </div>
            <ul className="space-y-1.5 text-sm text-[#EEEEEE]/85">
              {g.items.map((c) => (
                <li key={c} className="flex gap-2">
                  <span>★</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-[#00ADB5] hover:text-white inline-flex items-center">
          View certificates on LinkedIn <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

function ContactSection() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const name = String(f.get('name') || '')
    const email = String(f.get('email') || '')
    const message = String(f.get('message') || '')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Portfolio contact from ${name}`)}&body=${encodeURIComponent(
      `From: ${name} <${email}>\n\n${message}`,
    )}`
    setSent(true)
  }
  const field =
    'w-full rounded-lg bg-[#222831]/80 border border-[#00ADB5]/30 px-3 py-2 text-sm text-[#EEEEEE] placeholder:text-[#EEEEEE]/40 focus:outline-none focus:border-[#00ADB5]'
  return (
    <div className="h-full flex flex-col justify-center max-w-5xl mx-auto w-full">
      <Heading accent="Touch">Get In</Heading>
      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        <div className="space-y-4">
          {[
            { Icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
            { Icon: Phone, label: 'Phone', value: PHONE, href: 'tel:+917839491779' },
            { Icon: Github, label: 'GitHub', value: 'github.com/Yash-xoxo', href: GITHUB },
            { Icon: Linkedin, label: 'LinkedIn', value: 'Yash Gupta', href: LINKEDIN },
          ].map(({ Icon, label, value, href }) => (
            <a key={label} href={href} className="flex items-center gap-4 group">
              <Icon className="h-6 w-6 text-[#00ADB5]" />
              <div>
                <p className="text-xs text-[#EEEEEE]/50">{label}</p>
                <p className="text-[#EEEEEE]/90 group-hover:text-[#00ADB5] transition">{value}</p>
              </div>
            </a>
          ))}
          <div className="pt-2">
            <p className="text-xs text-[#EEEEEE]/50 mb-1">Blog</p>
            <div className="flex flex-col gap-1">
              {blogs.map((b) => (
                <Link key={b.href} href={b.href} className="text-sm text-[#EEEEEE]/70 hover:text-[#00ADB5] transition">
                  → {b.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className={`${panel} p-4 space-y-3`}>
          <input name="name" placeholder="Your Name" required className={field} />
          <input name="email" type="email" placeholder="Your Email" required className={field} />
          <textarea name="message" placeholder="Your Message" rows={4} required className={`${field} resize-none`} />
          <button className="w-full inline-flex items-center justify-center py-2 rounded-lg bg-[#00ADB5] text-white text-sm font-medium hover:bg-[#00ADB5]/80 transition">
            <Send className="mr-2 h-4 w-4" /> Send Message
          </button>
          {sent && <p className="text-xs text-green-400">Opening your email client…</p>}
        </form>
      </div>
    </div>
  )
}

/* ───────────────────────────── page shell ───────────────────────────── */

export default function Portfolio() {
  const [active, setActive] = useState<SectionId>('home')
  const idx = sections.findIndex((s) => s.id === active)

  const go = useCallback((id: SectionId) => {
    setActive(id)
    try {
      history.replaceState(null, '', `#${id}`)
    } catch {}
  }, [])

  const step = useCallback(
    (d: number) => go(sections[(idx + d + sections.length) % sections.length].id),
    [idx, go],
  )

  // restore section from hash
  useEffect(() => {
    const h = window.location.hash.slice(1) as SectionId
    if (sections.some((s) => s.id === h)) setActive(h)
  }, [])

  // keyboard navigation (not while typing)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement
      if (['INPUT', 'TEXTAREA'].includes(t.tagName)) return
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [step])

  return (
    <div className="dark h-[100dvh] overflow-hidden bg-[#222831] text-[#EEEEEE] relative flex flex-col">
      <StarsBackground />

      {/* Top navigation */}
      <nav className="relative z-20 shrink-0 border-b border-[#393E46]/60 bg-[#222831]/90 backdrop-blur-md">
        <div className="px-4 md:px-8 py-2 flex items-center gap-4">
          <button onClick={() => go('home')} className="text-lg font-bold text-[#00ADB5] shrink-0">
            Yash Gupta
          </button>
          <div className="flex-1 flex md:justify-center gap-1 overflow-x-auto no-scrollbar">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition ${
                  active === id ? 'bg-[#00ADB5] text-white' : 'text-[#EEEEEE]/70 hover:text-[#00ADB5]'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex shrink-0 items-center px-3 py-1.5 rounded-lg border border-[#00ADB5] text-[#00ADB5] text-sm hover:bg-[#00ADB5] hover:text-white transition"
          >
            <Download className="mr-1.5 h-4 w-4" /> Resume
          </a>
        </div>
      </nav>

      {/* Content: exactly one section at a time, no page scroll */}
      <main className="relative z-10 flex-1 min-h-0 px-4 md:px-10 py-4 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="min-h-full md:h-full"
          >
            {active === 'home' && <HomeSection go={go} />}
            {active === 'experience' && <ExperienceSection />}
            {active === 'projects' && <ProjectsSection />}
            {active === 'skills' && <SkillsSection />}
            {active === 'certificates' && <CertificatesSection />}
            {active === 'contact' && <ContactSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom bar: prev / dots / next */}
      <footer className="relative z-20 shrink-0 border-t border-[#393E46]/60 bg-[#222831]/90 backdrop-blur-md px-4 md:px-8 py-2 flex items-center justify-between text-sm">
        <button onClick={() => step(-1)} className="inline-flex items-center text-[#EEEEEE]/70 hover:text-[#00ADB5] transition" aria-label="Previous section">
          <ChevronLeft className="h-5 w-5" />
          <span className="hidden sm:inline">{sections[(idx - 1 + sections.length) % sections.length].label}</span>
        </button>
        <div className="flex items-center gap-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              aria-label={s.label}
              className={`h-2 rounded-full transition-all ${active === s.id ? 'w-6 bg-[#00ADB5]' : 'w-2 bg-[#EEEEEE]/30 hover:bg-[#00ADB5]/60'}`}
            />
          ))}
        </div>
        <button onClick={() => step(1)} className="inline-flex items-center text-[#EEEEEE]/70 hover:text-[#00ADB5] transition" aria-label="Next section">
          <span className="hidden sm:inline">{sections[(idx + 1) % sections.length].label}</span>
          <ChevronRight className="h-5 w-5" />
        </button>
      </footer>
    </div>
  )
}
