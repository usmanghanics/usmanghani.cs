import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="footer page-shell">
      <p className="mono">© 2026 {profile.name}. Built with Next.js.</p>
      <a href="#top">Back to top</a>
    </footer>
  );
}
