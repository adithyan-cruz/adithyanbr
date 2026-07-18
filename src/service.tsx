import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
    useEffect(() => {

        // Parallax Effect for Background Text
        const handleScroll = () => {
            const scrollVal = window.scrollY;
            const bgText = document.querySelector('.text-outline') as HTMLElement;
            if (bgText) {
                bgText.style.transform = `translateX(${-scrollVal * 0.2}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-background dark">
            <style>{`
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            background-color: #131313;
            color: #e2e2e2;
            overflow-x: hidden;
        }

        .text-outline {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
            color: transparent;
        }
        .service-divider {
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            height: 1px;
            width: 100%;
        }
      `}</style>



            <main className="pt-32">
                {/* Hero Section */}
                <section className="intersect-target transition-all duration-1000 opacity-0 translate-y-10 px-gutter max-w-container-max mx-auto mb-section-gap relative">
                    <div className="absolute -top-20 -left-10 text-display-2xl font-display-2xl text-outline opacity-50 z-0 select-none">
                        SOLUTIONS
                    </div>
                    <div className="relative z-10">
                        <span className="font-label-mono text-label-mono text-neon-lime uppercase mb-4 block">
                            Our Capabilities
                        </span>
                        <h1 className="font-headline-lg text-headline-lg text-stark-white mb-8 max-w-3xl">
                            Crafting Digital Excellence Through Precision Design & Strategy.
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                            I combine technical mastery with creative disruption to help brands dominate their digital landscape. From identity to code, every pixel is intentional.
                        </p>
                    </div>
                </section>

                {/* Services Loop */}
                <div className="space-y-section-gap pb-section-gap">
                    {/* Branding */}
                    <section className="intersect-target transition-all duration-1000 opacity-0 translate-y-10 px-gutter max-w-container-max mx-auto" id="branding">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="font-label-mono text-label-mono text-neon-lime">01</span>
                                    <div className="h-[1px] w-12 bg-neon-lime"></div>
                                    <span className="font-label-mono text-label-mono uppercase text-stark-white">Branding</span>
                                </div>
                                <h2 className="font-headline-md text-headline-md text-stark-white mb-6">Visual Identities That Demand Attention.</h2>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                                    A brand is more than just a logo. It's a cohesive system of values, typography, and color that creates an emotional resonance with your audience. I build identities that are built to last and designed to disrupt.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mb-10">
                                    <div className="border border-white/10 p-6 rounded-xl">
                                        <span className="material-symbols-outlined text-neon-lime mb-2" data-icon="brush">brush</span>
                                        <p className="font-label-mono text-label-mono text-stark-white">Logo Systems</p>
                                    </div>
                                    <div className="border border-white/10 p-6 rounded-xl">
                                        <span className="material-symbols-outlined text-neon-lime mb-2" data-icon="auto_awesome">auto_awesome</span>
                                        <p className="font-label-mono text-label-mono text-stark-white">Brand Strategy</p>
                                    </div>
                                </div>
                                <button className="group flex items-center gap-4 text-neon-lime font-label-mono text-label-mono uppercase">
                                    Get Started
                                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                                </button>
                            </div>
                            <div className="relative aspect-square">
                                <div className="absolute inset-0 border-2 border-neon-lime/20 rounded-full animate-pulse"></div>
                                <div className="absolute inset-8 border border-white/5 rounded-full"></div>
                                <img
                                    alt="Branding Showcase"
                                    className="w-full h-full object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-700"
                                    data-alt="A high-contrast, minimalist brand identity presentation featuring sleek black stationery with neon lime accents. The setting is a dark, cinematic studio with soft directional lighting creating deep shadows. The visual style is cyber-minimalist, emphasizing clean lines and bold typography, perfectly aligned with a professional design portfolio aesthetic."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuhUjyvX8xUNQR9pARoYlrVEPO73u4TrxChl_lPZxGN_dxgwjCTHlwNrkYxdOgIky1wcmDQh7gXtW_46GAWtlFblKP8rlUlVomhL7kNjtfmFJbpJMThxOMoKazxDS9FymtRHJ1fB1aly8yIh4pOnbmJlZwKBohWSMbk7wKcKjw5On6zvnmLOfMHwWzojbpXPSelVtg0IKeSguNrH9guy212xY0Og84eICxUcXq5TDwxqdd4s1QTZTrG2c6EsMgZMCTXFOJAPR2bag"
                                />
                            </div>
                        </div>
                    </section>

                    <div className="service-divider max-w-container-max mx-auto opacity-50"></div>

                    {/* Social Media */}
                    <section className="intersect-target transition-all duration-1000 opacity-0 translate-y-10 px-gutter max-w-container-max mx-auto" id="social">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="grid grid-cols-2 gap-4">
                                    <img
                                        className="w-full h-64 object-cover rounded-3xl"
                                        data-alt="A vibrant and dynamic digital social media dashboard appearing on a high-resolution screen in a dark room. The screen displays neon lime graphs, data visualizations, and modern UI elements. The lighting is dark and atmospheric, focusing on the glow of the digital content, creating a sense of technical precision and rapid digital growth."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIrZ1FiphfmKIUBdUh_AKMfMjtruXwezBdpTF-UgG0Vkgk1a2PhxnS18Xvl24VaMpXpWiiX4XbBe90q86jSi8jOemuq0HhO3V0xFOtRrzwzhakldcfwd-7BCK931OgWsfGodklcvdaUyo-yQqpSVlpq5hs1n5z6fGRF6zuSDXcmtxW64VtjBwzZkswFijA5njUPCNunvgvAiLI1N4AiEQRklO3MEis_auZcaUk_x--IMlWzM7kqt7Qq4X8st4SFI8drpKf2Tcyc3k"
                                    />
                                    <img
                                        className="w-full h-64 object-cover rounded-3xl mt-12"
                                        data-alt="Close-up of a high-tech computer workstation with multiple monitors displaying sleek neon lime and deep black graphic designs for social media campaigns. The environment is a professional, dark-mode office with subtle purple and blue backlighting. The mood is creative, focused, and technologically advanced, reflecting cutting-edge social media management."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuABLyYdSDyOc_oyrYxWMi1m1BJahy7SI6W9Ke-SMSP8plvZwptxBQZBMifT26_ScucwZwF7w0ee-ipkpHKrEdJGxx-9MKvGen2nxDg-hbbdzUq-a9t6BB-_cqyXfRry7-qbp1gsD0decUt-1q6EHHOxZCm0B8HFptvt_ijG2FBUaQfEeFj6DqhBztPW-fF1Xb24h6MJMspMqqJrgxGzzKbUB_S5XQQqoV_hSPS9DgU2hK3bWdZSFQEQ53T6YVE9QuMR7iwIpHVjijI"
                                    />
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="font-label-mono text-label-mono text-neon-lime">02</span>
                                    <div className="h-[1px] w-12 bg-neon-lime"></div>
                                    <span className="font-label-mono text-label-mono uppercase text-stark-white">Social Media</span>
                                </div>
                                <h2 className="font-headline-md text-headline-md text-stark-white mb-6">Amplifying Your Voice in the Noise.</h2>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                                    Social media is the heartbeat of modern connection. I craft high-velocity content strategies and visuals that stop the scroll and convert followers into brand evangelists.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center gap-4 font-body-md text-stark-white">
                                        <span className="material-symbols-outlined text-neon-lime" data-icon="check_circle">check_circle</span>
                                        Viral Content Production
                                    </li>
                                    <li className="flex items-center gap-4 font-body-md text-stark-white">
                                        <span className="material-symbols-outlined text-neon-lime" data-icon="check_circle">check_circle</span>
                                        Community Engagement Systems
                                    </li>
                                    <li className="flex items-center gap-4 font-body-md text-stark-white">
                                        <span className="material-symbols-outlined text-neon-lime" data-icon="check_circle">check_circle</span>
                                        Performance Marketing Creative
                                    </li>
                                </ul>
                                <button className="bg-stark-white text-pure-black px-10 py-4 rounded-full font-label-mono text-label-mono uppercase hover:bg-neon-lime transition-colors">
                                    Launch My Socials
                                </button>
                            </div>
                        </div>
                    </section>

                    <div className="service-divider max-w-container-max mx-auto opacity-50"></div>

                    {/* UI/UX Designing */}
                    <section className="intersect-target transition-all duration-1000 opacity-0 translate-y-10 px-gutter max-w-container-max mx-auto" id="ui-ux">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="font-label-mono text-label-mono text-neon-lime">03</span>
                                    <div className="h-[1px] w-12 bg-neon-lime"></div>
                                    <span className="font-label-mono text-label-mono uppercase text-stark-white">UI/UX Designing</span>
                                </div>
                                <h2 className="font-headline-md text-headline-md text-stark-white mb-6">Interfaces Designed for Humans.</h2>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                                    I don't just build screens; I build experiences. Through rigorous research and iterative prototyping, I create digital products that are intuitive, beautiful, and highly functional.
                                </p>
                                <div className="bg-surface-container p-8 rounded-3xl border border-white/5 mb-10">
                                    <p className="font-label-mono text-label-mono text-neon-lime mb-4">THE PROCESS</p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <h4 className="text-stark-white font-bold mb-1">Discover</h4>
                                            <p className="text-xs text-on-surface-variant">User Research & Mapping</p>
                                        </div>
                                        <div>
                                            <h4 className="text-stark-white font-bold mb-1">Prototype</h4>
                                            <p className="text-xs text-on-surface-variant">Wireframes & Flow</p>
                                        </div>
                                        <div>
                                            <h4 className="text-stark-white font-bold mb-1">Refine</h4>
                                            <p className="text-xs text-on-surface-variant">High-Fi Visuals</p>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/contact" className="inline-block border-2 border-neon-lime text-stark-white px-10 py-4 rounded-full font-label-mono text-label-mono uppercase hover:bg-neon-lime hover:text-pure-black transition-all">
                                    Start a Project
                                </Link>
                            </div>
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-8">
                                    <div className="bg-surface-container-high rounded-3xl p-4 aspect-video overflow-hidden border border-neon-lime/30">
                                        <div className="flex gap-2 mb-4">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="h-4 w-3/4 bg-white/10 rounded"></div>
                                            <div className="h-32 w-full bg-neon-lime/10 rounded-2xl border border-dashed border-neon-lime/40"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-4 self-end">
                                    <div className="bg-white/5 rounded-3xl p-6 aspect-square border border-white/10 flex flex-col items-center justify-center text-center">
                                        <span className="material-symbols-outlined text-neon-lime text-4xl mb-2" data-icon="touch_app">touch_app</span>
                                        <p className="text-[10px] font-label-mono uppercase">User Flow</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="service-divider max-w-container-max mx-auto opacity-50"></div>

                    {/* Web Development */}
                    <section className="intersect-target transition-all duration-1000 opacity-0 translate-y-10 px-gutter max-w-container-max mx-auto" id="web-dev">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-neon-lime/5 blur-2xl group-hover:bg-neon-lime/10 transition-all duration-500"></div>
                                <div className="relative bg-pure-black border border-white/10 rounded-3xl p-8 font-label-mono text-sm leading-relaxed overflow-hidden">
                                    <div className="flex justify-between mb-6 opacity-40">
                                        <span>main.tsx</span>
                                        <div className="flex gap-2">
                                            <div className="w-2 h-2 rounded-full bg-white/20"></div>
                                            <div className="w-2 h-2 rounded-full bg-white/20"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p><span className="text-neon-lime">const</span> App = () =&gt; {'{'}</p>
                                        <p className="ml-4"><span className="text-neon-lime">return</span> (</p>
                                        <p className="ml-8 text-on-surface-variant">&lt;section className="hero"&gt;</p>
                                        <p className="ml-12 text-stark-white">&lt;h1&gt;Digital Disruption&lt;/h1&gt;</p>
                                        <p className="ml-8 text-on-surface-variant">&lt;/section&gt;</p>
                                        <p className="ml-4">);</p>
                                        <p>{'}'}</p>
                                        <p className="text-neon-lime opacity-50 mt-4">// High-performance web architecture</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="font-label-mono text-label-mono text-neon-lime">04</span>
                                    <div className="h-[1px] w-12 bg-neon-lime"></div>
                                    <span className="font-label-mono text-label-mono uppercase text-stark-white">Web Development</span>
                                </div>
                                <h2 className="font-headline-md text-headline-md text-stark-white mb-6">Performance-First Engineering.</h2>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                                    I build lightning-fast, secure, and scalable web applications using the latest modern tech stack. From interactive React frontends to robust API integrations, the code is as clean as the design.
                                </p>
                                <div className="flex flex-wrap gap-4 mb-10">
                                    <span className="px-4 py-2 border border-white/20 rounded-full font-label-mono text-xs uppercase text-stark-white">React / Next.js</span>
                                    <span className="px-4 py-2 border border-white/20 rounded-full font-label-mono text-xs uppercase text-stark-white">Tailwind CSS</span>
                                    <span className="px-4 py-2 border border-white/20 rounded-full font-label-mono text-xs uppercase text-stark-white">TypeScript</span>
                                    <span className="px-4 py-2 border border-white/20 rounded-full font-label-mono text-xs uppercase text-stark-white">Node.js</span>
                                </div>
                                <button className="bg-neon-lime text-pure-black px-10 py-4 rounded-full font-label-mono text-label-mono uppercase hover:scale-105 transition-transform">
                                    Develop My Vision
                                </button>
                            </div>
                        </div>
                    </section>
                </div>

                {/* CTA Section */}
                <section className="intersect-target transition-all duration-1000 opacity-0 translate-y-10 bg-pure-black py-section-gap px-gutter text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="grid grid-cols-12 h-full w-full">
                            <div className="border-r border-white/10 h-full"></div>
                            <div className="border-r border-white/10 h-full"></div>
                            <div className="border-r border-white/10 h-full"></div>
                            <div className="border-r border-white/10 h-full"></div>
                            <div className="border-r border-white/10 h-full"></div>
                            <div className="border-r border-white/10 h-full"></div>
                            <div className="border-r border-white/10 h-full"></div>
                            <div className="border-r border-white/10 h-full"></div>
                            <div className="border-r border-white/10 h-full"></div>
                            <div className="border-r border-white/10 h-full"></div>
                            <div className="border-r border-white/10 h-full"></div>
                            <div className="border-r border-white/10 h-full"></div>
                        </div>
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="font-headline-lg text-headline-lg text-stark-white mb-8">Ready to Level Up Your Brand?</h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
                            Let's collaborate to build something that doesn't just work, but wins.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/contact" className="bg-neon-lime text-pure-black px-12 py-5 rounded-full font-label-mono text-label-mono uppercase font-bold text-lg inline-block hover:scale-105 transition-transform">Book a Free Strategy Session</Link>
                            <Link to="/work" className="border border-white/20 text-stark-white px-12 py-5 rounded-full font-label-mono text-label-mono uppercase hover:border-neon-lime transition-colors inline-block hover:scale-105 transition-transform">View Portfolio</Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-pure-black border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-section-gap px-gutter py-section-gap max-w-container-max mx-auto">
                    <div className="col-span-1 md:col-span-2">
                        <div className="font-headline-lg text-headline-lg text-surface-variant opacity-20 mb-8 uppercase">ADITHYAN</div>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
                            Elevating digital products through calculated design and aggressive innovation.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-label-mono text-label-mono text-stark-white uppercase mb-6">Navigation</h5>
                        <ul className="space-y-4">
                            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-neon-lime transition-colors" to="/">Home</Link></li>
                            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-neon-lime transition-colors" to="/about">About</Link></li>
                            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-neon-lime transition-colors" to="/work">Work</Link></li>
                            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-neon-lime transition-colors" to="/social">Social</Link></li>
                            <li><Link className="font-body-md text-body-md text-neon-lime" to="/services">Services</Link></li>
                            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-neon-lime transition-colors" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-label-mono text-label-mono text-stark-white uppercase mb-6">Connect</h5>
                        <ul className="space-y-4">
                            <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-stark-white transition-colors" href="https://twitter.com/AdithyanBr" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-stark-white transition-colors" href="https://linkedin.com/in/Adithyan-b-r" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-stark-white transition-colors" href="https://github.com/adithyan-cruz" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <div className="px-gutter py-8 border-t border-white/5 max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-body-md text-body-md text-on-surface-variant">© {new Date().getFullYear()} Adithyan. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}