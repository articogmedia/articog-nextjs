"use client";

import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { toast } from 'sonner';

export default function PrivacyRequestPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Your request has been submitted. We will be in touch shortly.');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Data Rights Request</h1>
          <p className="text-zinc-400 text-lg mb-10">
            Submit a request to know, delete, or correct your personal information.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8 bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-300">Full Name</label>
              <input 
                id="name" 
                placeholder="John Doe" 
                required 
                className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors" 
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email Address</label>
              <input 
                id="email" 
                type="email" 
                placeholder="john@example.com" 
                required 
                className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors" 
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="type" className="text-sm font-medium text-zinc-300">Request Type</label>
              <select 
                id="type"
                required 
                className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
              >
                <option value="" disabled selected>Select request type</option>
                <option value="know">Right to Know</option>
                <option value="delete">Right to Delete</option>
                <option value="correct">Right to Correct</option>
                <option value="opt-out">Opt-Out of Sale/Sharing</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="details" className="text-sm font-medium text-zinc-300">Details / Message</label>
              <textarea 
                id="details" 
                placeholder="Please provide any additional context for your request..." 
                className="w-full min-h-[120px] bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors resize-none" 
              />
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-sm text-zinc-500 italic leading-relaxed">
                Note: We may need to verify your identity before processing certain requests. We aim to respond within the timeframe required by applicable law.
              </p>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-white text-black hover:bg-zinc-200 h-14 text-lg font-semibold rounded-full transition-all">
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>
            </div>
          </form>

          <div className="mt-12 space-y-6">
            <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
              <h2 className="text-xl font-bold mb-2">Alternate Contact Method</h2>
              <p className="text-zinc-400">
                You can also reach us at{' '}
                <a href="mailto:info@articog.com" className="text-white hover:underline underline-offset-4 decoration-zinc-700">
                  info@articog.com
                </a>.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy-choices" className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-800">
                ← Back to Privacy Choices
              </Link>
              <Link to="/privacy/california" className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-800">
                California Privacy Notice
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
