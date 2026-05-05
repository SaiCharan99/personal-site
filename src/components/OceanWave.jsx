/* Ocean wave section divider — multi-layer animated SVG */
export default function OceanWave({ flip = false, color = 'var(--bg-secondary)', height = 80 }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: `${height}px`,
        marginTop: flip ? 0 : '-2px',
        marginBottom: flip ? '-2px' : 0,
        transform: flip ? 'scaleY(-1)' : 'none',
        lineHeight: 0,
      }}
    >
      {/* Layer 3 — slowest, darkest */}
      <svg
        viewBox="0 0 2880 80"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '200%',
          height: '100%',
          animation: 'wave-translate-3 18s linear infinite',
          opacity: 0.25,
        }}
      >
        <path
          d="M0,40 C240,15 480,65 720,40 C960,15 1200,65 1440,40 C1680,15 1920,65 2160,40 C2400,15 2640,65 2880,40 L2880,80 L0,80 Z"
          fill={color}
        />
      </svg>

      {/* Layer 2 — medium speed */}
      <svg
        viewBox="0 0 2880 80"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '200%',
          height: '100%',
          animation: 'wave-translate-2 12s linear infinite',
          opacity: 0.45,
        }}
      >
        <path
          d="M0,50 C360,20 720,70 1080,50 C1440,20 1800,70 2160,50 C2520,20 2800,60 2880,50 L2880,80 L0,80 Z"
          fill={color}
        />
      </svg>

      {/* Layer 1 — fastest, most opaque */}
      <svg
        viewBox="0 0 2880 80"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '200%',
          height: '100%',
          animation: 'wave-translate-1 8s linear infinite',
          opacity: 1,
        }}
      >
        <path
          d="M0,45 C180,25 360,65 540,45 C720,25 900,65 1080,45 C1260,25 1440,65 1620,45 C1800,25 1980,65 2160,45 C2340,25 2520,65 2700,45 C2760,30 2820,55 2880,45 L2880,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}
