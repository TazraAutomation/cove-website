import Consultation from "./consultation";
import Testimonials from "./testimonials";
import About from "./about";
import Image from "next/image";
const services = [
  {
    title: "Strategic sourcing",
    description:
      "Supplier research, market evaluation and competitive sourcing aligned with your business requirements.",
  },
  {
    title: "Commercial negotiations",
    description:
      "Pricing analysis, contract negotiations and commercial advisory that protect your business interests.",
  },
  {
    title: "Technology spend",
    description:
      "Greater visibility into existing investments, purchasing inefficiencies and opportunities for cost optimization.",
  },
  {
    title: "Contract & renewal advisory",
    description:
      "Proactive preparation for upcoming renewals, supplier negotiations and contractual commitments.",
  },
];

const approach = [
  {
    title: "Establish the brief",
    description: "Requirements, budget and procurement scope.",
  },
  {
    title: "Explore the market",
    description: "Supplier assessment and proposal comparison.",
  },
  {
    title: "Negotiate with purpose",
    description: "Commercial terms and negotiated proposals.",
  },
  {
    title: "Support your decision",
    description: "Final findings and actionable recommendations.",
  },
];

function Logo() {
  return (
    <a href="#home" className="brand" aria-label="Cove">
      <Image
        src="/cove-logo.png"
        alt="Cove logo"
        width={44}
        height={44}
        className="cove-logo"
        priority
      />
      <span>cove.</span>
    </a>
  );
}


export default function Home() {
  return (
    <main id="home">

      {/* Navigation */}
      <header className="navigation">
        <div className="nav-inner">
          <Logo />

          <nav aria-label="Main navigation">
            <a href="#expertise">Expertise</a>
            <a href="#approach">Our approach</a>
            <a href="#contact" className="button">
              Let's talk ↗
            </a>
          </nav>
        </div>
      </header>

      {/* Homepage hero */}
      <section className="hero container">
        <div className="hero-content">
          <p className="eyebrow">
            Technology Procurement & Advisory
          </p>

          <h1>
            Better decisions.
            <br />
            <span>Better deals.</span>
          </h1>

          <p className="hero-description">
            Helping businesses navigate the technology
            market, negotiate with confidence and make
            every investment count.
          </p>

          <a href="#contact" className="button">
            Start a conversation ↗
          </a>
        </div>

        <div className="hero-art">
          <svg
            viewBox="0 0 300 310"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <rect width="300" height="310" fill="#E0E8E2" />

            <path
              d="M-35 170 Q100 -30 320 20 L320 110 Q130 25 -35 250Z"
              fill="#5B8277"
            />

            <path
              d="M-35 205 Q100 80 320 195 L320 300 Q130 205 -35 310Z"
              fill="#91AFA0"
            />

            <path
              d="M-35 240 Q100 130 320 255 L320 340 L-35 340Z"
              fill="#29463D"
            />

            <path
              d="M0 168 Q120 25 300 60"
              stroke="#F9F6F3"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="introduction">
        <div className="container intro-grid">
          <h2>
            Your interests.
            <br />
            Our starting point.
          </h2>

          <p>
            We work with your business to simplify
            technology purchasing. From sourcing
            suppliers to negotiating agreements,
            Cove brings independent commercial expertise
            to the decisions that matter.
          </p>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="container expertise">
        <div>
          <p className="eyebrow">Areas of expertise</p>

          <h2>Beyond the purchase order.</h2>

          <p className="section-description">
            Commercial support across the
            technology procurement lifecycle.
          </p>
        </div>

        <div className="service-list">
          {services.map((service, index) => (
            <details
              key={service.title}
              open={index === 0}
            >
              <summary>
                {service.title}
                <span className="service-toggle" />
              </summary>

              <p>{service.description}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Procurement methodology */}
      <section id="approach" className="method">
        <div className="container">

          <p className="eyebrow">Working with Cove</p>

          <h2>On your side of the table.</h2>

          <p className="method-description">
            A collaborative engagement, with clear
            expectations and tangible deliverables.
          </p>

          <div className="method-steps">
            {approach.map((step, index) => (
              <article className="method-row" key={step.title}>

                <span className="step-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology categories */}
      <section className="container categories">

        <p className="eyebrow">Our coverage</p>

        <h2>Across your technology portfolio.</h2>

        <div className="category-list">
          <span>Software & SaaS</span>
          <span>Cloud & Hosting</span>
          <span>Cybersecurity</span>
          <span>IT Infrastructure</span>
          <span>Hardware</span>
          <span>IT Services</span>
        </div>
      </section>
<About />
<Testimonials />
      {/* Contact section */}
<Consultation />

      {/* Footer */}
      <footer className="container footer">
        <div>
          <Logo />
          <p>Better decisions. Better deals.</p>
        </div>

        <div className="footer-location">
          
          <p>Technology Procurement & Advisory</p>
          <p>© 2026 Cove.</p>
        </div>
      </footer>

    </main>
  );
}
