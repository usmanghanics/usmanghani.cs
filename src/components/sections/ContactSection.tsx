"use client";

import { Check, Copy, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { profile } from "@/data/profile";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="section-pad contact-section" id="contact">
      <RevealOnScroll className="contact-card page-shell glass">
        <SectionLabel>Get in touch</SectionLabel>
        <h2>Available for product engineering, mobile apps, and AI workflows.</h2>
        <p>For roles, freelance work, or collaboration, email is the best place to start.</p>
        <button className="email-button glass" type="button" onClick={copyEmail}>
          <Mail size={18} />
          {profile.email}
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
        <div className="social-row">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={profile.socials.x} target="_blank" rel="noreferrer" aria-label="X">
            <Twitter size={18} />
          </a>
          <a href={profile.socials.veloq} target="_blank" rel="noreferrer" aria-label="Veloq">
            Veloq
          </a>
        </div>
        {copied ? <div className="toast glass mono">Email copied to clipboard</div> : null}
      </RevealOnScroll>
    </section>
  );
}
