"use client";

import { Container, Section, Button, Heading } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { useState } from "react";

export default function AdLibraryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "Video", "Static", "Audio"];
  const industries = ["All", "DTC & Ecommerce", "SaaS & Technology", "Real Estate", "Beauty & Skincare"];

  const examples = [
    {
      title: "[Example Title]",
      type: "Client Work",
      category: "Video",
      industry: "DTC & Ecommerce",
      format: "9:16 Vertical"
    },
    {
      title: "[Example Title]",
      type: "Concept Piece",
      category: "Static",
      industry: "Beauty & Skincare",
      format: "4:5 Portrait"
    },
    {
      title: "[Example Title]",
      type: "Client Work",
      category: "Video",
      industry: "SaaS & Technology",
      format: "16:9 Landscape"
    },
    {
      title: "[Example Title]",
      type: "Concept Piece",
      category: "Audio",
      industry: "Consumer Electronics",
      format: "Spot"
    },
    {
      title: "[Example Title]",
      type: "Client Work",
      category: "Static",
      industry: "Real Estate",
      format: "1:1 Square"
    },
    {
      title: "[Example Title]",
      type: "Concept Piece",
      category: "Video",
      industry: "DTC & Ecommerce",
      format: "9:16 Vertical"
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span
              className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              SHOWCASE
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              AI Ad Library
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              A curated collection of AI-native creative examples across industries and formats.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 py-6 border-y border-white/[0.08]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/30 mr-2">Category:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full font-sans text-[10px] font-medium transition-all duration-200 border ${
                    activeCategory === cat 
                      ? "bg-white text-black border-white" 
                      : "bg-white/[0.03] text-white/50 border-white/10 hover:text-white hover:border-white/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
               <select className="bg-black border border-white/10 rounded-lg px-4 py-2 font-sans text-xs text-white/60 focus:outline-none focus:border-white/30 cursor-pointer">
                  <option>All Industries</option>
                  {industries.slice(1).map(ind => (
                    <option key={ind}>{ind}</option>
                  ))}
               </select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
            {examples.map((item, index) => (
              <div 
                key={index}
                className="group relative aspect-[4/5] rounded-2xl border border-white/[0.08] overflow-hidden bg-white/[0.02]"
              >
                <div className="absolute inset-0 flex items-center justify-center text-white/5 font-display text-lg uppercase tracking-[0.2em] select-none">
                  Preview
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                    item.type === 'Client Work' 
                      ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                      : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                  }`}>
                    {item.type}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[8px] font-sans font-bold uppercase tracking-[0.1em] text-white/40 bg-white/[0.05] px-1.5 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="text-[8px] font-sans font-bold uppercase tracking-[0.1em] text-white/40 bg-white/[0.05] px-1.5 py-0.5 rounded">
                      {item.industry}
                    </span>
                  </div>
                  <h3 className="text-base font-display font-medium text-white group-hover:text-white/80 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <button className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-6 py-2 bg-white text-black font-sans text-xs font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Asset
                  </span>
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 mb-24 flex items-center justify-center gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            <p className="font-sans text-[11px] text-white/40 uppercase tracking-widest">
              All displayed work is used with appropriate permissions and authorization.
            </p>
          </div>

          <div className="text-center pt-16 border-t border-white/10">
            <Heading as="h2" size="section" className="mb-8">
              Build your AI creative roadmap
            </Heading>
            <Button asChild variant="primary" size="lg">
              <Link href="/book-a-demo">Start Your Project</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
