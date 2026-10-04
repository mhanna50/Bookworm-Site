import { ImageResponse } from "next/og";

export const alt = "Bookworm — novel writing and story planning software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px 84px",
          background: "#f7f1e7",
          color: "#1e1a17",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 58, height: 58, borderRadius: 29, border: "2px solid #c9baa7", background: "#fffaf2", display: "flex", alignItems: "center", justifyContent: "center", color: "#6b4f3a", fontSize: 30 }}>❦</div>
          <div style={{ fontSize: 34, fontWeight: 600 }}>Bookworm</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 940 }}>
          <div style={{ fontSize: 74, lineHeight: 1.02, letterSpacing: "-2px" }}>Your whole story, held in one place.</div>
          <div style={{ fontSize: 29, lineHeight: 1.4, color: "#63584f" }}>Write, plan, build your world, track continuity, and keep every thread connected.</div>
        </div>
        <div style={{ display: "flex", gap: 18, alignItems: "center", fontFamily: "Arial, sans-serif", fontSize: 22 }}>
          <div style={{ background: "#6b4f3a", color: "#fffaf4", padding: "14px 22px", borderRadius: 999 }}>14 days free</div>
          <div>No credit card required · then $11.99/month</div>
        </div>
      </div>
    ),
    size
  );
}
