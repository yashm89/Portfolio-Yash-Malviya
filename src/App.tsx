import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  Code2, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  ChevronRight,
  Monitor,
  Activity,
  Layers,
  Bot
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Resume Data
const RESUME_DATA = {
  name: "Yash Malviya",
  role: "Python Backend Engineer | GenAI (RAG, LangGraph) | Cloud",
  contact: {
    phone: "+919340073937",
    email: "malviyayash8989@gmail.com",
    linkedin: "https://linkedin.com/in/yash-malviya",
  },
  summary: "Python Backend Engineer with 4 years of experience building scalable APIs and production-grade GenAI systems. Hands-on experience with FastAPI, Django, RAG pipelines, LangGraph, and cloud-native deployments.",
  skills: {
    languages: ["Python", "Java", "Shell Script"],
    backend: ["FastAPI", "Django", "Flask", "REST APIs"],
    ai_ml: ["RAG", "LangChain", "LangGraph", "FAISS", "LLM Integration"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Qdrant"],
    cloud: ["Azure Container Apps", "AWS (EC2, S3, Lambda)", "Azure Metrics"],
    tools: ["Docker", "Kubernetes", "Git", "Jira", "Kafka", "Celery"]
  },
  experience: [
    {
      company: "ThoughtWin IT Solutions",
      role: "Python Backend Engineer",
      period: "Dec 2024 – Present",
      points: [
        "Built and deployed FastAPI-based backend services on Azure Container Apps",
        "Developed production-grade GenAI agentic systems using LangGraph and RAG",
        "Implemented FAISS-based vector search for 1000+ domain-specific documents",
        "Designed multi-step conversational workflows with memory retention"
      ]
    },
    {
      company: "TO THE NEW Pvt. Ltd.",
      role: "Software Engineer",
      period: "Feb 2022 – Dec 2024",
      points: [
        "Designed and maintained 40+ RESTful APIs using Django and FastAPI",
        "Implemented OAuth 2.0 and SSO authentication using Keycloak",
        "Built real-time monitoring dashboards using Grafana and Azure Monitor",
        "Containerized applications using Docker and NGINX"
      ]
    }
  ],
  projects: [
    {
      title: "Agentic AI Loan Assistant",
      description: "Production-ready AI chatbot using LangGraph and RAG architecture for loan eligibility.",
      tech: ["LangGraph", "RAG", "FAISS", "FastAPI"]
    },
    {
      title: "Observability & Monitoring Platform",
      description: "OpenTelemetry instrumentation across backend services with Grafana dashboards.",
      tech: ["OpenTelemetry", "Grafana", "Azure Monitor"]
    },
    {
      title: "Event Ticketing Platform",
      description: "Local and production-ready environments using Docker Compose with NGINX, Redis.",
      tech: ["Docker", "Redis", "Django", "Razorpay"]
    }
  ]
};

const SectionHeader = ({ title, subtitle, id }: { title: string, subtitle: string, id?: string }) => (
  <div id={id} className="mb-12">
    <div className="flex items-center gap-2 mb-2">
      <div className="h-[1px] w-12 bg-cyber-cyan" />
      <span className="text-cyber-cyan font-mono text-xs tracking-widest uppercase">{subtitle}</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight uppercase">
      {title.split(' ').map((word, i) => (
        <span key={i} className={i % 2 !== 0 ? "text-cyber-cyan" : ""}>{word} </span>
      ))}
    </h2>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('ABOUT');

  return (
    <div className="min-h-screen grid-bg relative overflow-x-hidden">
      <div className="scanline" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-bg/80 backdrop-blur-md border-b border-cyber-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyber-cyan rounded flex items-center justify-center">
              <Terminal size={18} className="text-black" />
            </div>
            <span className="font-display font-bold tracking-tighter text-xl">YM_DEV<span className="text-cyber-cyan">_</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest">
            {['ABOUT', 'SKILLS', 'EXPERIENCE', 'PROJECTS', 'CONTACT'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyber-cyan transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="bg-cyber-cyan text-black px-4 py-1.5 rounded font-mono text-xs font-bold hover:bg-white transition-colors">
            HIRE_ME
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 space-y-32">
        
        {/* Hero Section */}
        <section id="about" className="flex flex-col items-center justify-center text-center min-h-[70vh]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 text-cyber-cyan text-[10px] font-mono tracking-widest mb-6">
              <Activity size={12} /> CONNECTION ESTABLISHED: SECURE_NODE
            </div>
            <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-none mb-6">
              YASH <br /> 
              <span className="text-cyber-cyan glitch-text">MALVIYA</span>
            </h1>
            <div className="flex flex-col items-center space-y-4 mb-10">
              <div className="flex items-center gap-3 text-white/60 font-mono text-sm">
                <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" />
                AI ENGINEER
              </div>
              <div className="flex items-center gap-3 text-white/60 font-mono text-sm">
                <div className="w-2 h-2 bg-cyber-pink rounded-full animate-pulse" />
                LLM-POWERED ARCHITECTURE
              </div>
              <div className="flex items-center gap-3 text-white/60 font-mono text-sm">
                <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                INDORE, INDIA // 22.7196° N, 75.8577° E
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-cyber-cyan text-black px-8 py-3 rounded font-mono text-sm font-bold hover:bg-white transition-all flex items-center gap-2">
                INITIALIZE_PROJECTS <ChevronRight size={16} />
              </button>
              <button className="border border-white/20 hover:border-white px-8 py-3 rounded font-mono text-sm transition-all">
                GET_RESUME.SH
              </button>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SectionHeader title="Intelligence & Skillset" subtitle="01. CORE_ARCHITECTURE_OVERVIEW" />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="terminal-window p-6 space-y-6 lg:col-span-1">
              <div className="flex items-center gap-2 text-cyber-cyan mb-4">
                <Bot size={20} />
                <span className="font-mono text-xs uppercase tracking-widest">cat profile_summary.md</span>
              </div>
              <p className="font-mono text-sm text-white/70 leading-relaxed">
                AI Engineer specialized in architecting and deploying <span className="text-cyber-cyan">LLM-powered ecosystems</span>, robust document intelligence pipelines, and autonomous multi-agent systems.
                <br /><br />
                Expertise in neural fine-tuning (LoRA/QLoRA), high-fidelity <span className="text-cyber-pink">RAG architectures</span>, and complex <span className="text-cyber-green">LangGraph-based workflows</span>.
              </p>
              <div className="pt-6 border-t border-white/10">
                <div className="text-[10px] text-white/30 uppercase tracking-widest mb-4">Status: Encrypted</div>
                <div className="flex gap-1">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className={`h-4 w-2 ${i < 7 ? 'bg-cyber-cyan' : 'bg-white/10'}`} />
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Bot />, title: "AI / ML / LLM", items: ["RAG", "LangGraph", "LangChain", "FAISS", "LLM Integration"] },
                { icon: <Layers />, title: "Backend Systems", items: ["FastAPI", "Django", "Flask", "REST APIs", "OAuth 2.0"] },
                { icon: <Database />, title: "Data Matrix", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Qdrant"] },
                { icon: <Cloud />, title: "Cloud & DevOps", items: ["Azure Container Apps", "AWS (EC2, S3)", "Docker", "Kubernetes", "Kafka"] }
              ].map((skill, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-cyber-cyan/50 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4 text-cyber-cyan group-hover:scale-110 transition-transform">
                    {skill.icon}
                    <h3 className="font-display font-bold text-lg uppercase">{skill.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, j) => (
                      <span key={j} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-white/60">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <SectionHeader title="Operational History" subtitle="02. PROFESSIONAL_LOGS" />
          <div className="space-y-12">
            {RESUME_DATA.experience.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-4 gap-8">
                  <div className="mb-4 md:mb-0">
                    <div className="text-cyber-cyan font-mono text-xs mb-1">{exp.period}</div>
                    <div className="text-white/40 font-mono text-[10px] uppercase tracking-widest">Status: Completed</div>
                  </div>
                  <div className="md:col-span-3 border-l-2 border-cyber-border pl-8 relative">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyber-cyan border-4 border-cyber-bg" />
                    <h3 className="text-2xl font-display font-bold mb-1">{exp.role}</h3>
                    <div className="text-cyber-cyan font-mono text-sm mb-6">{exp.company}</div>
                    <ul className="space-y-3">
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                          <ChevronRight size={14} className="mt-1 text-cyber-cyan shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <SectionHeader title="Classified Projects" subtitle="03. RECENT_DEPLOYMENTS" />
          <div className="grid md:grid-cols-3 gap-8">
            {RESUME_DATA.projects.map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="terminal-window group cursor-pointer"
              >
                <div className="aspect-video bg-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                    <Monitor size={64} className="text-cyber-cyan" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <ExternalLink size={16} className="text-white/40 group-hover:text-cyber-cyan transition-colors" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-cyber-cyan transition-colors">{project.title}</h3>
                  <p className="text-sm text-white/60 mb-6 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <span key={j} className="text-[10px] font-mono px-2 py-1 border border-white/10 rounded text-white/40">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center py-20">
          <SectionHeader title="Establish Connection" subtitle="04. UPLINK_CHANNELS" />
          <div className="max-w-2xl mx-auto">
            <p className="text-white/60 font-mono text-sm mb-12 leading-relaxed">
              Currently available for high-impact engineering roles and strategic collaborations. 
              My neural pathways are open for inquiries.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: <Mail />, label: "EMAIL", value: RESUME_DATA.contact.email, href: `mailto:${RESUME_DATA.contact.email}` },
                { icon: <Linkedin />, label: "LINKEDIN", value: "Yash Malviya", href: RESUME_DATA.contact.linkedin },
                { icon: <Github />, label: "GITHUB", value: "yash-malviya", href: "#" }
              ].map((link, i) => (
                <a 
                  key={i}
                  href={link.href}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyber-cyan group-hover:text-cyber-cyan transition-all">
                    {link.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-white/40 group-hover:text-white transition-colors">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-cyber-border py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/30 font-mono text-[10px] uppercase tracking-[0.2em]">
            © 2026 YASH_MALVIYA // ALL_RIGHTS_RESERVED
          </div>
          <div className="flex items-center gap-4 text-white/30 font-mono text-[10px]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyber-green rounded-full" />
              SYSTEM_STATUS: OPTIMAL
            </div>
            <div className="w-[1px] h-3 bg-white/10" />
            <div>LATENCY: 24MS</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
