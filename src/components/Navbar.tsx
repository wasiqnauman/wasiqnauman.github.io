"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if scrolled
            const scrolled = window.scrollY > 100;

            // Check if at bottom (with buffer)
            const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

            setHasScrolled(scrolled);
            setIsBottom(bottom);

            // Highlight active section based on scroll
            const sections = navItems.map((item) => item.href.substring(1));
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= -100 && rect.top < window.innerHeight / 2;
                }
                return false;
            });
            if (current) setActiveSection(`#${current}`);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: isBottom ? 100 : 0, opacity: isBottom ? 0 : 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`pointer-events-auto flex items-center gap-2 px-2 py-2 transition-all duration-300 ${hasScrolled && !isBottom
                    ? "bg-zinc-900/80 backdrop-blur-md border border-zinc-800 shadow-xl"
                    : "bg-transparent border border-transparent shadow-none"
                    } rounded-xl`} // Rectangular container (rounded-xl instead of rounded-full)
            >
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === item.href
                            ? "bg-zinc-100 text-zinc-900" /* Active: White button, dark text */
                            : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                            }`}
                        // Rectangular buttons (rounded-lg)
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveSection(item.href);
                            const element = document.querySelector(item.href);
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        {item.name}
                    </Link>
                ))}
            </motion.nav>
        </div>
    );
}
