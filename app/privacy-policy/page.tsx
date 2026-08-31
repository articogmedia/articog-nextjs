import { Container, Section, Heading } from "@/components/ui";

const PRIVACY_EMAIL = "info@articog.com";
const EFFECTIVE_DATE = "[DATE]";
const LAST_UPDATED = "[DATE]";

type Block =
  | { kind: "p"; text: string }
  | { kind: "list"; title?: string; items: string[] };

type PolicySection = {
  id: string;
  number: string;
  title: string;
  blocks: Block[];
};

const sections: PolicySection[] = [
  {
    id: "introduction",
    number: "1",
    title: "Introduction",
    blocks: [
      {
        kind: "p",
        text: "This Privacy Policy describes how Articog handles personal information collected through our website, contact forms, demo requests, and related interactions. It applies to information we receive when you browse the site, submit a form, request a demo, or otherwise communicate with us.",
      },
      {
        kind: "p",
        text: "By using the Articog website, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with it, please do not use the website or submit information to us.",
      },
    ],
  },
  {
    id: "information-we-collect",
    number: "2",
    title: "Information We Collect",
    blocks: [
      {
        kind: "p",
        text: "We collect information in the categories below. The exact information we receive depends on how you interact with the website.",
      },
      {
        kind: "list",
        title: "Information you provide to us",
        items: [
          "Contact information",
          "Work email",
          "Company name",
          "Job role",
          "Service interests",
          "Budget and timeline information",
          "Information submitted through forms",
        ],
      },
      {
        kind: "list",
        title: "Information collected automatically",
        items: [
          "Device and browser information",
          "IP address",
          "Website usage information",
          "Cookies and similar technologies",
        ],
      },
      {
        kind: "p",
        text: "You are not required to provide optional information. If you choose not to provide information that is necessary to respond to a request, we may not be able to fulfil it.",
      },
    ],
  },
  {
    id: "how-we-use-information",
    number: "3",
    title: "How We Use Your Information",
    blocks: [
      {
        kind: "p",
        text: "We may use the information we collect for the following purposes:",
      },
      {
        kind: "list",
        items: [
          "Respond to inquiries",
          "Schedule and manage demo calls",
          "Provide requested services",
          "Communicate about Articog services",
          "Improve the website and user experience",
          "Analyze website performance",
          "Maintain website security",
          "Prevent fraud or abuse",
          "Meet applicable legal obligations",
        ],
      },
    ],
  },
  {
    id: "how-we-share-information",
    number: "4",
    title: "How We Share Information",
    blocks: [
      {
        kind: "p",
        text: "We may share information with third-party service providers when it is necessary to operate the website and provide our services. These providers may include the following categories:",
      },
      {
        kind: "list",
        items: [
          "Hosting and cloud providers",
          "Analytics providers",
          "Scheduling and demo providers",
          "Communication providers",
          "Other service providers supporting Articog operations",
        ],
      },
      {
        kind: "p",
        text: "Service providers are expected to use information only as needed to perform services on our behalf. We may also disclose information when required by law, legal process, or a governmental request, or where we believe disclosure is reasonably necessary to protect Articog's rights, our users, or the security and integrity of our services.",
      },
    ],
  },
  {
    id: "cookies",
    number: "5",
    title: "Cookies and Tracking Technologies",
    blocks: [
      {
        kind: "p",
        text: "We and our service providers may use cookies and similar technologies for website functionality, analytics, performance measurement, and other legitimate purposes where applicable. These technologies help the site operate correctly and help us understand how visitors use it.",
      },
      {
        kind: "p",
        text: "Most browsers allow you to refuse or delete cookies through their settings, and some browsers offer additional privacy controls. Where required, we provide cookie controls on the website. Disabling certain cookies may affect how parts of the site function.",
      },
    ],
  },
  {
    id: "data-retention",
    number: "6",
    title: "Data Retention",
    blocks: [
      {
        kind: "p",
        text: "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including to satisfy legal requirements, resolve disputes, enforce agreements, and meet legitimate business needs. When information is no longer needed, we take steps to delete it or render it non-identifiable.",
      },
    ],
  },
  {
    id: "data-security",
    number: "7",
    title: "Data Security",
    blocks: [
      {
        kind: "p",
        text: "We take reasonable measures designed to protect personal information against unauthorized access, alteration, disclosure, or destruction. No method of transmission or storage is completely secure, and we cannot guarantee absolute security of information transmitted to or from the website.",
      },
    ],
  },
  {
    id: "your-privacy-rights",
    number: "8",
    title: "Your Privacy Rights",
    blocks: [
      {
        kind: "p",
        text: "Depending on where you live, you may have rights relating to your personal information, which may include:",
      },
      {
        kind: "list",
        items: [
          "Accessing personal information we hold about you",
          "Requesting correction of inaccurate information",
          "Requesting deletion of personal information",
          "Requesting information about how personal information is used",
          "Opting out of certain processing where applicable",
        ],
      },
      {
        kind: "p",
        text: "The rights available to you, and how they apply, vary depending on your location and applicable law. To make a request, contact us using the details in the Contact Us section below. We may need to verify your identity before acting on a request.",
      },
    ],
  },
  {
    id: "california-privacy-rights",
    number: "9",
    title: "California Privacy Rights",
    blocks: [
      {
        kind: "p",
        text: "If you are a California resident, California law may provide you with additional rights regarding your personal information, including the right to know what personal information is collected and how it is used and disclosed, the right to request deletion, the right to request correction, and the right not to receive discriminatory treatment for exercising your rights.",
      },
      {
        kind: "p",
        text: `To submit a California privacy request, contact us at ${PRIVACY_EMAIL} with the details of your request. We will respond in accordance with applicable law and may need to verify your identity before processing your request. An authorized agent may submit a request on your behalf where permitted by law.`,
      },
    ],
  },
  {
    id: "childrens-privacy",
    number: "10",
    title: "Children's Privacy",
    blocks: [
      {
        kind: "p",
        text: "The Articog website is intended for a business audience and is not directed to children. We do not knowingly collect personal information from children where prohibited by applicable law. If you believe a child has provided us with personal information, please contact us so we can take appropriate action.",
      },
    ],
  },
  {
    id: "third-party-websites",
    number: "11",
    title: "Third-Party Websites and Services",
    blocks: [
      {
        kind: "p",
        text: "Our website may contain links to third-party websites or services that we do not control. This Privacy Policy does not apply to those third parties, and we are not responsible for their privacy practices or content. We encourage you to review the privacy policies of any third-party site or service you visit.",
      },
    ],
  },
  {
    id: "changes",
    number: "12",
    title: "Changes to This Privacy Policy",
    blocks: [
      {
        kind: "p",
        text: 'We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date shown at the top of this page. We encourage you to review this page periodically to stay informed about how we handle personal information.',
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto w-full max-w-[1060px] px-1 sm:px-2">
            <header className="mb-14 md:mb-20">
              <span className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                Legal
              </span>

              <Heading as="h1" size="hero" className="mb-6">
                Privacy Policy
              </Heading>

              <p className="max-w-3xl font-sans text-base leading-relaxed text-white/55 md:text-lg">
                Your privacy matters to us. This Privacy Policy explains how
                Articog collects, uses, shares, and protects information when
                you use our website and services.
              </p>

              <dl className="mt-10 grid gap-4 border-t border-white/[0.08] pt-8 sm:grid-cols-2">
                <div className="min-w-0">
                  <dt className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35">
                    Effective Date
                  </dt>
                  <dd className="mt-2 font-sans text-sm text-white/70">
                    {EFFECTIVE_DATE}
                  </dd>
                </div>

                <div className="min-w-0">
                  <dt className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35">
                    Last Updated
                  </dt>
                  <dd className="mt-2 font-sans text-sm text-white/70">
                    {LAST_UPDATED}
                  </dd>
                </div>
              </dl>
            </header>

            <div className="flex flex-col">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="border-t border-white/[0.07] py-10 md:py-14"
                >
                  <div className="grid gap-4 md:grid-cols-[auto_minmax(0,1fr)] md:gap-8">
                    <span
                      aria-hidden="true"
                      className="font-display text-sm font-semibold tabular-nums text-accent md:pt-1.5"
                    >
                      {section.number.padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <h2 className="mb-5 font-display text-xl font-semibold text-white md:text-2xl">
                        {section.title}
                      </h2>

                      <div className="flex flex-col gap-6">
                        {section.blocks.map((block, i) =>
                          block.kind === "p" ? (
                            <p
                              key={i}
                              className="max-w-[68ch] font-sans text-[15px] leading-[1.75] text-white/60 md:text-base"
                            >
                              {block.text}
                            </p>
                          ) : (
                            <div key={i}>
                              {block.title && (
                                <h3 className="mb-3 font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-white/45">
                                  {block.title}
                                </h3>
                              )}

                              <ul className="grid gap-2.5 sm:grid-cols-2">
                                {block.items.map((item) => (
                                  <li
                                    key={item}
                                    className="flex min-w-0 items-start gap-3 font-sans text-[15px] leading-[1.6] text-white/60"
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-accent"
                                    />
                                    <span className="min-w-0">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              ))}

              <section
                id="contact-us"
                className="border-t border-white/[0.07] py-10 md:py-14"
              >
                <div className="grid gap-4 md:grid-cols-[auto_minmax(0,1fr)] md:gap-8">
                  <span
                    aria-hidden="true"
                    className="font-display text-sm font-semibold tabular-nums text-accent md:pt-1.5"
                  >
                    13
                  </span>

                  <div className="min-w-0">
                    <h2 className="mb-5 font-display text-xl font-semibold text-white md:text-2xl">
                      Contact Us
                    </h2>

                    <p className="mb-8 max-w-[68ch] font-sans text-[15px] leading-[1.75] text-white/60 md:text-base">
                      If you have questions about this Privacy Policy, or
                      would like to exercise a privacy right, please get in
                      touch.
                    </p>

                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
                      <h3 className="font-display text-base font-semibold text-white">
                        Privacy Questions
                      </h3>

                      <p className="mt-2 font-sans text-sm text-white/50">
                        Articog
                      </p>

                      <p className="mt-4 min-w-0 break-words font-sans text-sm text-white/60">
                        Email:{" "}
                        <a
                          href={`mailto:${PRIVACY_EMAIL}`}
                          className="text-white underline underline-offset-4 decoration-white/30 transition-colors hover:decoration-white"
                        >
                          {PRIVACY_EMAIL}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}