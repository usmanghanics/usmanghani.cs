import { me } from '@/data/site';
import { CopyEmail } from './CopyEmail';
import { Icon } from './Icon';

export function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="contact" data-reveal>
          <h2 className="h2" id="contact-title">
            Have an app, an AI idea or a website to build?
          </h2>
          <p>Tell me what you have in mind and where it needs to go. I’ll reply with honest thoughts and a plan.</p>
          <div className="mail">
            <a href={`mailto:${me.email}`}>{me.email}</a>
            <CopyEmail email={me.email} />
          </div>
          <div className="btn-row">
            <a className="btn btn-primary" href={`mailto:${me.email}`}>
              <Icon name="envelope-simple" size={20} /> Email Me
            </a>
            <a className="btn btn-outline" href={me.links.linkedin} target="_blank" rel="noopener me">
              <Icon name="linkedin-logo" size={20} /> LinkedIn
            </a>
            <a className="btn btn-outline" href={me.links.github} target="_blank" rel="noopener me">
              <Icon name="github-logo" size={20} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
