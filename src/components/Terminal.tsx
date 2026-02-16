"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
    "> initializing_neural_link...",
    "> loading_modules [tensorflow, pytorch, transformers]...",
    "> injecting_entropy [magic]...",
    "> subject: Wasiq",
    "> status: READY TO DANCE",
];

export default function Terminal() {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);

    useEffect(() => {
        const showLines = async () => {
            for (let i = 0; i < lines.length; i++) {
                await new Promise((resolve) => setTimeout(resolve, 800)); // Delay between lines
                setDisplayedLines((prev) => [...prev, lines[i]]);
            }
        };
        showLines();
    }, []);

    return (
        <div className="w-full max-w-sm mx-auto bg-zinc-900 border border-zinc-800 rounded-lg p-6 shadow-2xl font-mono text-sm leading-relaxed overflow-hidden">
            <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <div className="text-zinc-400 space-y-1">
                {displayedLines.map((line, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="text-zinc-600 mr-2">$</span>
                        <span className={index === lines.length - 1 ? "text-green-400 font-bold" : ""}>
                            {line}
                        </span>
                    </motion.div>
                ))}
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-zinc-500 ml-1 translate-y-0.5"
                />
            </div>
        </div>
    );
}
