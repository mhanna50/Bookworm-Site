import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { ArrowRight, Feather, Heart, Sprout } from "lucide-react";
import { absoluteUrl, jsonLd } from "@/lib/site";

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org", "@type": "AboutPage", name: "The story behind Quilly",
    url: absoluteUrl("/about"), description: "Michael Hanna built Quilly to help his girlfriend and friends write and organize their ideas with less stress.",
    mainEntity: { "@type": "Person", "@id": absoluteUrl("/about#michael-hanna"), name: "Michael Hanna", jobTitle: "Software engineer", description: "Founder and builder of Quilly.", worksFor: { "@id": absoluteUrl("/#organization") } },
  };
  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <section className="founder-hero"><div className="site-container founder-hero-inner">
        <span className="eyebrow">The story behind Quilly</span>
        <h1>A little less stress.<br /><em>A lot more story.</em></h1>
        <p>I built Quilly for my girlfriend and friends, because I wanted writing to feel less overwhelming and their ideas to have a place to land.</p>
        <div className="founder-byline"><span aria-hidden="true" className="founder-initial">M</span><div><strong>Michael Hanna</strong><span>Founder & software engineer</span></div></div>
      </div></section>

      <section className="founder-story site-container" id="michael-hanna" aria-labelledby="founder-story-heading">
        <aside><span className="small-caps">A note from Michael</span><p>For the people with a story in their head and a little too much getting in the way.</p><Feather size={36} strokeWidth={1.2} aria-hidden="true" /></aside>
        <div className="founder-letter">
          <h2 id="founder-story-heading">It started with people I care about.</h2>
          <p>I kept seeing how difficult it could be for the people around me to turn their ideas into something they could actually sit down and write. My girlfriend and friends had stories they wanted to tell, characters they cared about, and so many thoughts they were trying to hold together.</p>
          <p>Keeping those thoughts organized was its own kind of work. A new idea might belong in a chapter, a character profile, or a note for later. Remembering how everything connected could become overwhelming. And sometimes, learning a complicated writing platform added another thing to figure out before they could get back to the story.</p>
          <p>I have spent years working as a software engineer. Building things is how I tend to approach a problem, especially when it affects someone close to me. So I started thinking about what a writing space could feel like if it made that part a little easier.</p>
          <p>That is where Quilly began: a way to help my girlfriend and friends write with less stress. Somewhere their manuscript, characters, world, and scattered ideas could feel like they belonged together. Somewhere they could return to a thought and keep going.</p>

          <h2>A place to find your way back to the story.</h2>
          <p>Writing asks a lot of you. You are making something out of an idea, holding a whole world in your head, and finding the words to let someone else see it. I wanted the space around that work to feel welcoming and manageable.</p>
          <p>That purpose still shapes how I think about Quilly. Can you find the detail you need? Can you capture a new idea without losing the one you were working on? Can you open your book and feel ready to take one more small step?</p>
          <p>Those are ordinary questions, but they matter to me. A calmer writing session, a little less time looking for a note, or finally getting a chapter out of your head can mean a lot to the person doing the writing.</p>

          <h2>Built with people in mind.</h2>
          <p>Quilly is personal to me. It started with wanting to make something useful for people I love, and I want to carry that care into the experience of everyone who uses it.</p>
          <p>Whether you are finding your way through a first draft, building a world you have imagined for years, or making room for a creative part of your life, I hope Quilly helps you feel a little more settled when you sit down to write.</p>
          <p>There is something special about watching an idea become a story. I am glad I get to build a small part of the space where that can happen.</p>
          <div className="founder-signature"><span>Michael</span><p>Founder of Quilly</p></div>
        </div>
      </section>

      <section className="founder-values section-paper"><div className="site-container"><span className="eyebrow">What I want Quilly to feel like</span><div className="founder-values-grid">
        <article><Sprout size={24} strokeWidth={1.4} aria-hidden="true" /><h2>A gentler place to start</h2><p>You can begin with the idea you have today and give it room to grow, one chapter or character at a time.</p></article>
        <article><Feather size={24} strokeWidth={1.4} aria-hidden="true" /><h2>Room for the way you think</h2><p>Some days you need an outline. Some days you need to get a sentence down before you forget it. Both belong here.</p></article>
        <article><Heart size={24} strokeWidth={1.4} aria-hidden="true" /><h2>Care in the small things</h2><p>The details of a writing space matter. My aim is to make the everyday moments of working on a book feel a little easier.</p></article>
      </div></div></section>

      <section className="founder-invitation site-container"><span className="eyebrow">Make a little room for your story</span><h2>For the story you keep<br />coming back to.</h2><p>Bring the idea, the messy draft, or the character you cannot stop thinking about. You can take the next step from here.</p><div><a className="button" href="https://app.quillywriter.com/login?mode=signup">Try Quilly free for 30 days <ArrowRight size={15} aria-hidden="true" /></a><Link className="inline-link" href="/resources">Find a little writing inspiration <ArrowRight size={15} aria-hidden="true" /></Link></div></section>
    </SiteShell>
  );
}
