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
      url: "https://github.com/akbolaji-04", 
      icon: <Github size={20} />,
      color: "bg-zinc-800",
      desc: "Code & Repos"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abolaji-akorede-1068ab327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
      icon: <Linkedin size={20} />,
      color: "bg-[#0077B5]",
      desc: "Professional Profile"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/2347069119429", 
      icon: <MessageCircle size={20} />,
      color: "bg-[#25D366]",
      desc: "Direct Chat"
    }
  ];

  const contentLinks = [
    {
      name: "TikTok",
      handle: "@Abolaji", 
      url: "https://www.tiktok.com/@s_h.a_d_o_w?_r=1&_t=ZS-949W5Rj9fGS", 
      icon: <Video size={24} />,
      color: "from-pink-500 to-cyan-500",
      desc: "Tech Vlogs"
    },
    {
      name: "Instagram",
      handle: "@abolaji_akorede", 
      url: "https://www.instagram.com/sh_adow004?utm_source=qr",
      icon: <Instagram size={24} />,
      color: "from-purple-500 to-orange-500",
      desc: "Personal & Tech"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-32 pb-20">
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
            className="lg:col-span-2 bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-between relative overflow-hidden min-h-[300px]"
          >
            
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 text-zinc-400 mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-black text-xs font-bold uppercase tracking-widest border border-zinc-800">
                  Lagos, NG
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-black text-xs font-bold uppercase tracking-widest text-white border border-zinc-800">
                  {time} (WAT)
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

          <div className="flex flex-col gap-4">
            {contentLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="group flex flex-1 bg-black border border-zinc-800 p-6 items-center justify-between hover:bg-zinc-900 transition-all min-h-[140px]"
              >
                 <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-1">{link.name}</h3>
                    <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">{link.handle}</p>
                 </div>
                 <ArrowUpRight size={20} className="text-zinc-600 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* 3. Professional Links */}
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
                className="group flex flex-col justify-between p-6 border border-zinc-800 bg-black hover:bg-zinc-900 transition-all min-h-[140px]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-white">
                    {social.name}
                  </div>
                  <ArrowUpRight size={20} className="text-zinc-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">
                    {social.desc}
                  </h4>
                </div>
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </main>
  );
}
