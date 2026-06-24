import { proofPoints } from "@/data/profile";

export function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Credibility highlights">
      <div className="proof-strip-marquee">
        {[0, 1].map((copy) => (
          <div
            aria-hidden={copy === 1}
            className="proof-strip-track mono"
            key={copy}
          >
            {proofPoints.map((point) => (
              <span key={`${copy}-${point}`}>{point}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
