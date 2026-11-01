"use client";

import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { useId, useState } from "react";
import type { ResourceGroup } from "@/content/resource-navigation";

export function ResourceLibrary({ groups }: { groups: ResourceGroup[] }) {
  const [query, setQuery] = useState("");
  const searchId = useId();
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const filtered = groups.map((group) => ({ ...group, topics: group.topics.map((topic) => ({ ...topic,
    items: topic.items.filter((item) => terms.every((term) => `${item.title} ${item.description} ${topic.title} ${group.title}`.toLocaleLowerCase().includes(term))),
  })).filter((topic) => topic.items.length) }));
  const count = filtered.reduce((sum, group) => sum + group.topics.reduce((n, topic) => n + topic.items.length, 0), 0);

  return (
    <div className="resource-library site-container">
      <div className="library-search-wrap">
        <label htmlFor={searchId}>Find a guide, template, or comparison</label>
        <div className="library-search">
          <Search size={20} aria-hidden="true" />
          <input id={searchId} type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try characters, fantasy, or importing a draft" />
          {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear resource search"><X size={18} aria-hidden="true" /></button>}
        </div>
        <p role="status" aria-live="polite">{count} {count === 1 ? "resource" : "resources"}{query.trim() ? ` matching “${query.trim()}”` : " to explore at your own pace"}</p>
      </div>
      {count === 0 && <div className="library-empty"><h2>No matching resources yet</h2><p>Try a broader writing topic, or clear the search to browse everything.</p><button className="button" type="button" onClick={() => setQuery("")}>Browse all resources</button></div>}
      {filtered.map((group) => (
        <section className="library-group" id={group.id} key={group.id} aria-label={group.title}>
          {group.topics.length > 0 && <>
            <header className="library-group-heading"><span className="eyebrow">{group.id === "writing-tasks" ? "By writing task" : group.id === "genres" ? "By genre" : group.id === "templates" ? "Free templates" : "Comparisons"}</span><h2>{group.title}</h2><p>{group.description}</p></header>
            {group.topics.map((topic) => (
              <div className="library-topic" key={topic.id}>
                <h3>{topic.title}<span>{topic.items.length}</span></h3>
                <div className="library-card-grid">
                  {topic.items.map((item) => <Link className="library-card" href={`/${item.slug}`} key={item.slug}><h4>{item.title}</h4><p>{item.description}</p><span>Explore resource <ArrowRight size={15} aria-hidden="true" /></span></Link>)}
                </div>
              </div>
            ))}
          </>}
        </section>
      ))}
    </div>
  );
}
