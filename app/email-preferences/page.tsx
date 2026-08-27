"use client";

import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { toast } from 'sonner';

export default function EmailPreferencesPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [unsubscribedAll, setUnsubscribedAll] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Your preferences have been updated.');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Email Preferences</h1>
          <p className="text-zinc-400 text-lg mb-10">
            Manage what emails you receive from us.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8 bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
            <div className="space-y-6">
              <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Categories</label>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group cursor-pointer" onClick={() => !unsubscribedAll && null}>
                  <div className="pt-0.5">
                    <input 
                      type="checkbox" 
                      id="product-updates" 
                      disabled={unsubscribedAll}
                      className="w-5 h-5 rounded border-zinc-700 bg-black text-white focus:ring-0 focus:ring-offset-0 disabled:opacity-50" 
                    />
                  </div>
                  <div>
                    <label htmlFor="product-updates" className={`text-lg font-medium transition-colors ${unsubscribedAll ? 'text-zinc-600' : 'text-zinc-200 group-hover:text-white'}`}>Product Updates</label>
                    <p className="text-sm text-zinc-500">Stay informed about new features and platform improvements.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group cursor-pointer">
                  <div className="pt-0.5">
                    <input 
                      type="checkbox" 
                      id="insights" 
                      disabled={unsubscribedAll}
                      className="w-5 h-5 rounded border-zinc-700 bg-black text-white focus:ring-0 focus:ring-offset-0 disabled:opacity-50" 
                    />
                  </div>
                  <div>
                    <label htmlFor="insights" className={`text-lg font-medium transition-colors ${unsubscribedAll ? 'text-zinc-600' : 'text-zinc-200 group-hover:text-white'}`}>Case Studies & Insights</label>
                    <p className="text-sm text-zinc-500">Expert analysis, industry trends, and creative production tips.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group cursor-pointer">
                  <div className="pt-0.5">
                    <input 
                      type="checkbox" 
                      id="events" 
                      disabled={unsubscribedAll}
                      className="w-5 h-5 rounded border-zinc-700 bg-black text-white focus:ring-0 focus:ring-offset-0 disabled:opacity-50" 
                    />
                  </div>
                  <div>
                    <label htmlFor="events" className={`text-lg font-medium transition-colors ${unsubscribedAll ? 'text-zinc-600' : 'text-zinc-200 group-hover:text-white'}`}>Event Invitations</label>
                    <p className="text-sm text-zinc-500">Webinars, workshops, and exclusive networking events.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800">
              <div className="flex items-start space-x-3 group cursor-pointer" onClick={() => setUnsubscribedAll(!unsubscribedAll)}>
                <div className="pt-0.5">
                  <input 
                    type="checkbox" 
                    id="unsubscribe-all" 
                    checked={unsubscribedAll}
                    onChange={(e) => setUnsubscribedAll(e.target.checked)}
                    className="w-5 h-5 rounded border-zinc-700 bg-black text-white focus:ring-0 focus:ring-offset-0" 
                  />
                </div>
                <div>
                  <label htmlFor="unsubscribe-all" className="text-lg font-bold text-white transition-colors">Unsubscribe from all emails</label>
                  <p className="text-sm text-zinc-500">You will no longer receive any marketing communications from Articog.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-sm text-zinc-500 italic leading-relaxed">
                Note: Changes may take a few business days to take effect. Transactional emails related to active projects or account billing may still be sent regardless of marketing preferences.
              </p>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-white text-black hover:bg-zinc-200 h-14 text-lg font-semibold rounded-full transition-all">
                {isSubmitting ? 'Updating...' : 'Save Preferences'}
              </Button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <Link to="/legal/privacy-policy" className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-800 text-sm">
              Read our full Privacy Policy
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
