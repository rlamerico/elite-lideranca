import { useEffect, useRef, useState } from "react";

const HOVER_INTENT_MS = 150;

type HoverPlayVideoProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
};

/**
 * Toca o vídeo (sem som) enquanto o ponteiro está sobre ele. Assim que o
 * visitante usa os controles, o hover para de comandar a reprodução.
 */
export function HoverPlayVideo({ src, poster, label, className }: HoverPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const intentTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isManual, setIsManual] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const isHoverDriven = !isManual && !prefersReducedMotion;

  useEffect(() => {
    return () => {
      if (intentTimer.current) clearTimeout(intentTimer.current);
    };
  }, []);

  const startPreview = () => {
    if (!isHoverDriven) return;
    intentTimer.current = setTimeout(() => {
      const video = videoRef.current;
      if (!video) return;
      video.muted = true;
      void video.play().catch(() => undefined);
    }, HOVER_INTENT_MS);
  };

  const stopPreview = () => {
    if (intentTimer.current) clearTimeout(intentTimer.current);
    if (!isHoverDriven) return;
    videoRef.current?.pause();
  };

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={startPreview}
      onMouseLeave={stopPreview}
      onFocus={startPreview}
      onBlur={stopPreview}
    >
      <video
        ref={videoRef}
        className={className}
        controls
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={label}
        onPointerDown={() => setIsManual(true)}
        onVolumeChange={(e) => {
          if (!e.currentTarget.muted) setIsManual(true);
        }}
        onPlaying={() => setHasStarted(true)}
      >
        <source src={src} type="video/mp4" />
        Seu navegador não reproduz este vídeo.
      </video>

      {!hasStarted && (
        <span className="pointer-events-none absolute inset-x-0 bottom-14 flex justify-center">
          <span className="flex items-center gap-2 bg-navy-deep/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-cream backdrop-blur">
            <svg viewBox="0 0 12 12" aria-hidden className="h-2.5 w-2.5 fill-current">
              <path d="M2 1l8 5-8 5z" />
            </svg>
            Passe o mouse para assistir
          </span>
        </span>
      )}
    </div>
  );
}
