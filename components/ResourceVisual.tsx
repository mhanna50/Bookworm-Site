import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { ContentPage } from "@/content/types";

export function ResourceVisual({ visual }: { visual: NonNullable<ContentPage["visuals"]>[number] }) {
  return (
    <figure className="resource-visual" id={visual.id}>
      {visual.src ? (
        <Image src={visual.src} alt={visual.alt} width={visual.width} height={visual.height}
          sizes="(max-width: 950px) 92vw, 760px" className="resource-visual-image" />
      ) : (
        <div className="resource-visual-reserved" style={{ aspectRatio: `${visual.width} / ${visual.height}` }}>
          <ImageIcon size={28} strokeWidth={1.2} aria-hidden="true" />
          <span>Product screenshot coming soon</span>
        </div>
      )}
      <figcaption><strong>{visual.title}</strong><span>{visual.caption}</span></figcaption>
    </figure>
  );
}
