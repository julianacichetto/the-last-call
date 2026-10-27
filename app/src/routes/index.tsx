import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "THE CASE FILES | The Last Call" },
      { name: "description", content: "A cinematic printable mystery. Follow the evidence, question the timeline, and solve The Last Call." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="case-site">
      <header className="site-nav">
        <a className="wordmark" href="#top" aria-label="The Case Files home"><span className="mark">CF</span><span>THE CASE FILES</span></a>
        <nav aria-label="Main navigation"><a href="#included">What’s included</a><a href="#how-it-works">How it works</a><a className="nav-cta" href="#offer">Get the Case File <span aria-hidden="true">↗</span></a></nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow"><span className="red-rule" /> CASE NO. 014 · AN ORIGINAL PRINTABLE MYSTERY</p>
          <h1>THE LAST<br /><em>CALL.</em></h1>
          <p className="hero-deck">A storm-locked motel. Four suspects. One timeline that refuses to add up.</p>
          <a className="primary-cta" href="#offer">Get the Case File <span aria-hidden="true">↗</span></a>
          <p className="hero-note">A detective story you solve from the evidence.</p>
        </div>
        <div className="hero-art" aria-label="Cinematic rain-soaked motel at midnight" data-reveal>
          <video className="hero-video" autoPlay muted loop playsInline poster="/images/last-call-hero.png" aria-hidden="true"><source src="/images/last-call-hero.mp4" type="video/mp4" /></video>
          <div className="film-grain" />
          <div className="evidence-board">
            <div className="folder-tab">EVIDENCE / 01</div>
            <div className="photo motel-photo"><span className="photo-stamp">MOTEL 8<br />9:38 PM</span><div className="motel-sign">VACANCY</div><div className="rain-lines" /></div>
            <div className="paper transcript"><span className="paper-label">TORN MESSAGE / EXHIBIT B</span><div className="waveform"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><p>“Bring the blue envelope. Do not use the room phone.”</p><span className="handwritten">— R.</span></div>
            <div className="case-stamp">OPEN<br />CASE</div>
            <div className="key-tag"><span className="key-hole" /><span>ROOM<br /><b>08</b></span></div>
            <div className="red-string string-one" /><div className="red-string string-two" />
            <div className="evidence-caption">CASE 014 · ITEMS UNDER REVIEW</div>
          </div>
        </div>
        <div className="hero-bottom"><span>BLACKWATER COUNTY, OREGON / OCTOBER 1998</span><span>SCROLL TO REVIEW THE EVIDENCE <b>↓</b></span></div>
      </section>

      <section className="premise section-pad" data-reveal>
        <div className="section-index">01 <span>/ THE PREMISE</span></div>
        <div className="premise-grid">
          <h2>Every detail<br />means <em>something.</em></h2>
          <div className="premise-copy"><p>At 10:17 p.m. on October 16, 1998, an anonymous caller reports a guest not breathing at the Blackwater Motor Lodge. Daniel Mercer is found dead in Room 8. A storm has cut off the road—and four people have reasons to hide something.</p><p className="muted-copy">Read the statements. Compare the timestamps. Find the detail everyone else missed.</p></div>
        </div>
        <div className="timeline" aria-label="Case timeline"><div><span>9:12 PM</span><b>Master keys taken</b></div><div><span>9:38 PM</span><b>Room 8 call is logged</b></div><div><span>10:17 PM</span><b>Anonymous emergency call</b></div><div><span>?</span><b>Something does not fit</b></div></div>
      </section>

      <section className="evidence-section section-pad" id="inside">
        <div className="section-index" data-reveal>02 <span>/ THE EVIDENCE</span></div>
        <div className="evidence-heading" data-reveal><h2>A case is only<br />as strong as its <em>clues.</em></h2><p>Piece together the story from documents that feel pulled straight from an investigator’s archive.</p></div>
        <figure className="evidence-hero-image" data-reveal>
          <img src="/images/evidence-desk.png" alt="Cinematic overhead view of the fictional Last Call case evidence: cassette recorder, motel photographs, key number 12, notes and a fingerprint card" />
          <figcaption><span>EXHIBIT 00 / THE CASE DESK</span><span>ALL ITEMS ARE PART OF A FICTIONAL STORY</span></figcaption>
        </figure>
        <div className="evidence-grid">
          <article className="evidence-item item-large" data-reveal><div className="evidence-image photo-a"><img src="/images/last-call-hero.png" alt="Rain-soaked motel exterior at night" loading="lazy" /><span>EXHIBIT A</span><b className="image-evidence-tag">MOTEL · 9:38 PM</b></div><div className="evidence-meta"><span>01 / PHOTOGRAPH</span><h3>The motel</h3><p>Enter the storm-locked Blackwater Motor Lodge and inspect the setting.</p></div></article>
          <article className="evidence-item item-offset" data-reveal><div className="evidence-image paper-b"><img src="/images/evidence-desk.png" alt="Case evidence, written notes and photographs arranged on an investigator’s desk" loading="lazy" /><span>EXHIBIT B</span><b className="image-evidence-tag">EVIDENCE REVIEW</b></div><div className="evidence-meta"><span>02 / STATEMENT</span><h3>Four statements</h3><p>Compare the stories told by the clerk, mechanic, guest, and owner.</p></div></article>
          <article className="evidence-item" data-reveal><div className="evidence-image tape-c"><img src="/images/last-call-kit.png" alt="Fictional printable mystery case documents and evidence kit" loading="lazy" /><span>EXHIBIT C</span><b className="image-evidence-tag">CASE MATERIALS</b></div><div className="evidence-meta"><span>03 / PHONE RECORD</span><h3>The phone record</h3><p>Correct the clock, trace the route, and reconstruct the critical minutes.</p></div></article>
        </div>
        <p className="content-note" data-reveal>Original fictional case. Preview artwork illustrates the atmosphere; the printable case packet contains the written exhibits and investigation worksheet.</p>
      </section>

      <section className="what-inside section-pad" data-reveal id="included">
        <div className="section-index">02A <span>/ WHAT YOU GET</span></div>
        <div className="included-heading"><h2>Everything you need<br />to <em>crack the case.</em></h2><p>Built as a complete printable mystery kit, with the answer key kept separate so the reveal stays intact.</p></div>
        <div className="included-grid">
          <article><span>01 / CASE FILE</span><h3>Investigator packet</h3><p>Case briefing, four persons of interest, 11 evidence exhibits, timeline, and final accusation worksheet.</p></article>
          <article><span>02 / DEDUCTION</span><h3>Three mini-puzzles</h3><p>Correct the call time, interpret the blue-envelope clue, and reconcile the disconnected payphone with the switchboard record.</p></article>
          <article><span>03 / SOLUTION</span><h3>Confidential guide</h3><p>A separate explanation of the intended solution, clue-by-clue reasoning, and the limits of what the evidence proves.</p></article>
        </div>
        <p className="included-footnote">ENGLISH LANGUAGE · FICTIONAL CASE · APPROX. 45–75 MINUTES · SOLO, PAIR OR SMALL GROUP</p>
      </section>

      <section className="quote-band" data-reveal><span className="quote-mark">“</span><p>The truth is in the details.<br /><em>Not the obvious ones.</em></p><span className="quote-side">INVESTIGATOR’S NOTE<br />CASE NO. 014</span></section>

      <section className="how section-pad" id="how-it-works">
        <div className="section-index" data-reveal>03 <span>/ YOUR INVESTIGATION</span></div>
        <div className="how-header" data-reveal><h2>Read the file.<br /><em>Find the truth.</em></h2><p>A printable investigation built around a fair-play clue trail—not a story you simply read, but a case you have to solve.</p></div>
        <div className="steps">
          <div className="step" data-reveal><span>01</span><div><h3>Open the case</h3><p>Open the investigator’s file and read the briefing before reviewing the exhibits.</p></div><b>↘</b></div>
          <div className="step" data-reveal><span>02</span><div><h3>Study the evidence</h3><p>Study 11 exhibits, four suspect statements, the phone records, and three deduction puzzles.</p></div><b>↘</b></div>
          <div className="step" data-reveal><span>03</span><div><h3>Make your call</h3><p>Complete the accusation worksheet, then open the separate confidential solution guide to check your reasoning.</p></div><b>✓</b></div>
        </div>
      </section>

      <section className="offer-section" id="offer" data-reveal>
        <div className="offer-art"><img className="offer-kit-image" src="/images/last-call-kit.png" alt="Concept artwork for a printable mystery case kit, with evidence documents and motel clues" /><div className="offer-folder"><span>THE CASE FILES</span><div className="offer-stamp">CASE<br />014</div><h3>THE LAST<br /><em>CALL</em></h3><div className="offer-lines"><i /><i /><i /></div><span className="folder-foot">CLASSIFIED MATERIAL · FICTIONAL CASE</span></div></div>
        <div className="offer-copy"><p className="eyebrow"><span className="red-rule" /> YOUR NEXT CASE AWAITS</p><h2>Ready to<br />connect the <em>dots?</em></h2><p>Investigate the death of Daniel Mercer at a rain-soaked Oregon motel in October 1998. Follow the evidence, solve three mini-puzzles, and decide which suspect’s story falls apart.</p><div className="offer-status"><span className="status-mark" /> DIGITAL CASE FILE · LAUNCH PREPARATION</div><a className="primary-cta" href="https://pay.cakto.com.br/bcqsq7w_1249100" target="_blank" rel="noopener noreferrer" aria-label="Purchase The Last Call case file">Get the Case File <span aria-hidden="true">↗</span></a><p className="offer-small" id="launch-details">Secure checkout is handled by Cakto. Digital case materials are in English. Delivery instructions will be provided after purchase.</p></div>
      </section>

      <section className="faq section-pad" data-reveal><div className="section-index">04 <span>/ CASE QUESTIONS</span></div><h2>Before you<br /><em>open the file.</em></h2><div className="faq-list"><details><summary>Is this a real crime case? <span>+</span></summary><p>No. The Last Call is being developed as an original fictional mystery. It is not based on a real victim or active investigation.</p></details><details><summary>What is included? <span>+</span></summary><p>The planned digital pack includes the investigator’s case file, 11 evidence exhibits, a deduction worksheet, and a separate confidential solution guide. Files are in English and designed for home printing or reading on a screen.</p></details><details><summary>Can I play with friends? <span>+</span></summary><p>The case is designed for solo play, a pair, or a small group. Allow approximately 45–75 minutes, depending on how deeply you discuss the clues.</p></details><details><summary>How do I purchase the case? <span>+</span></summary><p>Use the Get the Case File button to continue to our secure checkout hosted by Cakto. Digital delivery instructions will be provided after purchase.</p></details></div></section>

      <footer className="site-footer"><a className="wordmark" href="#top"><span className="mark">CF</span><span>THE CASE FILES</span></a><p>FICTIONAL CASES. REAL DEDUCTION.</p><div><a href="#offer">Get the Case File</a><a href="#included">What’s included</a></div><small>© {new Date().getFullYear()} THE CASE FILES. Fictional mystery experience. All case names and events are invented.</small></footer>
    </main>
  );
}
