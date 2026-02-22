"use client";

import { useEffect, useRef } from "react";

const ADSENSE_PUB_ID = "ca-pub-3664577309845234";

declare global {
  interface Window {
    adsbygoogle: Record<string, unknown>[];
  }
}

interface AdUnitProps {
  slot: string;
  format?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical" | "autorelaxed";
  layout?: string;
  layoutKey?: string;
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

function AdUnit({
  slot,
  format = "auto",
  layout,
  layoutKey,
  responsive = true,
  className = "",
  style,
}: AdUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!ADSENSE_PUB_ID || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded yet or ad blocker active
    }
  }, []);

  if (!ADSENSE_PUB_ID) return null;

  return (
    <div className={`ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style || { display: "block" }}
        data-ad-client={ADSENSE_PUB_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        {...(layout && { "data-ad-layout": layout })}
        {...(layoutKey && { "data-ad-layout-key": layoutKey })}
        {...(responsive && { "data-full-width-responsive": "true" })}
      />
    </div>
  );
}

export function BannerAd({
  slot,
  className = "",
}: {
  slot: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden border-4 border-foreground bg-muted/50 brutal-shadow-sm ${className}`}
    >
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-bold text-center py-1">
        Advertisement
      </div>
      <AdUnit
        slot={slot}
        format="horizontal"
        style={{ display: "block", width: "100%", minHeight: "90px" }}
      />
    </div>
  );
}

export function InFeedAd({
  slot,
  className = "",
}: {
  slot: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <AdUnit
        slot={slot}
        format="fluid"
        layout="in-article"
        style={{ display: "block", textAlign: "center" }}
      />
    </div>
  );
}

export function SidebarAd({
  slot,
  className = "",
}: {
  slot: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden border-4 border-foreground bg-muted/50 brutal-shadow-sm ${className}`}
    >
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-bold text-center py-1">
        Sponsored
      </div>
      <AdUnit
        slot={slot}
        format="vertical"
        style={{ display: "block", minHeight: "250px" }}
      />
    </div>
  );
}

export function MultiplexAd({
  slot,
  className = "",
}: {
  slot: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden border-4 border-foreground bg-muted/50 brutal-shadow-sm ${className}`}
    >
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-bold text-center py-1">
        You may also like
      </div>
      <AdUnit
        slot={slot}
        format="autorelaxed"
        style={{ display: "block", width: "100%", minHeight: "250px" }}
      />
    </div>
  );
}
