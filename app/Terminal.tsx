"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { langs, links, stack, ui, type Lang } from "./content";
import { scrollToId } from "./SmoothScroll";

type Line = { cmd: string; out: ReactNode; boot?: boolean };

const jump: Record<string, string> = {
  projetos: "projects", projects: "projects",
  experiencia: "experience", "experiência": "experience", experience: "experience",
  estudos: "education", education: "education",
  percurso: "experience", career: "experience",
  sobre: "about", about: "about",
  contacto: "contact", contact: "contact",
};

export default function Terminal({ lang }: { lang: Lang }) {
  const t = ui[lang].term;
  const router = useRouter();
  const [lines, setLines] = useState<Line[]>([{ cmd: "whoami", out: t.whoami, boot: true }]);
  const [value, setValue] = useState("");
  const history = useRef<string[]>([]);
  const pos = useRef(0);
  const body = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    body.current?.scrollTo({ top: body.current.scrollHeight });
  }, [lines]);

  function exec(raw: string): ReactNode {
    const [cmd = "", arg] = raw.trim().toLowerCase().split(/\s+/);
    if (cmd in jump) {
      scrollToId(jump[cmd]);
      return t.going;
    }
    switch (cmd) {
      case "":
        return null;
      case "help":
      case "ajuda":
        return (
          <dl className="help">
            {t.help.map(([c, d]) => (
              <div key={c}><dt>{c}</dt><dd>{d}</dd></div>
            ))}
          </dl>
        );
      case "whoami":
        return t.whoami;
      case "ls":
        return t.ls;
      case "stack":
        return stack.map((s) => `${s.group[lang]}: ${s.items.join(", ")}`).join("\n");
      case "cv":
        window.open(links.cv[lang], "_blank");
        return t.going;
      case "lang":
        if (langs.includes(arg as Lang)) {
          router.push(`/${arg}`);
          return t.going;
        }
        return "lang pt | lang en";
      case "sudo":
        return t.sudo;
      default:
        return t.notFound(cmd);
    }
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const raw = value;
    setValue("");
    if (raw.trim()) history.current.push(raw);
    pos.current = history.current.length;
    if (raw.trim().toLowerCase() === "clear") return setLines([]);
    setLines((ls) => [...ls, { cmd: raw, out: exec(raw) }]);
  }

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
    e.preventDefault();
    const h = history.current;
    pos.current = Math.max(0, Math.min(h.length, pos.current + (e.key === "ArrowUp" ? -1 : 1)));
    setValue(h[pos.current] ?? "");
  }

  return (
    // Clicking anywhere in the window focuses the prompt, like a real terminal (keyboard users tab straight to the input).
    <div className="term" onClick={() => input.current?.focus()}>
      <div className="term-bar" aria-hidden="true">
        <span /><span /><span />
        <em>~/daniel</em>
      </div>
      <div className="term-body" ref={body} aria-live="polite" data-lenis-prevent>
        {lines.map((l, i) => (
          <div key={i} className={l.boot ? "entry boot" : "entry"}>
            <p className="in"><span className="prompt">$</span> <span className="typed">{l.cmd}</span></p>
            {l.out != null && <div className="out">{l.out}</div>}
          </div>
        ))}
        <form onSubmit={submit} className="in">
          <label htmlFor="term-input" className="sr-only">{t.label}</label>
          <span className="prompt" aria-hidden="true">$</span>
          <input
            id="term-input"
            ref={input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKey}
            placeholder={t.hint}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            enterKeyHint="go"
          />
        </form>
      </div>
    </div>
  );
}
