import Image from "next/image";
import { education, experience, links, projects, stack, ui, type Lang } from "../content";
import Terminal from "../Terminal";

const sections = ["experience", "education", "projects", "about", "contact"] as const;

function Heading({ id, cmd, label }: { id: string; cmd: string; label: string }) {
  return (
    <h2 id={`${id}-title`} className="cmd" aria-label={label}>
      <span className="prompt" aria-hidden="true">$</span> {cmd}
    </h2>
  );
}

// "Label: text" -> bold label
function Point({ text }: { text: string }) {
  const i = text.indexOf(": ");
  return i < 0 ? <li>{text}</li> : <li><strong>{text.slice(0, i)}</strong>{text.slice(i)}</li>;
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: l } = await params;
  const lang = l as Lang;
  const t = ui[lang];
  const month = new Intl.DateTimeFormat(lang, { month: "short" });
  const date = (ym: string) => `${month.format(new Date(`${ym}-01T12:00:00`)).replace(".", "")} ${ym.slice(0, 4)}`;

  return (
    <>
      <header className="bar wrap">
        <a href={`/${lang}`} className="host">daniel@aveiro:~</a>
        <nav aria-label={lang === "pt" ? "Secções" : "Sections"}>
          {sections.map((s) => (
            <a key={s} href={`#${s}`} className="navlink">{t.nav[s]}</a>
          ))}
          <span className="langs">
            <a href="/pt" aria-current={lang === "pt" ? "page" : undefined} hrefLang="pt">PT</a>
            <a href="/en" aria-current={lang === "en" ? "page" : undefined} hrefLang="en">EN</a>
          </span>
        </nav>
      </header>

      <main className="wrap">
        <section className="hero">
          <h1>Daniel Santos</h1>
          <p className="tagline">{t.tagline}</p>
          <p className="status"><span className="dot" aria-hidden="true" />{t.status}</p>
          <Terminal lang={lang} />
        </section>

        {([["experience", experience], ["education", education]] as const).map(([id, entries]) => (
          <section key={id} id={id} aria-labelledby={`${id}-title`}>
            <Heading id={id} cmd={t.cmd[id]} label={t.nav[id]} />
            <ol className="log" data-kind={id}>
              {entries.map((c) => (
                <li key={c.from + c.place.en}>
                  <span className="when">{date(c.from)} – {date(c.to)}</span>
                  <div>
                    <h3>{c.title[lang]}</h3>
                    <p className="meta">{c.place[lang]}</p>
                    {c.note && <p className="note">{c.note[lang]}</p>}
                    {c.points && (
                      <ul className="points">
                        {c.points[lang].map((p) => <Point key={p} text={p} />)}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}

        <section id="projects" aria-labelledby="projects-title">
          <Heading id="projects" cmd={t.cmd.projects} label={t.nav.projects} />
          <ul className="projects">
            {projects.map((p) => (
              <li key={p.title.en}>
                <div className="row">
                  <h3>{p.title[lang]}</h3>
                  <span className="meta">{p.kind[lang]}</span>
                </div>
                <p>{p.desc[lang]}</p>
                <ul className="tags" aria-label="Stack">
                  {p.tech.map((x) => <li key={x}>{x}</li>)}
                </ul>
                <p className="links">
                  {p.links.map((x) => (
                    <a key={x.href} href={x.href} target="_blank" rel="noopener noreferrer">{x.label[lang]} ↗</a>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="stack" aria-labelledby="stack-title">
          <Heading id="stack" cmd={t.cmd.stack} label="Stack" />
          <dl className="stack">
            {stack.map((s) => (
              <div key={s.group.en}>
                <dt>{s.group[lang]}</dt>
                <dd>{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="about" aria-labelledby="about-title">
          <Heading id="about" cmd={t.cmd.about} label={t.nav.about} />
          <div className="about">
            <Image src="/photo.jpg" alt="Daniel Santos" width={160} height={160} />
            <div>{t.about.map((p) => <p key={p}>{p}</p>)}</div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title">
          <Heading id="contact" cmd={t.cmd.contact} label={t.nav.contact} />
          <p className="lead">{t.contact}</p>
          <ul className="contact">
            <li><a href={`mailto:${links.email}`}>{links.email}</a></li>
            <li><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
            <li><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
            <li><a href={links.cv[lang]} target="_blank">{t.cv} ↗</a></li>
          </ul>
        </section>
      </main>

      <footer className="wrap foot">
        <span>© {new Date().getFullYear()} Daniel Santos</span>
        <a href="https://github.com/SkyGlis/portfolio" target="_blank" rel="noopener noreferrer">
          {lang === "pt" ? "código fonte" : "source code"}
        </a>
      </footer>
    </>
  );
}
