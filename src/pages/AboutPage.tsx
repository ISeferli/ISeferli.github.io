import { about } from '../data/about';
import { SmartImage } from '../components/SmartImage';
import { SocialLinks } from '../components/SocialLinks';

export function AboutPage() {
  return (
    <div className="container">
      <section className="about-hero">
        <div className="about-bio">
          <h1>{about.aboutTitle}</h1>
          {about.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <SocialLinks socials={about.socials} className="about-socials" />
        </div>
        <SmartImage image={about.portrait} className="portrait" loading="eager" />
      </section>

      <section className="about-section">
        <h2 className="section-title">What I work with</h2>
        <div className="skill-groups">
          {about.skills.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">Experience</h2>
        <ol className="timeline">
          {about.experience.map((item) => (
            <li key={item.title + item.when}>
              <span className="when">{item.when}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
