import Image from "next/image";
import "./v2.css";

const waitlistUrl = "https://www.minty.oliveandvinehk.com/";

const heroContent = {
  lede: "No more lost receipts,\nno more missing numbers.",
  cta: "Join Waitlist",
  imageAlt: "Minty mascot with laptop and phone showing the Minty dashboard",
};

const problemContent = {
  tag: "The problem",
  headline:
    "Stuck in a messy and tiring routine. Enjoy a simple and fresh day-end.",
  highlights: ["messy", "tiring"] as const,
  items: [
    "Rushed entries at closing",
    "Numbers don't match",
    "Extra time fixing mistakes",
    "Stress follows you home",
  ],
  imageAlt: "Minty mascot inside a cardboard box looking overwhelmed",
};

const howItWorksContent = {
  title: "Minty helps you close the day,\neveryday.",
  subtitle: "Three methods. One go-to dashboard. Zero spreadsheet trauma.",
  steps: [
    {
      num: 1,
      title: "Enter today's numbers",
      body: "You'll be making and entering quickly in a clean, guided interface.",
      image: "/numbers.png",
      width: 2400,
      height: 1933,
      alt: "Minty mascot beside a bag of coins",
    },
    {
      num: 2,
      title: "Check the cash",
      body: "Count your draw amount + Minty does the math along side you.",
      image: "/cash.png",
      width: 2666,
      height: 1777,
      alt: "Minty mascot with a calculator and stacks of cash",
    },
    {
      num: 3,
      title: "Get a clean daily report",
      body: "A clean, accurate summary that's ready to review, share or export.",
      image: "/report.png",
      width: 2379,
      height: 1778,
      alt: "Minty mascot holding glasses and a phone",
    },
  ],
};

const waitlistContent = {
  ask: "Interested?",
  title: "Keep me updated",
  cta: "Join the Waitlist",
  mascotAlt: "Minty mascot",
};

function renderHeadline(headline: string, highlights: readonly string[]) {
  const pattern = new RegExp(`(${highlights.join("|")})`, "gi");
  const parts = headline.split(pattern);
  return parts.map((part, i) =>
    highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="hi">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

function HeroSection() {
  return (
    <section
      className="hero"
      aria-labelledby="v2-hero-title"
      style={{ minHeight: 650 }}
    >
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1
            id="v2-hero-title"
            style={{ whiteSpace: "nowrap", fontSize: 80, margin: "0 0 28px 0" }}
          >
            Daily <span className="accent">Minty</span>
          </h1>
          <p className="lede" style={{ whiteSpace: "pre-line" }}>
            {heroContent.lede}
          </p>
          <div className="hero-cta">
            <a
              href="#v2-waitlist"
              className="btn btn--gradient btn--alive btn--xxl"
            >
              {heroContent.cta}
            </a>
          </div>
        </div>
        <div className="hero-art" aria-label={heroContent.imageAlt}>
          <Image
            src="/daily.png"
            alt={heroContent.imageAlt}
            width={1374}
            height={773}
            loading="eager"
            fetchPriority="high"
            quality={100}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section
      className="band-problem"
      aria-labelledby="v2-problem-title"
      style={{ minHeight: 460, padding: "32px 0" }}
    >
      <div className="wrap problem-grid">
        <div className="problem-art" aria-label={problemContent.imageAlt}>
          <Image
            src="/problem.png"
            alt={problemContent.imageAlt}
            width={2526}
            height={1548}
            quality={100}
            style={{
              width: "100%",
              maxWidth: 440,
              height: "auto",
              objectFit: "contain",
              margin: "0 auto",
              display: "block",
            }}
          />
        </div>
        <div className="problem-card">
          <span className="problem-tag">{problemContent.tag}</span>
          <h2 id="v2-problem-title">
            {renderHeadline(problemContent.headline, problemContent.highlights)}
          </h2>
          <ul className="problem-list">
            {problemContent.items.map((item) => (
              <li key={item}>
                <span className="num" aria-hidden="true">
                  ✕
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="band-how" id="how" aria-labelledby="v2-how-title">
      <div className="wrap">
        <h2 id="v2-how-title" style={{ whiteSpace: "pre-line" }}>
          {howItWorksContent.title}
        </h2>
        <p>{howItWorksContent.subtitle}</p>
        <div className="steps">
          {howItWorksContent.steps.map((step) => (
            <article key={step.num} className="step">
              <div className="step-art" aria-label={step.alt}>
                <Image
                  src={step.image}
                  alt={step.alt}
                  width={step.width}
                  height={step.height}
                  quality={100}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <span className="step-num" aria-hidden="true">
                {step.num}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaitlistSection() {
  return (
    <section
      className="band-waitlist"
      id="v2-waitlist"
      aria-labelledby="v2-waitlist-title"
    >
      <div className="wrap waitlist-layout">
        <div className="waitlist-glass">
          <h2 id="v2-waitlist-title">
            <span className="ask">{waitlistContent.ask}</span>
            {waitlistContent.title}
          </h2>
          <a
            href={waitlistUrl}
            className="waitlist-register"
            rel="noopener noreferrer"
          >
            <span>{waitlistContent.cta}</span>
            <span className="arrow" aria-hidden="true">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </a>
        </div>
        <div className="waitlist-mascot waitlist-mascot--solo">
          <Image
            src="/daily.png"
            alt={waitlistContent.mascotAlt}
            width={1374}
            height={773}
            quality={100}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}

function FooterBlock() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot">
      <div className="wrap foot-row">
        <div className="left">
          <span>© {year} Olive &amp; Vine HK. All rights reserved.</span>
        </div>
        <div className="right">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="mailto:hello@dailyminty.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function V2Page() {
  return (
    <div className="v2">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <WaitlistSection />
      <FooterBlock />
    </div>
  );
}
