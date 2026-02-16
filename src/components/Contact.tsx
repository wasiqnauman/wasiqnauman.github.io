"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 text-center flex flex-col items-center justify-center min-h-[50vh]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="container mx-auto max-w-2xl relative mb-12"
            >
                <p className="text-zinc-500 font-mono mb-6">04. What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-8">
                    Initialize Connection
                </h2>
                <p className="text-zinc-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
                    I am currently seeking opportunities to build intelligent systems at scale. Whether you have a question about my research or want to discuss a potential collaboration, my inbox is open.
                </p>

                <a
                    href="mailto:wasiq.qureshi@hotmail.com"
                    className="inline-block px-10 py-4 border border-zinc-700 text-zinc-300 font-mono text-lg rounded hover:bg-zinc-800 hover:border-zinc-400 hover:text-white transition-all duration-300"
                >
                    Say Hello
                </a>
            </motion.div>

            <footer className="text-zinc-700 font-mono text-xs w-full text-center">
                Built with Next.js, Tailwind & Framer Motion
            </footer>
        </section>
    );
}
