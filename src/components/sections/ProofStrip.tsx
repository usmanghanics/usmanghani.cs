import { proofPoints } from "@/data/profile";

export function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Credibility highlights">
      <div className="proof-strip-track mono">
        {proofPoints.map((point) => (
          <span key={point}>{point}</span>
        ))}
      </div>
    </section>
  );
}
