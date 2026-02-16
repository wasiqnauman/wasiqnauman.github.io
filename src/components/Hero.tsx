"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Terminal from "./Terminal";

export default function Hero() {
    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center justify-center pt-20"
        >
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-zinc-400 font-mono text-lg mb-4">
                        Hi, my name is
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 mb-4">
                        Wasiq.
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-bold text-zinc-500 mb-6">
                        I dance with AI.
                    </h2>
                    <p className="text-zinc-400 max-w-lg text-lg mb-8">
                        Bridging the gap between the magical and the practical. I build scalable, human-centric AI systems designed to endure.
                    </p>

                    <div className="flex gap-4 mb-10">
                        <a
                            href="https://github.com/wasiqnauman"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded hover:bg-zinc-800 transition-colors"
                        >
                            <Github className="w-6 h-6 text-zinc-400 hover:text-white" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/wasiqn/"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded hover:bg-zinc-800 transition-colors"
                        >
                            <Linkedin className="w-6 h-6 text-zinc-400 hover:text-white" />
                        </a>
                        <a
                            href="mailto:wasiq.qureshi@hotmail.com"
                            className="p-2 rounded hover:bg-zinc-800 transition-colors"
                        >
                            <Mail className="w-6 h-6 text-zinc-400 hover:text-white" />
                        </a>
                    </div>

                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-700 text-zinc-100 bg-zinc-900 rounded hover:bg-zinc-800 hover:text-white hover:border-white/50 transition-colors font-mono"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Check out my work <ArrowRight className="w-4 h-4" />
                    </motion.a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative hidden md:block"
                >
                    <Terminal />
                </motion.div>
            </div>
        </section>
    );
}
