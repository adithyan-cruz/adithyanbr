import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import heartImage from './assets/Gemini_Generated_Image_uhzf6juhzf6juhzf.png';
import brainImage from './assets/The 7-Second _Brain Song_ Ritual for Mental Clarity 🧠.jpeg';
import project3Image from './assets/Gemini_Generated_Image_bsyhgbbsyhgbbsyh.png';

export default function WorkPage() {
    useEffect(() => {
        // Simple parallax effect for images on scroll
        const handleScroll = () => {
            const images = document.querySelectorAll('img');
            const scrollY = window.scrollY;

            images.forEach((img) => {
                const speed = 0.05;
                const rect = img.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const offset = (scrollY - (rect.top + scrollY)) * speed;
                    img.style.transform = `translateY(${offset}px) scale(1.1)`;
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Hover sound/haptic simulation (visual only)
        const buttons = document.querySelectorAll('button, a');
        const handleMouseEnter = (e: Event) => {
            const btn = e.currentTarget as HTMLElement;
            btn.classList.add('scale-95');
            setTimeout(() => btn.classList.remove('scale-95'), 100);
        };

        buttons.forEach((btn) => {
            btn.addEventListener('mouseenter', handleMouseEnter);
        });

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            buttons.forEach((btn) => {
                btn.removeEventListener('mouseenter', handleMouseEnter);
            });
        };
    }, []);

    return (
        <div className="font-body-md text-body-md overflow-x-hidden bg-[#000000] text-[#e2e2e2] antialiased">




            <main className="pt-32 pb-section-gap">
                {/* Hero Section */}
                <section className="intersect-target transition-all duration-1000 opacity-0 translate-y-10 relative px-gutter pt-24 max-w-container-max mx-auto mb-24 overflow-hidden">
                    <div className="absolute -top-20 -left-10 text-[20vw] font-display-2xl opacity-5 text-stroke select-none pointer-events-none uppercase">
                        Selected
                    </div>
                    <div className="relative z-10">
                        <h1 className="font-display-2xl text-display-2xl md:text-display-2xl text-stark-white leading-none uppercase mb-8">
                            Featured <span className="text-neon-lime">Works</span>
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                            A curated collection of digital experiences, where engineering precision meets disruptive design. Pushing boundaries through code and aesthetics.
                        </p>
                    </div>
                </section>

                {/* Filters */}
                <section className="intersect-target transition-all duration-1000 opacity-0 translate-y-10 px-gutter max-w-container-max mx-auto mb-16">
                    <div className="flex flex-wrap gap-4 items-center border-b border-white/10 pb-8">
                        <span className="font-label-mono text-label-mono text-on-surface-variant uppercase mr-4">
                            Filter by:
                        </span>
                        <button className="px-6 py-2 rounded-full border border-neon-lime bg-neon-lime text-pure-black font-label-mono text-label-mono uppercase transition-all">
                            All Projects
                        </button>
                        <button className="px-6 py-2 rounded-full border border-white/20 hover:border-neon-lime text-stark-white font-label-mono text-label-mono uppercase transition-all">
                            UI/UX Design
                        </button>
                        <button className="px-6 py-2 rounded-full border border-white/20 hover:border-neon-lime text-stark-white font-label-mono text-label-mono uppercase transition-all">
                            Web Development
                        </button>
                    </div>
                </section>

                {/* Project Grid */}
                <section className="intersect-target transition-all duration-1000 opacity-0 translate-y-10 px-gutter max-w-container-max mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                        {/* Project Card 1 */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[4/5] overflow-hidden mb-8 neo-border rounded-xl">
                                <img
                                    alt="Cyber Dynamics Project"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    data-alt="A futuristic UI design interface with vibrant neon green elements glowing against a deep matte black background. The composition is highly architectural, featuring crisp lines, glassmorphism layers, and complex data visualization widgets. The lighting is dramatic, emphasizing high contrast and technical precision in a cyber-minimalist style."
                                    src={heartImage}
                                />
                                <div className="absolute inset-0 bg-pure-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="material-symbols-outlined text-stark-white text-6xl" data-weight="fill">
                                        arrow_outward
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="font-label-mono text-label-mono px-3 py-1 border border-white/20 rounded-full text-on-surface-variant uppercase">
                                    Python
                                </span>
                                <span className="font-label-mono text-label-mono px-3 py-1 border border-white/20 rounded-full text-on-surface-variant uppercase">
                                    Machine Learning
                                </span>
                                <span className="font-label-mono text-label-mono px-3 py-1 border border-white/20 rounded-full text-on-surface-variant uppercase">
                                    TensorFlow
                                </span>
                            </div>
                            <h2 className="font-headline-lg text-headline-lg text-stark-white group-hover:text-neon-lime transition-colors uppercase leading-none mb-4">
                                cardiac
                            </h2>
                            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                                Retinal fundus images can be analyzed using AI to identify vascular changes and predict cardiovascular disease risk through a non-invasive screening approach.
                            </p>
                        </div>

                        {/* Project Card 2 */}
                        <div className="group cursor-pointer md:mt-32">
                            <div className="relative aspect-[4/5] overflow-hidden mb-8 neo-border rounded-xl">
                                <img
                                    alt="Nexus Ecosystem Project"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    data-alt="Modern tech hardware and sleek digital devices arranged on a dark reflective surface. The scene is bathed in a subtle atmospheric green glow emanating from the screens. The photography is sharp and cinematic, capturing the essence of high-end consumer electronics with a focus on minimalist form and premium materials."
                                    src={brainImage}
                                />
                                <div className="absolute inset-0 bg-pure-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="material-symbols-outlined text-stark-white text-6xl" data-weight="fill">
                                        arrow_outward
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="font-label-mono text-label-mono px-3 py-1 border border-white/20 rounded-full text-on-surface-variant uppercase">
                                    UI/UX Design
                                </span>
                                <span className="font-label-mono text-label-mono px-3 py-1 border border-white/20 rounded-full text-on-surface-variant uppercase">
                                    Machine Learning
                                </span>
                            </div>
                            <h2 className="font-headline-lg text-headline-lg text-stark-white group-hover:text-neon-lime transition-colors uppercase leading-none mb-4">
                                vibe Lens
                            </h2>
                            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                                Machine learning scans text to automatically classify the overall tone as positive, negative, or neutral.
                            </p>
                        </div>

                        {/* Project Card 3 */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[4/5] overflow-hidden mb-8 neo-border rounded-xl">
                                <img
                                    alt="Void Protocol Project"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    data-alt="A dark, abstract digital composition representing complex code structures and blockchain networks. Glowing neon lime green lines connect nodes in a deep 3D space, creating a sense of infinite depth. The style is technical and clean, utilizing high-contrast lighting to make the network topology stand out against the pure black background."
                                    src={project3Image}
                                />
                                <div className="absolute inset-0 bg-pure-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="material-symbols-outlined text-stark-white text-6xl" data-weight="fill">
                                        arrow_outward
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="font-label-mono text-label-mono px-3 py-1 border border-white/20 rounded-full text-on-surface-variant uppercase">
                                    Web Development
                                </span>
                                <span className="font-label-mono text-label-mono px-3 py-1 border border-white/20 rounded-full text-on-surface-variant uppercase">
                                    UI/UX Design
                                </span>
                            </div>
                            <h2 className="font-headline-lg text-headline-lg text-stark-white group-hover:text-neon-lime transition-colors uppercase leading-none mb-4">
                                Mudocalypse
                            </h2>
                            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                                An immersive mud bike racing platform featuring a gritty, high-octane UI/UX design and responsive web architecture tailored for extreme sports enthusiasts.
                            </p>
                        </div>

                        {/* Project Card 4 */}
                        <div className="group cursor-pointer md:mt-32">
                            <div className="relative aspect-[4/5] overflow-hidden mb-8 neo-border rounded-xl">
                                <img
                                    alt="Onyx Visuals Project"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    data-alt="An artistic rendering of liquid metal textures with high-contrast reflections. The ripples are sharp and metallic, catching light that feels digital and cool. Deep shadows and bright neon accents create a high-octane visual experience. The overall mood is futuristic, sleek, and aggressive, fitting a premium brand's creative direction."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxjDgYiXLblHSps3KunjpDEwVOsz-KIGHB2hNWNUuN72pd0D_cR_Wh2xML82sGFPhyzT4FLTQc2f7w2RA54L2vcZZMM06q9c6rUVUQ9W9girQuhj61VVlAZNF4WpJ_ec5XJYI5Q1uFPxfN2__uje4zV71w4sc5-4EK0YmoKAbKAynZTqzCMaQqVabXvhq7aO06-8M_5HV65IauPXhbMIk6CfNC7tSjZcDqGmD7_E9dDPuAmIvlpeHKm6IbcLx1Ee3__WXDAXsDM_M"
                                />
                                <div className="absolute inset-0 bg-pure-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="material-symbols-outlined text-stark-white text-6xl" data-weight="fill">
                                        arrow_outward
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="font-label-mono text-label-mono px-3 py-1 border border-white/20 rounded-full text-on-surface-variant uppercase">
                                    Generative AI
                                </span>
                                <span className="font-label-mono text-label-mono px-3 py-1 border border-white/20 rounded-full text-on-surface-variant uppercase">
                                    Automated Pipeline
                                </span>
                            </div>
                            <h2 className="font-headline-lg text-headline-lg text-stark-white group-hover:text-neon-lime transition-colors uppercase leading-none mb-4">
                                SceneCrafter AI
                            </h2>
                            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                                An automated AI pipeline that enhances standard photos with cinematic lighting, precise object removal, and DSLR-style background blur.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="intersect-target transition-all duration-1000 opacity-0 translate-y-10 mt-section-gap px-gutter max-w-container-max mx-auto text-center">
                    <div className="py-24 border-y border-white/10 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-neon-lime rounded-full scale-150"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-neon-lime/30 rounded-full scale-150"></div>
                        </div>
                        <h2 className="font-display-2xl text-[80px] md:text-display-2xl text-stark-white uppercase leading-none mb-12">
                            Next big <br /> <span className="text-neon-lime">Project?</span>
                        </h2>
                        <Link to="/contact" className="bg-neon-lime text-pure-black px-12 py-6 rounded-full font-headline-md text-headline-md uppercase hover:scale-105 transition-all duration-300 inline-block relative z-10">
                            Book A Call
                        </Link>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-pure-black border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-section-gap px-gutter py-section-gap max-w-container-max mx-auto">
                    <div className="md:col-span-2">
                        <div className="font-headline-lg text-headline-lg text-surface-variant opacity-20 uppercase mb-8">
                            ADITHYAN
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-xs mb-8">
                            An independent design and development studio crafting high-octane digital experiences for forward-thinking brands.
                        </p>
                        <div className="flex gap-6">
                            <a className="text-stark-white hover:text-neon-lime transition-colors" href="https://twitter.com/AdithyanBr" target="_blank" rel="noopener noreferrer">
                                Twitter
                            </a>
                            <a className="text-stark-white hover:text-neon-lime transition-colors" href="https://linkedin.com/in/Adithyan-b-r" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                            <a className="text-stark-white hover:text-neon-lime transition-colors" href="https://github.com/adithyan-cruz" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-label-mono text-label-mono text-neon-lime uppercase mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-stark-white transition-colors" to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-stark-white transition-colors" to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="font-body-md text-body-md text-neon-lime" to="/work">
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-stark-white transition-colors" to="/services">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-stark-white transition-colors" to="/social">
                                    Social
                                </Link>
                            </li>
                            <li>
                                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-stark-white transition-colors" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-label-mono text-label-mono text-neon-lime uppercase mb-6">Legal &amp; Meta</h4>
                        <ul className="space-y-4">
                            <li>
                                <a className="font-body-md text-body-md text-on-surface-variant hover:text-stark-white transition-colors" href="#">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a className="font-body-md text-body-md text-on-surface-variant hover:text-stark-white transition-colors" href="#">
                                    Terms of Use
                                </a>
                            </li>
                            <li>
                                <a className="font-body-md text-body-md text-on-surface-variant hover:text-stark-white transition-colors" href="#">
                                    Sitemap
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="px-gutter py-8 border-t border-white/5 text-center">
                    <p className="font-body-md text-body-md text-on-surface-variant">
                        © 2026 Adithyan. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}