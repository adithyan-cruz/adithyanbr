import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Portfolio() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="font-body-md bg-background selection:bg-neon-lime selection:text-pure-black text-[#e2e2e2] min-h-screen overflow-x-hidden">


            <main>
                {/* Hero Section */}
                <section id="home" className="intersect-target transition-all duration-1000 opacity-0 translate-y-10 relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none z-0">
                        <h1
                            className="font-display-2xl text-[20vw] md:text-[25vw] leading-none uppercase tracking-tighter"
                            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
                        >
                            PORTFOLIO
                        </h1>
                    </div>
                    <div className="relative z-10 w-full max-w-4xl px-gutter flex flex-col items-center">
                        <div className="relative mb-8" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
                            <img
                                alt="Portrait"
                                className="w-150 md:w-150 h-auto grayscale hover:grayscale-0 transition-all duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDytX_Z5lrIYsQQNnDdbECCqzY_vRaaS5fbZKxhN-yk9S863DwcOjsQrhPsM2TD2NFVRXckm_MZwa2GXNoEbp4S9y5UzSRxxzhqENzJS4QqR4qJcfNntOpLLbr7gP5Gyv45kjPzRg70iuIyia4mwx7cieSiT3mwkCcZJ7TKt4m_frJEi-OcIp_oItP06DlO92WrSLLMWmEfQrVm9IGCozIF9J-X_qbdv3DiagFms54sbCNbOx9tinysWhFVFWH9XxI_rsqBOhpZESVeDA"
                            />
                            <div className="absolute -right-40 bottom-0 bg-neon-lime px-6 py-2 rounded-full rotate-12 neon-glow shadow-[0_0_15px_rgba(173,235,51,0.4)]">
                                <span className="text-pure-black font-bold uppercase text-xs md:text-sm tracking-widest">
                                    Creative Technologist
                                </span>
                            </div>
                        </div>
                        <div className="mt-12 flex flex-col items-center gap-4">
                            <span className="font-label-mono text-on-surface-variant tracking-[0.3em] uppercase">
                                Scroll
                            </span>
                            <div className="w-px h-16 bg-gradient-to-b from-neon-lime to-transparent"></div>
                        </div>
                    </div>
                    {/* Atmospheric Element */}
                    <div className="absolute bottom-10 left-0 w-full px-gutter">
                        <svg className="w-full h-20 opacity-30 stroke-neon-lime fill-none" viewBox="0 0 1000 100">
                            <path d="M0,50 L300,50 L320,20 L340,80 L360,50 L1000,50" strokeWidth="2"></path>
                        </svg>
                    </div>
                </section>

                {/* Skill Level Section */}
                <section
                    id="about"
                    className="intersect-target transition-all duration-1000 opacity-0 translate-y-10 py-section-gap px-gutter max-w-container-max mx-auto"
                >
                    <div className="bg-surface-container-low border border-white/5 rounded-[32px] p-8 md:p-16 relative overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                            {/* Left: Skills List */}
                            <div>
                                <h2 className="font-headline-lg text-headline-lg text-neon-lime mb-8 uppercase">
                                    Skill Level
                                </h2>
                                <ul className="space-y-4 font-headline-md text-headline-md text-stark-white">
                                    <li className="hover:translate-x-2 transition-transform duration-300">Web Developer</li>
                                    <li className="hover:translate-x-2 transition-transform duration-300">UI/UX Designer</li>
                                    <li className="hover:translate-x-2 transition-transform duration-300">Creative Ideas</li>
                                    <li className="hover:translate-x-2 transition-transform duration-300">Social Media Designs</li>
                                    <li className="hover:translate-x-2 transition-transform duration-300">AI prompt engineering</li>
                                    <li className="hover:translate-x-2 transition-transform duration-300">AI Illustrative Specialist</li>
                                </ul>
                            </div>
                            {/* Right: Bio & Tools */}
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h3 className="font-headline-md text-headline-md text-stark-white mb-6">
                                        <span className="text-neon-lime">R U</span>&nbsp;ADITHYAN B R
                                    </h3>
                                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mb-8 leading-relaxed">
                                        I Design And Build Smooth, Aesthetic Web Experiences Where Code Meets Clean Vibes. UI/UX
                                        Is My Zone — Minimal, Intuitive, And Made To Feel Right.
                                    </p>
                                    {/* Tools Row */}
                                    <div className="flex flex-wrap gap-4 mb-8">
                                        {['terminal', 'palette', 'code', 'layers', 'draw'].map((icon) => (
                                            <div
                                                key={icon}
                                                className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg border border-white/10 hover:border-neon-lime transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-neon-lime" data-icon={icon}>
                                                    {icon}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <a
                                        className="font-label-mono text-neon-lime uppercase tracking-widest border-b border-neon-lime/40 pb-1 hover:border-neon-lime transition-all"
                                        href="#home"
                                    >
                                        Learn more about me &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section
                    id="services"
                    className="intersect-target transition-all duration-1000 opacity-0 translate-y-10 py-section-gap px-gutter max-w-container-max mx-auto text-center"
                >
                    <h2 className="font-display-2xl text-[10vw] md:text-headline-lg text-neon-lime uppercase mb-16">
                        Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Service Cards */}
                        {['Branding', 'Social Media', 'UI/UX Designing', 'Web Development'].map((service) => (
                            <div
                                key={service}
                                className="group border border-neon-lime/20 rounded-[40px] py-12 px-8 hover:bg-neon-lime hover:border-neon-lime hover:-translate-y-[10px] transition-all duration-500 cursor-pointer"
                            >
                                <h3 className="font-headline-md text-headline-md text-stark-white group-hover:text-pure-black transition-colors uppercase italic">
                                    {service}
                                </h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Brands Worked With */}
                <section
                    className="intersect-target transition-all duration-1000 opacity-0 translate-y-10 py-section-gap px-gutter max-w-container-max mx-auto"
                >
                    <h4 className="font-label-mono text-on-surface-variant text-center uppercase tracking-[0.4em] mb-12">
                        Brands Worked With
                    </h4>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 border border-white/5 rounded-full py-10 px-12">
                        <div className="w-12 h-12 bg-stark-white rounded-lg flex items-center justify-center font-bold text-pure-black text-xl">C</div>
                        <div className="w-12 h-12 bg-stark-white rounded-lg flex items-center justify-center font-bold text-pure-black text-xl">V</div>
                        <div className="w-12 h-12 bg-stark-white rounded-lg flex items-center justify-center font-bold text-pure-black text-xl">DC</div>
                        <div className="w-12 h-12 bg-neon-lime rounded-lg flex items-center justify-center font-bold text-pure-black text-xl">🧠</div>
                        <div className="w-12 h-12 bg-stark-white rounded-lg flex items-center justify-center font-bold text-pure-black text-xl">▶</div>
                        <div className="w-12 h-12 bg-[#FF4500] rounded-lg flex items-center justify-center font-bold text-stark-white text-xl">🔥</div>
                        <div className="w-12 h-12 bg-stark-white rounded-lg flex items-center justify-center font-bold text-pure-black text-xl">TG</div>
                    </div>
                </section>

                {/* Call to Action */}
                <section
                    id="contact"
                    className="intersect-target transition-all duration-1000 opacity-0 translate-y-10 py-section-gap px-gutter max-w-container-max mx-auto"
                >
                    <div className="bg-neon-lime rounded-[48px] py-20 px-8 text-center flex flex-col items-center">
                        <h2 className="font-display-2xl text-[12vw] md:text-display-2xl text-pure-black uppercase mb-4 leading-none">
                            Let's Work Together
                        </h2>
                        <p className="font-body-lg text-body-lg text-pure-black/70 mb-12">
                            Got a project in mind? Let's make it real.
                        </p>
                        <a href="mailto:hello@example.com" className="bg-pure-black text-stark-white px-12 py-5 rounded-full font-headline-md text-headline-md uppercase tracking-wider hover:scale-105 transition-transform inline-block">
                            Say Hello &rarr;
                        </a>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-pure-black pt-section-gap">
                <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-section-gap">
                    {/* Brand Info */}
                    <div className="col-span-1">
                        <h2 className="font-headline-md text-headline-md text-stark-white uppercase tracking-tighter mb-6">
                            ADITHYAN
                        </h2>
                        <p className="font-body-md text-on-surface-variant mb-8 max-w-xs">
                            Designing & building smooth, aesthetic web experiences where code meets clean vibes.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-on-surface-variant hover:text-neon-lime hover:border-neon-lime transition-colors"
                                to="/contact"
                            >
                                <span className="material-symbols-outlined text-sm">alternate_email</span>
                            </Link>
                            <a
                                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-on-surface-variant hover:text-neon-lime hover:border-neon-lime transition-colors"
                                href="https://linkedin.com/in/adithyan-b-r"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <span className="material-symbols-outlined text-sm">groups</span>
                            </a>
                            <a
                                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-on-surface-variant hover:text-neon-lime hover:border-neon-lime transition-colors"
                                href="https://instagram.com/adianandhu"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <span className="material-symbols-outlined text-sm">link</span>
                            </a>
                        </div>
                    </div>
                    {/* Services */}
                    <div className="col-span-1">
                        <h5 className="font-label-mono text-neon-lime uppercase tracking-widest mb-8">Services</h5>
                        <ul className="space-y-4">
                            {['Branding', 'Social Media', 'UI/UX Design', 'Web Development'].map((item) => (
                                <li key={item}>
                                    <Link className="font-body-md text-on-surface-variant hover:text-stark-white transition-colors" to="/services">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Work */}
                    <div className="col-span-1">
                        <h5 className="font-label-mono text-neon-lime uppercase tracking-widest mb-8">Work</h5>
                        <ul className="space-y-4">
                            <li><a className="font-body-md text-on-surface-variant hover:text-stark-white transition-colors" href="#home">Portfolio</a></li>
                            <li><Link className="font-body-md text-on-surface-variant hover:text-stark-white transition-colors" to="/about">About</Link></li>
                            <li><Link className="font-body-md text-on-surface-variant hover:text-stark-white transition-colors" to="/services">Services</Link></li>
                            <li><Link className="font-body-md text-on-surface-variant hover:text-stark-white transition-colors" to="/social">Social</Link></li>
                        </ul>
                    </div>
                    {/* Contact */}
                    <div className="col-span-1">
                        <h5 className="font-label-mono text-neon-lime uppercase tracking-widest mb-8">Contact</h5>
                        <ul className="space-y-4">
                            <li><Link className="font-body-md text-on-surface-variant hover:text-stark-white transition-colors" to="/contact">Email Me</Link></li>
                            <li><Link className="font-body-md text-on-surface-variant hover:text-stark-white transition-colors" to="/contact">Book a Call</Link></li>
                            <li><a className="font-body-md text-on-surface-variant hover:text-stark-white transition-colors" href="https://linkedin.com/in/adithyan-b-r" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a className="font-body-md text-on-surface-variant hover:text-stark-white transition-colors" href="https://instagram.com/adianandhu" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                {/* Giant Background Text */}
                <div className="mt-20 overflow-hidden select-none pointer-events-none border-t border-white/5">
                    <h1 className="font-display-2xl text-[20vw] leading-none uppercase tracking-tighter opacity-5 text-center translate-y-1/4">
                        PORT FOLIO
                    </h1>
                </div>
                {/* Copyright Row */}
                <div className="border-t border-white/5 py-10">
                    <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="font-body-md text-on-surface-variant">
                            © 2026 R U ADITHYAN. All rights reserved.
                        </p>
                        <div className="flex gap-8">
                            <a className="font-body-md text-on-surface-variant hover:text-stark-white transition-colors" href="#">
                                Privacy Policy
                            </a>
                            <a className="font-body-md text-on-surface-variant hover:text-stark-white transition-colors" href="#">
                                Terms of Use
                            </a>
                            <a className="font-body-md text-on-surface-variant hover:text-stark-white transition-colors" href="#">
                                Sitemap
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}