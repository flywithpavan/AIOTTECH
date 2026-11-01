import React, { useState } from 'react'
import {
  ArrowUpRight, Menu, X, Cpu, Sprout, Bot, BrainCircuit, CircuitBoard,
  ShoppingBag, ShieldCheck, Code2, GraduationCap, ChevronRight, Zap,
  Mail, MapPin, Phone, Linkedin, Instagram, Github
} from 'lucide-react'
import { featuredProducts, projectCategories } from './data/products'

const navItems = [
  ['Home', '#home'], ['Agri Solutions', '#agri'], ['Projects', '#projects'],
  ['Services', '#services'], ['About', '#about']
]

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="header">
    <a className="brand" href="#home" aria-label="AIOTTECH SOLUTION home">
      <span className="brand-mark"><CircuitBoard size={23}/></span>
      <span><b>AIOTTECH</b><small>SOLUTION</small></span>
    </a>
    <nav className={open ? 'nav nav-open' : 'nav'}>
      {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-mobile-cta" href="#contact">Get in touch <ArrowUpRight size={16}/></a>
    </nav>
    <a className="header-cta" href="#contact">Let's build <ArrowUpRight size={16}/></a>
    <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
  </header>
}

function Eyebrow({children}) { return <div className="eyebrow"><span/>{children}</div> }

function Hero() {
  return <section className="hero section-wrap" id="home">
    <div className="hero-copy">
      <Eyebrow>ENGINEERING WHAT'S NEXT</Eyebrow>
      <h1>Ideas into <span>intelligent</span><br/>real-world impact.</h1>
      <p className="hero-lead">We design and build practical technology across AI, IoT, robotics and smart agriculture—turning ambitious ideas into working solutions.</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">Explore our work <ArrowUpRight size={17}/></a>
        <a className="btn btn-ghost" href="#contact">Discuss a project <ChevronRight size={17}/></a>
      </div>
      <div className="hero-proof">
        <div className="proof-icon"><ShieldCheck size={19}/></div>
        <div><b>From prototype to product</b><small>Engineering, integration and implementation</small></div>
      </div>
    </div>
    <div className="hero-art">
      <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
      <div className="hero-glow"/>
      <div className="hero-core"><Cpu size={88} strokeWidth={1.1}/><span>AIOT</span></div>
      <div className="float-card card-ai"><BrainCircuit/><span><b>AI + Vision</b><small>Intelligent systems</small></span></div>
      <div className="float-card card-iot"><CircuitBoard/><span><b>Connected IoT</b><small>Data in motion</small></span></div>
      <div className="float-card card-robot"><Bot/><span><b>Robotics</b><small>Built to move</small></span></div>
      <div className="art-caption">DESIGN <i/> BUILD <i/> DEPLOY</div>
    </div>
    <div className="hero-bottom"><span>AIOTTECH SOLUTION</span><span>INDEPENDENT ENGINEERING & PRODUCT STUDIO</span><span>01 — 05</span></div>
  </section>
}

function TrustStrip() {
  return <div className="trust-strip"><div className="trust-inner">
    <span>OUR ENGINEERING FOCUS</span>
    {['Artificial Intelligence','Internet of Things','Embedded Systems','Robotics','Smart Agriculture'].map(x=><b key={x}>{x}</b>)}
  </div></div>
}

function DivisionCards() {
  return <section className="section-wrap divisions" id="agri">
    <div className="section-heading"><div><Eyebrow>OUR BUSINESS DIVISIONS</Eyebrow><h2>Technology with a<br/><span>purpose.</span></h2></div><p>Focused solutions for the fields where intelligent engineering can make a measurable difference.</p></div>
    <div className="division-grid">
      <article className="division-card agri-card">
        <div className="division-icon"><Sprout size={25}/></div><div className="division-number">01 / AGRI</div>
        <h3>AIOTTECH<br/>AGRI</h3>
        <p>Smart farming, agricultural robotics, crop monitoring and precision agriculture solutions.</p>
        <a href="#projects">Explore agriculture <ArrowUpRight size={17}/></a>
        <div className="division-visual agri-visual"><div className="field-lines"/><Sprout size={115} strokeWidth={0.8}/></div>
      </article>
      <article className="division-card project-card" id="projects">
        <div className="division-icon"><Cpu size={25}/></div><div className="division-number">02 / PROJECTS</div>
        <h3>AIOTTECH<br/>PROJECTS</h3>
        <p>Ready-to-configure engineering kits, embedded systems, robotics and AI project solutions.</p>
        <a href="#featured">Explore project catalogue <ArrowUpRight size={17}/></a>
        <div className="division-visual project-visual"><div className="chip-grid">{Array.from({length:25},(_,i)=><i key={i}/>)}</div><Cpu size={82} strokeWidth={0.8}/></div>
      </article>
    </div>
  </section>
}

