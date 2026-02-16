"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Resume() {
    const experiences = [
        {
            company: "Stealth AI Startup",
            role: "Senior Machine Learning Engineer",
            period: "Jan 2023 - Present",
            description:
                "Architected multi-agent orchestration for high-scale cold outreach program using CrewAI (30% more leads, 4x faster). Deployed RAG pipelines on proprietary data with LangChain for deep KPI insights.",
        },
        {
            company: "Verino",
            role: "Machine Learning Engineer",
            period: "June 2021 - Oct 2022",
            description:
                "Deployed fine-tuned Llama-2 models on serverless AWS infrastructure, reducing idle costs by 85%. Engineered high-throughput RAG systems using LangChain and Pinecone to power context-aware LLM applications.",
        },
        {
            company: "Acquire",
            role: "Software Engineering Intern",
            period: "May 2020 - August 2020",
            description:
                "Architected high-throughput data pipelines using Numpy and Pandas, transforming raw data into structured assets. Optimized retrieval speeds by 50%, enabling faster model training and inference.",
        },
        {
            company: "University of Miami",
            role: "B.Sc. Computer Engineering",
            period: "2018 - 2022",
            description:
                "Graduated with Dean's Honor list.",
        },
    ];

    return (
        <section id="resume" className="py-24 px-6 md:px-12">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-12"
                >
                    <h2 className="text-3xl font-bold text-zinc-100">
                        <span className="text-zinc-500 font-mono mr-2">03.</span>
                        Where I've Worked
                    </h2>
                    <div className="h-px bg-zinc-800 flex-grow max-w-xs"></div>
                </motion.div>

                <div className="space-y-12 border-l border-zinc-700 ml-3 pl-8 relative">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative"
                        >
                            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-none bg-zinc-900 border border-zinc-500"></div>
                            <h3 className="text-xl font-bold text-zinc-200">
                                {exp.role} <span className="text-zinc-400">@ {exp.company}</span>
                            </h3>
                            <p className="font-mono text-sm text-zinc-500 mb-4">{exp.period}</p>
                            <p className="text-zinc-400 max-w-2xl">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href="/resume.pdf"
                        className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-700 text-zinc-300 bg-zinc-900 rounded-none hover:bg-zinc-800 hover:text-white transition-all font-mono"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Full Resume <Download className="w-4 h-4 ml-2" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
