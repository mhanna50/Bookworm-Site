"use client";

import { useState } from "react";
import {
  Activity,
  ArrowRight,
  CircleCheck,
  GitFork,
  HeartPulse,
  Image as ImageIcon,
  PenLine,
  Play,
  Target,
  Users,
  Video,
} from "lucide-react";

function MediaPlaceholder({
  label,
  type = "image",
  note,
}: {
  label: string;
  type?: "image" | "video";
  note?: string;
}) {
  const Icon = type === "video" ? Video : ImageIcon;
  return (
    <div className="media-placeholder">
      <div className="media-placeholder-icon"><Icon size={19} strokeWidth={1.6} /></div>
      <strong>{label}</strong>
      <span>{note ?? (type === "video" ? "Add product video here later" : "Add product screenshot here later")}</span>
    </div>
  );
}

export function ProductShowcases() {
  const [chapter, setChapter] = useState(1);
  const [healthTab, setHealthTab] = useState<"continuity" | "threads">("continuity");
  const [graphFocus, setGraphFocus] = useState("Odessa");

  return (
    <>
      <section className="section showcase-section">
        <div className="site-container showcase-grid">
          <div className="showcase-copy">
            <span className="eyebrow">Story Builder</span>
            <h2>See the shape of the book without flattening it.</h2>
            <p>Move from act to chapter to plot point to beat. The hierarchy stays readable, even as the story grows.</p>
            <div className="mini-tabs" aria-label="Story builder chapter preview">
              {[1,2,3].map((item) => (
                <button key={item} className={chapter === item ? "active" : ""} onClick={() => setChapter(item)}>
                  Chapter {item + 7}
                </button>
              ))}
            </div>
          </div>
          <div className="showcase-canvas story-demo">
            <div className="demo-toolbar"><span>Act II — The Hollow Crown</span><span>3 chapters</span></div>
            <div className="demo-columns">
              {[1,2,3].map((item) => (
                <button key={item} onClick={() => setChapter(item)} className={chapter === item ? "demo-chapter active" : "demo-chapter"}>
                  <span>Chapter {item + 7}</span>
                  <strong>{["The Glass Orchard","A Debt in Ash","Under the Bell Tower"][item-1]}</strong>
                  <div className="demo-plot">Plot point</div>
                  <div className="demo-beat">Beat — clue is revealed</div>
                  <div className="demo-beat">Beat — pressure rises</div>
                </button>
              ))}
            </div>
            <MediaPlaceholder label="Story Builder screenshot / short loop" type="video" note="Replace this demo with a polished app capture later" />
          </div>
        </div>
      </section>

      <section className="section section-paper showcase-section">
        <div className="site-container showcase-grid reverse">
          <div className="showcase-copy">
            <span className="eyebrow">Manuscript + story knowledge</span>
            <h2>The page stays quiet. The context stays close.</h2>
            <p>Reference a character in the manuscript and jump straight to the people, events, clues, and locations connected to them.</p>
            <div className="connection-pills">
              <span><PenLine size={14}/> Manuscript</span><i>→</i><span><Users size={14}/> Character</span><i>→</i><span><CircleCheck size={14}/> Event</span>
            </div>
          </div>
          <div className="showcase-canvas manuscript-demo">
            <div className="paper-sheet">
              <small>Chapter 12</small>
              <h3>Where the Pines Remember</h3>
              <p>The bells had not rung in Avarin for twelve years, yet <mark>Odessa Atkins</mark> woke before dawn certain she had heard them.</p>
              <p>She found the old map beneath Rowan&apos;s letters and knew, at once, that someone had lied.</p>
            </div>
            <div className="context-card">
              <span className="small-caps">Character</span>
              <strong>Odessa Atkins</strong>
              <p>Connected to 7 chapters, 3 events, and 2 unresolved clues.</p>
              <button>Open character <ArrowRight size={14}/></button>
            </div>
            <MediaPlaceholder label="Manuscript interaction video" type="video" />
          </div>
        </div>
      </section>

      <section className="section showcase-section">
        <div className="site-container showcase-grid">
          <div className="showcase-copy">
            <span className="eyebrow">Story Health</span>
            <h2>Catch the thread you forgot three chapters ago.</h2>
            <p>Bookworm surfaces signals worth reviewing without pretending an algorithm can judge your story for you.</p>
            <div className="mini-tabs">
              <button className={healthTab === "continuity" ? "active" : ""} onClick={() => setHealthTab("continuity")}>Continuity</button>
              <button className={healthTab === "threads" ? "active" : ""} onClick={() => setHealthTab("threads")}>Open threads</button>
            </div>
          </div>
          <div className="showcase-canvas health-demo">
            <div className="health-score"><HeartPulse size={20}/><div><strong>Story Health</strong><span>5 signals to review</span></div></div>
            {healthTab === "continuity" ? (
              <div className="signal-list">
                <div><span className="signal-dot warning"/><div><strong>Timeline conflict</strong><p>Odessa reaches Avarin before the bridge reopens.</p></div><span>Ch. 14</span></div>
                <div><span className="signal-dot"/><div><strong>Broken reference</strong><p>A location linked here no longer exists.</p></div><span>Ch. 9</span></div>
              </div>
            ) : (
              <div className="signal-list">
                <div><span className="signal-dot sage"/><div><strong>The silver key</strong><p>Introduced 6 chapters ago with no later payoff yet.</p></div><span>Open</span></div>
                <div><span className="signal-dot sage"/><div><strong>Rowan&apos;s promise</strong><p>Referenced twice and still unresolved.</p></div><span>Open</span></div>
              </div>
            )}
            <MediaPlaceholder label="Story Health screenshot" />
          </div>
        </div>
      </section>

      <section className="section section-paper showcase-section">
        <div className="site-container showcase-grid reverse">
          <div className="showcase-copy">
            <span className="eyebrow">Relationships</span>
            <h2>Understand who and what is pulling on the story.</h2>
            <p>Characters, places, and events form a living graph. Focus on one node and the noise falls away.</p>
            <div className="node-buttons">
              {["Odessa","Rowan","Avarin"].map((item) => <button key={item} onClick={() => setGraphFocus(item)} className={graphFocus === item ? "active" : ""}>{item}</button>)}
            </div>
          </div>
          <div className="showcase-canvas graph-demo">
            <svg viewBox="0 0 600 330" role="img" aria-label="Example relationship graph">
              <line x1="300" y1="165" x2="125" y2="85"/><line x1="300" y1="165" x2="485" y2="90"/><line x1="300" y1="165" x2="470" y2="250"/><line x1="300" y1="165" x2="130" y2="250"/>
              <circle cx="300" cy="165" r="42"/><circle cx="125" cy="85" r="28"/><circle cx="485" cy="90" r="28"/><circle cx="470" cy="250" r="28"/><circle cx="130" cy="250" r="28"/>
              <text x="300" y="170">{graphFocus}</text><text x="125" y="90">Rowan</text><text x="485" y="95">Avarin</text><text x="470" y="255">Bell Tower</text><text x="130" y="255">Letter</text>
            </svg>
            <MediaPlaceholder label="Relationships graph video" type="video" />
          </div>
        </div>
      </section>

      <section className="section showcase-section">
        <div className="site-container showcase-grid">
          <div className="showcase-copy">
            <span className="eyebrow">Writing progress</span>
            <h2>Momentum you can see without turning writing into a game.</h2>
            <p>Set a target, understand your pace, keep an eye on streaks, and see where the manuscript is actually growing.</p>
          </div>
          <div className="showcase-canvas progress-demo">
            <div className="progress-stats">
              <div><Target size={17}/><strong>72,430</strong><span>of 90,000 words</span></div>
              <div><Activity size={17}/><strong>1,286</strong><span>words today</span></div>
              <div><Play size={17}/><strong>18 days</strong><span>writing streak</span></div>
            </div>
            <div className="progress-chart" aria-label="Example writing progress graph">
              {[28,36,34,48,52,61,68,73,71,82,86,94].map((height,i)=><span key={i} style={{height: `${height}%`}} />)}
            </div>
            <MediaPlaceholder label="Writing progress screenshot" />
          </div>
        </div>
      </section>
    </>
  );
}
