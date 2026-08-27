import { Film, BookOpen, Monitor, Image, Mic, TrendingUp, Zap, Cpu, type LucideIcon } from "lucide-react";
import { Container, Section, Heading } from "@/components/ui";
import type { Capability } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  film: Film,
  "book-open": BookOpen,
  monitor: Monitor,
  image: Image,
  mic: Mic,
  "trending-up": TrendingUp,
  zap: Zap,
  cpu: Cpu,
};

interface CapabilitiesProps {
  capabilities: Capability[];
}

export function Capabilities({ capabilities }: CapabilitiesProps) {
  return (
    <Section id="capabilities" className="relative overflow-hidden bg-[#0a0a0a]">
      <Container className="relative z-20">
        <div className="max-w-lg mb-16">
          <Heading as="h2" size="label" className="mb-4 text-white/50">Services</Heading>
          <Heading as="h2" size="section" className="mb-0 text-white">Every creative format, delivered.</Heading>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-black">

          {capabilities.map((cap) => {
            const Icon = iconMap[cap.icon] ?? Zap;
            return (
              <div
                key={cap.title}
                className="group grid grid-cols-1 lg:grid-cols-12 border-b border-white/[0.08] last:border-b-0 hover:bg-white/[0.025] transition-colors duration-200"
              >
                {/* Icon + Title */}
                <div className="lg:col-span-3 flex items-center gap-4 px-5 py-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-white/[0.08] lg:bg-transparent">
                  <div className="flex h-10 w-10 lg:h-9 lg:w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] text-white/40 group-hover:text-white/70 transition-colors duration-200">
                    <Icon size={17} />
                  </div>
                  <h3 className="font-display text-base lg:text-sm font-semibold text-white leading-snug">
                    {cap.title}
                  </h3>
                </div>

                {/* Use case */}
                <div className="lg:col-span-4 flex flex-col justify-center px-5 py-4 lg:p-6 border-b lg:border-b-0 lg:border-r border-white/[0.08]">
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-wider mb-1.5 text-white/30">
                    Use case
                  </p>
                  <p className="font-sans text-sm leading-relaxed text-white/52">
                    {cap.useCase}
                  </p>
                </div>

                {/* Outcome */}
                <div className="lg:col-span-5 flex flex-col justify-center px-5 py-4 lg:p-6">
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-wider mb-1.5 text-[#6633EE]/55">
                    Outcome
                  </p>
                  <p className="font-sans text-sm leading-relaxed text-white/75">
                    {cap.outcome}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