function FeaturedProjects() {
  return <section className="section-wrap featured" id="featured">
    <div className="section-heading"><div><Eyebrow>SELECTED BUILDS</Eyebrow><h2>Built in the lab.<br/><span>Ready for the world.</span></h2></div><a className="text-link" href="#contact">Request full catalogue <ArrowUpRight size={17}/></a></div>
    <div className="product-grid">
      {featuredProducts.map((p, i)=><article className="product-card" key={p.id}>
        <div className="product-image"><img src={p.image} alt="" loading="lazy"/><span className="product-index">0{i+1}</span><span className="status-pill">{p.status}</span></div>
        <div className="product-info"><div className="product-meta">{p.category} <span>•</span> {p.type}</div><h3>{p.name}</h3><p>{p.description}</p><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a href="#contact" className="product-link">Enquire about this project <ArrowUpRight size={16}/></a></div>
      </article>)}
    </div>
    <p className="catalog-note"><ShieldCheck size={15}/> Product availability, specifications and package contents are confirmed individually before order acceptance.</p>
  </section>
}

function Capabilities() {
  const items = [
    [BrainCircuit,'AI & Computer Vision','Detection, monitoring, edge AI and intelligent automation.'],
    [CircuitBoard,'IoT & Embedded','Connected devices, firmware, sensors and cloud dashboards.'],
    [Bot,'Robotics & Automation','Mobile robots, control systems and mechatronic prototypes.'],
    [Code2,'Software & Dashboards','Web platforms, APIs, device integration and visualisation.'],
    [GraduationCap,'Training & Workshops','Hands-on technical learning, seminars and project mentoring.'],
    [Zap,'Custom R&D','Proofs of concept and tailored engineering development.']
  ]
  return <section className="capabilities" id="services"><div className="section-wrap">
    <div className="section-heading"><div><Eyebrow>WHAT WE DO</Eyebrow><h2>One partner.<br/><span>End-to-end capability.</span></h2></div><p>We bring hardware, software and intelligence together—so the complete system works as one.</p></div>
    <div className="cap-grid">{items.map(([Icon,title,desc],i)=><div className="cap-item" key={title}><span className="cap-count">0{i+1}</span><Icon size={25}/><h3>{title}</h3><p>{desc}</p></div>)}</div>
  </div></section>
}

function Categories() {
  return <section className="section-wrap categories">
    <div className="section-heading"><div><Eyebrow>EXPLORE OUR WORK</Eyebrow><h2>Engineering across<br/><span>multiple domains.</span></h2></div><p>Our project portfolio spans academic prototypes, applied research and practical product development.</p></div>
    <div className="category-list">{projectCategories.map(c=><a href="#contact" className="category-row" key={c.title}><span className="category-no">{c.count}</span><b>{c.title}</b><p>{c.detail}</p><ArrowUpRight size={19}/></a>)}</div>
  </section>
}

function About() {
  return <section className="section-wrap about" id="about">
    <div className="about-visual"><div className="about-grid"/><div className="about-stamp"><Cpu size={35}/><b>ENGINEERED<br/>FOR IMPACT</b></div><div className="about-coordinates">19.9975° N<br/>73.7898° E</div></div>
    <div className="about-copy"><Eyebrow>ABOUT AIOTTECH</Eyebrow><h2>Engineering knowledge.<br/><span>Practical innovation.</span></h2>
      <p>AIOTTECH SOLUTION is an engineering-led technology venture based in Nashik, Maharashtra, focused on developing solutions across artificial intelligence, the Internet of Things, embedded electronics and robotics.</p>
      <p>Led by Mahesh Mahadev Ankushe, an AI and IoT specialist with a background in Electronics and Communication Engineering, the company combines hands-on prototyping with software and system integration.</p>
      <a className="text-link" href="#contact">Connect with our team <ArrowUpRight size={17}/></a>
    </div>
  </section>
}

function CTA() {
  return <section className="section-wrap cta-section" id="contact"><div className="cta-box"><div className="cta-glow"/><Eyebrow>HAVE AN IDEA?</Eyebrow><h2>Let's engineer<br/><span>what's next.</span></h2><p>Tell us what you're building. We'll help you shape the right technology, prototype or product solution.</p><a className="btn btn-primary" href="https://wa.me/?text=Hello%20AIOTTECH%20SOLUTION%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={17}/></a></div></section>
}

function Footer() {
  return <footer className="footer"><div className="section-wrap footer-main">
    <div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark"><CircuitBoard size={23}/></span><span><b>AIOTTECH</b><small>SOLUTION</small></span></a><p>Ideas. Innovation. Impact.<br/>Intelligent engineering for the real world.</p><div className="socials"><a href="#contact" aria-label="LinkedIn"><Linkedin/></a><a href="#contact" aria-label="Instagram"><Instagram/></a><a href="#contact" aria-label="GitHub"><Github/></a></div></div>
    <div><h4>EXPLORE</h4><a href="#agri">AIOTTECH AGRI</a><a href="#projects">AIOTTECH PROJECTS</a><a href="#services">Services</a><a href="#about">About us</a></div>
    <div><h4>GET IN TOUCH</h4><span><MapPin size={15}/> Nashik, Maharashtra, India</span><a href="#contact"><Mail size={15}/> Business enquiries</a><a href="https://wa.me/" target="_blank" rel="noreferrer"><Phone size={15}/> WhatsApp</a></div>
  </div><div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} AIOTTECH SOLUTION. All rights reserved.</span><span>Built with curiosity and engineering.</span></div></footer>
}

export default function App() {
  return <><Header/><main><Hero/><TrustStrip/><DivisionCards/><FeaturedProjects/><Capabilities/><Categories/><About/><CTA/></main><Footer/></>
}