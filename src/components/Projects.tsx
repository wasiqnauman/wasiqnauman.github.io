"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
    {
        title: "Agentic Insight Engine",
        description:
            "A multi-agent analytical system where specialized agents (Categorizer, Sentiment Analyst, and Trend Reporter) autonomously collaborate to transform 50k+ raw reviews into executive-ready SWOT reports.",
        tech: ["CrewAI", "LangChain"],
        github: "#",
        external: "#",
    },
    {
        title: "ModelRouter: Dynamic LLM Orchestration",
        description:
            "A semantic routing gateway that dynamically triages incoming prompts to a tiered model hierarchy (e.g., GPT-4o for complex reasoning vs. fine-tuned Llama-3/Mistral for extraction), reducing API expenditures by 70% without compromising output quality.",
        tech: ["vLLM", "FastAPI"],
        github: "#",
        external: "#",
    },
    {
        title: "SynthMRI",
        description:
            "Generative AI pipeline that fine-tunes Stable Diffusion on the BraTS20 MRI dataset to synthesize high-fidelity medical images for data augmentation.",
        tech: ["PyTorch", "Diffusers", "LoRA"],
        github: "#",
        external: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-12">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 mb-12"
                >
                    <h2 className="text-3xl font-bold text-zinc-100">
                        <span className="text-zinc-500 font-mono mr-2">02.</span>
                        Some Things I've Built
                    </h2>
                    <div className="h-px bg-zinc-800 flex-grow max-w-xs"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-zinc-900/20 backdrop-blur-sm border border-zinc-800/50 p-8 rounded-xl hover:border-zinc-500 transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xl font-bold text-zinc-200 group-hover:text-white transition-colors relative z-10">
                                    {project.title}
                                </h3>
                                <div className="flex gap-4 relative z-10">
                                    <a
                                        href={project.github}
                                        className="text-zinc-500 hover:text-white transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.external}
                                        className="text-zinc-500 hover:text-white transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <p className="text-zinc-400 mb-8 text-sm leading-relaxed relative z-10">
                                {project.description}
                            </p>

                            <ul className="flex flex-wrap gap-2 mt-auto relative z-10">
                                {project.tech.map((tech, i) => (
                                    <li key={i} className="px-3 py-1 text-xs font-mono border border-zinc-800 rounded-full text-zinc-500 bg-zinc-900/50 group-hover:border-zinc-600 group-hover:text-zinc-300 transition-colors">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
