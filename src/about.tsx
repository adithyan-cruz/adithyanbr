import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import adithyanPortrait from './assets/adithyan-portrait.jpg';

export default function About() {
    useEffect(() => {
        // 1. Mousemove Parallax Effect
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX / window.innerWidth - 0.5;
            const y = e.clientY / window.innerHeight - 0.5;

            const backgroundTexts = document.querySelectorAll('.parallax-text') as NodeListOf<HTMLElement>;
            backgroundTexts.forEach((text, i) => {
                const speed = (i + 1) * 20;
                text.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="bg-pure-black font-body-md text-on-background selection:bg-neon-lime selection:text-pure-black min-h-screen">
            {/* TopNavBar (Shared Component) */}


            <main className="relative pt-32 overflow-hidden">
                {/* Hero Background Typography */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 pointer-events-none select-none overflow-hidden w-full whitespace-nowrap">
                    <span className="parallax-text font-display-2xl text-[240px] md:text-[400px] leading-none opacity-[0.03] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] block transition-transform duration-75 ease-out">
                        CREATIVE
                    </span>
                    <span className="parallax-text font-display-2xl text-[240px] md:text-[400px] leading-none opacity-[0.03] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] block -mt-20 md:-mt-40 ml-40 transition-transform duration-75 ease-out">
                        TECHNOLOGIST
                    </span>
                </div>

                {/* High Impact Personal Image & Intro */}
                <section className="max-w-container-max mx-auto px-gutter pt-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-section-gap">
                    <div className="md:col-span-7 relative group intersect-target transition-all duration-1000 opacity-0 translate-y-10">
                        <div className="absolute -inset-4 border-2 border-neon-lime/20 rounded-[32px] group-hover:border-neon-lime/100 transition-all duration-500 pointer-events-none"></div>
                        <div className="overflow-hidden rounded-[32px] bg-surface-container h-[500px] md:h-[700px] relative">
                            <img
                                alt="Adithyan Portrait"
                                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                data-alt="A striking and professional portrait of a modern creative technologist in a dark studio setting."
                                src={adithyanPortrait}
                            />
                            <div className="absolute bottom-0 left-0 w-full p-card-padding bg-gradient-to-t from-pure-black/80 to-transparent">
                                <p className="font-label-mono text-label-mono text-neon-lime uppercase tracking-widest">
                                    EST. 2004 // TVM
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-5 md:pb-12 intersect-target transition-all duration-1000 opacity-0 translate-y-10 delay-100">
                        <h1 className="font-headline-lg text-headline-lg md:text-[90px] leading-tight text-stark-white mb-8">
                            I BUILD <span className="text-neon-lime">DIGITAL</span> DIMENSIONS.
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                            Hi, I'm Adithyan. A Creative Technologist obsessed with the intersection of flawless logic and high-end aesthetic energy. I don't just write code; I craft digital artifacts.
                        </p>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="py-section-gap bg-surface-container-lowest">
                    <div className="max-w-container-max mx-auto px-gutter intersect-target transition-all duration-1000 opacity-0 translate-y-10">
                        <div className="flex flex-col md:flex-row gap-16">
                            <div className="md:w-1/3">
                                <h2 className="font-headline-md text-headline-md text-stark-white mb-4">
                                    THE
                                    <br />
                                    PHILOSOPHY
                                </h2>
                                <div className="h-1 w-20 bg-neon-lime"></div>
                            </div>
                            <div className="md:w-2/3">
                                <h3 className="font-headline-md text-headline-md text-neon-lime mb-8 uppercase italic">
                                    "Where Code Meets Clean Vibes"
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                                            I believe the best products aren't just functional—they are felt. My approach combines the rigor of technical engineering with the intuition of visual design.
                                        </p>
                                        <p className="font-body-lg text-body-lg text-on-surface-variant">
                                            I focus on 'Clean Vibes'—a state where the user interface is so intuitive and the motion so fluid that the technology disappears, leaving only the experience.
                                        </p>
                                    </div>
                                    <div className="border-l border-white/10 pl-8 space-y-8">
                                        <div>
                                            <h4 className="font-label-mono text-label-mono text-stark-white uppercase mb-2">01 Precision</h4>
                                            <p className="text-sm text-on-surface-variant">
                                                Every pixel has a purpose. Every line of code is optimized for performance.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-label-mono text-label-mono text-stark-white uppercase mb-2">02 Disruption</h4>
                                            <p className="text-sm text-on-surface-variant">
                                                Challenging the status quo to create interfaces that stand out in a saturated market.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-label-mono text-label-mono text-stark-white uppercase mb-2">03 Connection</h4>
                                            <p className="text-sm text-on-surface-variant">
                                                Building digital bridges between human emotion and machine capability.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Journey (Bento Style) */}
                <section className="py-section-gap">
                    <div className="max-w-container-max mx-auto px-gutter intersect-target transition-all duration-1000 opacity-0 translate-y-10">
                        <div className="mb-16">
                            <span className="font-label-mono text-label-mono text-neon-lime uppercase tracking-[0.3em]">
                                Timeline
                            </span>
                            <h2 className="font-headline-lg text-headline-lg text-stark-white">THE JOURNEY</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="md:col-span-2 border border-white/10 p-card-padding rounded-[32px] hover:border-neon-lime/40 transition-all bg-surface-container-low group">
                                <div className="flex justify-between items-start mb-12">
                                    <span className="bg-white/5 text-stark-white px-4 py-1 rounded-full text-xs font-label-mono">
                                        2022 — PRESENT
                                    </span>
                                    <span className="material-symbols-outlined text-neon-lime">terminal</span>
                                </div>
                                <h3 className="font-headline-md text-headline-md text-stark-white mb-4">
                                    INDEPENDENT CREATIVE
                                </h3>
                                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                                    Partnering with global startups and high-growth brands to define their digital presence through bespoke interactive experiences and robust frontend architectures.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="border border-white/10 p-card-padding rounded-[32px] hover:border-neon-lime/40 transition-all bg-surface-container-low">
                                <div className="flex justify-between items-start mb-12">
                                    <span className="bg-white/5 text-stark-white px-4 py-1 rounded-full text-xs font-label-mono">
                                        2022 — 2025
                                    </span>
                                    <span className="material-symbols-outlined text-neon-lime">brush</span>
                                </div>
                                <h3 className="font-headline-md text-headline-md text-stark-white mb-4">UI ENGINEER</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    Focused on design systems and micro-interactions for a leading FinTech platform.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="border border-white/10 p-card-padding rounded-[32px] hover:border-neon-lime/40 transition-all bg-surface-container-low">
                                <div className="flex justify-between items-start mb-12">
                                    <span className="bg-white/5 text-stark-white px-4 py-1 rounded-full text-xs font-label-mono">
                                        2022 — 2026
                                    </span>
                                    <span className="material-symbols-outlined text-neon-lime">school</span>
                                </div>
                                <h3 className="font-headline-md text-headline-md text-stark-white mb-4">GRADUATION</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    Studied Computer Science and Engineering, laying the dual foundation for my career.
                                </p>
                            </div>

                            {/* Card 4 (Shader Visual) */}
                            <div className="md:col-span-2 rounded-[32px] overflow-hidden relative h-64 md:h-auto">
                                <div className="relative z-10 p-card-padding h-full flex flex-col justify-end bg-gradient-to-t from-pure-black/60 to-transparent">
                                    <p className="font-label-mono text-label-mono text-stark-white">
                                        CONSTANT EVOLUTION // ALWAYS LOADING
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tech Stack / Toolkit */}
                <section className="py-section-gap relative">
                    <div className="max-w-container-max mx-auto px-gutter intersect-target transition-all duration-1000 opacity-0 translate-y-10">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
                            <div>
                                <span className="font-label-mono text-label-mono text-neon-lime uppercase tracking-[0.3em]">
                                    Arsenal
                                </span>
                                <h2 className="font-headline-lg text-headline-lg text-stark-white">TECH STACK</h2>
                            </div>
                            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs mb-4">
                                The tools I use to bridge the gap between imagination and execution.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
                            <div className="space-y-4">
                                <h4 className="font-label-mono text-label-mono text-neon-lime uppercase">Development</h4>
                                <ul className="font-headline-md text-headline-md text-stark-white space-y-2">
                                    <li className="hover:translate-x-2 transition-transform duration-300 cursor-default">REACT</li>
                                    <li className="hover:translate-x-2 transition-transform duration-300 cursor-default">NEXT.JS</li>
                                    <li className="hover:translate-x-2 transition-transform duration-300 cursor-default">TYPESCRIPT</li>
                                    <li className="hover:translate-x-2 transition-transform duration-300 cursor-default">TAILWIND</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-label-mono text-label-mono text-neon-lime uppercase">Creative</h4>
                                <ul className="font-headline-md text-headline-md text-stark-white space-y-2">
                                    <li className="hover:translate-x-2 transition-transform duration-300 cursor-default">FIGMA</li>
                                    <li className="hover:translate-x-2 transition-transform duration-300 cursor-default">THREE.JS</li>
                                    <li className="hover:translate-x-2 transition-transform duration-300 cursor-default">GSAP</li>
                                    <li className="hover:translate-x-2 transition-transform duration-300 cursor-default">WEBGL</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-label-mono text-label-mono text-neon-lime uppercase">Back-End</h4>
                                <ul className="font-headline-md text-headline-md text-stark-white space-y-2">
                                    <li className="hover:translate-x-2 transition-transform duration-300 cursor-default">NODE.JS</li>
                                    <li className="hover:translate-x-2 transition-transform duration-300 cursor-default">POSTGRES</li>
                                    <li className="hover:translate-x-2 transition-transform duration-300 cursor-default">STRIPE</li>
                                    <li className="hover:translate-x-2 transition-transform duration-300 cursor-default">DOCKER</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-label-mono text-label-mono text-neon-lime uppercase">Operations</h4>
                                <ul className="font-headline-md text-headline-md text-stark-white space-y-2">
                                    <li className="hover:translate-x-2 transition-transform duration-300 cursor-default">GIT</li>
                                    <li className="hover:translate-x-2 transition-transform duration-300 cursor-default">VERCEL</li>
                                    <li className="hover:translate-x-2 transition-transform duration-300 cursor-default">NOTION</li>
                                    <li className="hover:translate-x-2 transition-transform duration-300 cursor-default">AWS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-section-gap px-gutter text-center intersect-target transition-all duration-1000 opacity-0 translate-y-10">
                    <div className="max-w-4xl mx-auto border border-neon-lime/40 p-12 md:p-24 rounded-[48px] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-neon-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h2 className="font-headline-lg text-headline-lg text-stark-white mb-8 relative z-10">
                            READY TO UPGRADE YOUR <span className="text-neon-lime">EXPERIENCE?</span>
                        </h2>
                        <Link
                            className="inline-flex items-center gap-4 bg-neon-lime text-pure-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-lg hover:scale-105 transition-all duration-300 relative z-10"
                            to="/contact"
                        >
                            LET'S CHAT
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                </section>
            </main>

            {/* Footer (Shared Component) */}
            <footer className="bg-pure-black border-t border-white/5 mt-section-gap">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-section-gap px-gutter py-section-gap max-w-container-max mx-auto">
                    <div className="md:col-span-2">
                        <p className="font-headline-lg text-headline-lg text-surface-variant opacity-20 mb-8">ADITHYAN</p>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-xs mb-8">
                            Pushing the boundaries of the digital landscape through code and curated design.
                        </p>
                        <div className="flex gap-6">
                            <a className="text-stark-white hover:text-neon-lime transition-colors" href="https://twitter.com/AdithyanBr" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a className="text-stark-white hover:text-neon-lime transition-colors" href="https://linkedin.com/in/adithyan-b-r" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a className="text-stark-white hover:text-neon-lime transition-colors" href="https://github.com/adithyan-cruz" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-label-mono text-label-mono text-neon-lime uppercase mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-stark-white" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="font-body-md text-body-md text-neon-lime" to="/about">About</Link>
                            </li>
                            <li>
                                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-stark-white" to="/work">Work</Link>
                            </li>
                            <li>
                                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-stark-white" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-label-mono text-label-mono text-neon-lime uppercase mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li>
                                <a className="font-body-md text-body-md text-on-surface-variant hover:text-stark-white" href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a className="font-body-md text-body-md text-on-surface-variant hover:text-stark-white" href="#">Terms of Use</a>
                            </li>
                            <li>
                                <a className="font-body-md text-body-md text-on-surface-variant hover:text-stark-white" href="#">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-gutter py-8 border-t border-white/5 text-center">
                    <p className="font-body-md text-body-md text-on-surface-variant opacity-60">
                        © 2024 R U Adithyan. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}