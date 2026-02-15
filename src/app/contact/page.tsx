"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Video, 
  MessageCircle,
  MapPin,
  Instagram
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  const email = "akbolaji04@gmail.com";

  // Real-time Lagos Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { 
        timeZone: "Africa/Lagos", 
        hour: "2-digit", 
        minute: "2-digit" 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/abolaji-ak", // Update with real link
      icon: <Github size={20} />,
      color: "bg-zinc-800",
      desc: "Code & Repos"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/abolaji-akorede", // Update with real link
      icon: <Linkedin size={20} />,
      color: "bg-[#0077B5]",
      desc: "Professional Profile"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/234XXXXXXXXXX", // Update with real number
      icon: <MessageCircle size={20} />,
      color: "bg-[#25D366]",
      desc: "Direct Chat"
    }
  ];

  const contentLinks = [
    {
      name: "TikTok",
      handle: "@abolaji_tech", // Placeholder
      url: "https://tiktok.com", 
      icon: <Video size={24} />,
      color: "from-pink-500 to-cyan-500",
      desc: "Tech Vlogs"
    },
    {
      name: "Instagram",
      handle: "@abolaji_ak", 
      url: "https://instagram.com",
      icon: <Instagram size={24} />,
      color: "from-purple-500 to-orange-500",
      desc: "Personal & Tech"
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-rose-500 selection:text-white pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Let's Build <br />
            <span className="text-rose-500">Something Great.</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-xl">
            Currently available for freelance projects and remote roles. 
            Based in Lagos, ready for the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* 1. Main Contact Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group min-h-[300px]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 text-zinc-400 mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 rounded-full text-xs font-mono border border-zinc-700/50">
                  <MapPin size={14} className="text-rose-500" /> Lagos, NG
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 rounded-full text-xs font-mono text-emerald-400 border border-zinc-700/50">
                  ● {time} (WAT)
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white">Get in touch</h2>
            </div>

            <div className="relative z-10">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2 block">Email Address</label>
              <div className="flex items-center gap-4 flex-wrap">
                <a href={`mailto:${email}`} className="text-2xl md:text-4xl font-bold text-white hover:text-rose-500 transition-colors break-all">
                  {email}
                </a>
                <button 
                  onClick={handleCopy}
                  className="p-3 rounded-full bg-zinc-800 hover:bg-white hover:text-black transition-all shrink-0"
                  title="Copy Email"
                >
                  {copied ? <Check size={20} className="text-emerald-500" /> : <Copy size={20} />}
                </button>
              </div>
            </div>
          </motion.div>

          {/* 2. Content Creator Cards (Stacked Vertically) */}
          <div className="flex flex-col gap-6">
            {contentLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="group relative flex-1 bg-zinc-900/30 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-center overflow-hidden hover:border-zinc-600 transition-all min-h-[140px]"
              >
                 <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${link.color} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`} />
                 <div className="relative z-10">
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-2.5 bg-zinc-800 rounded-full text-white">{link.icon}</div>
                      <ArrowUpRight size={20} className="text-zinc-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{link.name}</h3>
                    <p className="text-xs text-zinc-500">{link.handle}</p>
                 </div>
              </motion.a>
            ))}
          </div>

          {/* 3. Professional Links (Fixed Layout) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.url}
                target="_blank"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all"
              >
                <div className={`p-3 rounded-full ${social.color} text-white shrink-0`}>
                  {social.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white flex items-center gap-2 text-base">
                    {social.name} 
                  </h4>
                  <p className="text-xs text-zinc-500">{social.desc}</p>
                </div>
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </main>
  );
}