
import { useState, useEffect } from "react";
import { Link } from "@/components/ui/Link";
import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui";
import { menuGroups } from "./Header";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openGroups, setOpenGroups] = useState<string[]>([]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setOpenGroups([]);
  }, [isOpen]);

  const toggleGroup = (label: string) => {
    setOpenGroups(prev => 
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="fixed right-0 top-0 z-50 h-full w-80 flex flex-col"
        style={{ background: "#060606", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 shrink-0">
          <span className="font-display text-base font-semibold text-white">Articog</span>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.10] text-white/45 hover:text-white/90 transition-colors"
            aria-label="Close menu"
          >
            <X size={16} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex flex-col flex-1 overflow-y-auto px-4 pb-12">
          {menuGroups.map((group) => {
            const isGroupOpen = openGroups.includes(group.label);
            return (
              <div key={group.label} className="border-b border-white/[0.04]">
                <button
                  onClick={() => toggleGroup(group.label)}
                  className="w-full flex items-center justify-between px-3 py-4 font-sans text-[14px] font-medium text-white/70 hover:text-white transition-colors"
                >
                  <span>{group.label}</span>
                  <ChevronDown
                    size={14}
                    className="opacity-40 transition-transform duration-200"
                    style={{ transform: isGroupOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                {isGroupOpen && (
                  <div className="flex flex-col gap-1 pb-4 pl-3">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={onClose}
                        className="font-sans text-[13px] px-3 py-2 rounded-lg text-white/50 hover:text-white/85 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="border-b border-white/[0.04]">
            <button
              onClick={() => toggleGroup("Pricing")}
              className="w-full flex items-center justify-between px-3 py-4 font-sans text-[14px] font-medium text-white/70 hover:text-white transition-colors"
            >
              <span>Pricing</span>
              <ChevronDown
                size={14}
                className={`opacity-40 transition-transform duration-200 ${openGroups.includes("Pricing") ? "rotate-180" : ""}`}
              />
            </button>
            {openGroups.includes("Pricing") && (
              <div className="flex flex-col gap-1 pb-4 pl-3">
                <Link href="/pricing" onClick={onClose} className="font-sans text-[13px] px-3 py-2 rounded-lg text-white/50 hover:text-white/85 transition-colors">Pricing Overview</Link>
                <Link href="/pricing/monthly-plans" onClick={onClose} className="font-sans text-[13px] px-3 py-2 rounded-lg text-white/50 hover:text-white/85 transition-colors">Monthly Plans</Link>
                <Link href="/pricing/pilot" onClick={onClose} className="font-sans text-[13px] px-3 py-2 rounded-lg text-white/50 hover:text-white/85 transition-colors">Pilot Project</Link>
                <Link href="/pricing/faq" onClick={onClose} className="font-sans text-[13px] px-3 py-2 rounded-lg text-white/50 hover:text-white/85 transition-colors">Pricing FAQ</Link>
              </div>
            )}
          </div>
        </nav>

        {/* CTA */}
        <div className="px-6 pb-8 pt-6 shrink-0 bg-[#060606]">
          <Button asChild variant="primary" size="lg" className="w-full">
            <Link href="/book-a-demo" onClick={onClose}>Book a Demo</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
