"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility to merge tailwind classes safely
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Projects", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center pt-6">
      <div className="flex items-center bg-black border border-zinc-800 px-2 py-2 rounded-sm shadow-none">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-6 py-2 text-sm font-bold uppercase tracking-widest transition-colors",
                isActive ? "text-black bg-white" : "text-zinc-500 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}