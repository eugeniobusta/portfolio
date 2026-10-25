import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Eugenio Bustamante — CS student at DCU building web, mobile and AI software.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          background: "oklch(97.5% 0.006 85)",
          fontFamily: "serif",
        }}
      >
        {/* Amber accent line */}
        <div
          style={{
            width: 56,
            height: 4,
            borderRadius: 2,
            background: "oklch(72% 0.155 68)",
            marginBottom: 40,
          }}
        />

        <div
          style={{
            fontSize: 96,
            fontWeight: 400,
            color: "oklch(17% 0.008 250)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            marginBottom: 32,
          }}
        >
          Eugenio Bustamante.
        </div>

        <div
          style={{
            fontSize: 28,
            color: "oklch(52% 0.006 250)",
            fontFamily: "sans-serif",
            fontWeight: 400,
            maxWidth: 760,
            lineHeight: 1.4,
          }}
        >
          CS student at DCU building web, mobile and AI software.
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 100,
            fontSize: 18,
            color: "oklch(72% 0.006 250)",
            fontFamily: "monospace",
          }}
        >
          eugeniobusta.com
        </div>
      </div>
    ),
    { ...size }
  );
}
