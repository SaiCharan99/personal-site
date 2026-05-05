import { useEffect, useRef } from 'react'

const TRAIL_DURATION = 900  // ms — fireflies linger
const MIN_DIST       = 8   // px between spark spawns

export default function CustomCursor() {
  const canvasRef = useRef(null)
  const dotRef   = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const canvas = canvasRef.current
    const dot    = dotRef.current
    const ctx    = canvas.getContext('2d')

    // Match canvas to viewport
    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let cx = -200, cy = -200
    let visible = false
    const trail = []   // { x, y, t }
    let rafId

    const onMove = (e) => {
      cx = e.clientX
      cy = e.clientY

      const last = trail[trail.length - 1]
      const dist = last ? Math.hypot(cx - last.x, cy - last.y) : MIN_DIST

      if (dist >= MIN_DIST) {
        trail.push({
          x:    cx + (Math.random() - 0.5) * 8,
          y:    cy + (Math.random() - 0.5) * 8,
          t:    Date.now(),
          vx:   (Math.random() - 0.5) * 16,          // px/s horizontal wander
          vy:   -(5 + Math.random() * 18),            // px/s — always drifts upward
          size: 0.5 + Math.random() * 1.1,            // variety in orb size
        })
      }

      if (!visible) {
        visible = true
        dot.style.opacity = '1'
      }
    }

    const onOver = (e) => {
      if (e.target.closest('a, button')) dot.setAttribute('data-hover', '')
    }
    const onOut = (e) => {
      if (e.target.closest('a, button')) dot.removeAttribute('data-hover')
    }

    const render = () => {
      const now = Date.now()

      // Expire old trail points
      while (trail.length && now - trail[0].t > TRAIL_DURATION) trail.shift()

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw firefly sparks — glowing orbs that drift upward and fade
      for (const pt of trail) {
        const life    = 1 - (now - pt.t) / TRAIL_DURATION
        if (life <= 0) continue
        const elapsed = (now - pt.t) / 1000   // seconds since spawn

        // Cubic ease — bright flash then long gentle fade
        const opacity = life * life * life

        // Drifted position
        const px = pt.x + pt.vx * elapsed
        const py = pt.y + pt.vy * elapsed

        const r = pt.size * (1 + (1 - life) * 0.6)  // orb swells slightly then vanishes

        // ── Outer halo (shadowBlur is cheapest glow on canvas) ──
        ctx.shadowBlur  = 10 * pt.size * life
        ctx.shadowColor = `rgba(13, 148, 136, ${opacity * 0.9})`

        // ── Core orb ──
        ctx.beginPath()
        ctx.arc(px, py, r * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(167, 243, 208, ${opacity})`  // soft mint-white core
        ctx.fill()

        // ── Inner bright pinpoint ──
        ctx.shadowBlur = 0
        ctx.beginPath()
        ctx.arc(px, py, r * 0.7, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(240, 253, 250, ${opacity * 0.95})`
        ctx.fill()
      }

      // Reset shadow so it doesn't bleed onto other draws
      ctx.shadowBlur = 0

      // Keep dot on cursor
      dot.style.left = `${cx}px`
      dot.style.top  = `${cy}px`

      rafId = requestAnimationFrame(render)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout',  onOut)
    render()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      {/* Trail canvas sits just below the dot */}
      <canvas
        ref={canvasRef}
        style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9998 }}
      />

      {/* Tsuba (guard disc) cursor — nakago-ana hole in centre */}
      <div ref={dotRef} className="ksc-dot">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Mask punches the nakago-ana (blade-slot) out of the disc */}
            <mask id="tsuba-mask">
              <circle cx="7" cy="7" r="6.2" fill="white" />
              {/* Oval slot — where the blade tang passes through */}
              <ellipse cx="7" cy="7" rx="1.5" ry="2.4" fill="black" />
            </mask>
          </defs>

          {/* Main disc body */}
          <circle
            cx="7" cy="7" r="6.2"
            fill="#0D9488"
            mask="url(#tsuba-mask)"
            className="tsuba-body"
          />

          {/* Outer rim */}
          <circle
            cx="7" cy="7" r="6.2"
            stroke="#14B8A6" strokeWidth="0.7"
            className="tsuba-rim"
          />

          {/* Inner rim around the hole */}
          <ellipse
            cx="7" cy="7" rx="1.5" ry="2.4"
            stroke="#14B8A6" strokeWidth="0.5"
            className="tsuba-rim"
          />
        </svg>
      </div>

      <style>{`
        * { cursor: none !important; }

        .ksc-dot {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          opacity: 0;
          transform: translate(-50%, -50%) scale(1);
          transition:
            transform 0.22s cubic-bezier(0.16, 1, 0.3, 1),
            filter    0.22s ease;
          will-change: left, top;
        }

        .ksc-dot[data-hover] {
          transform: translate(-50%, -50%) scale(2.6);
          filter: drop-shadow(0 0 4px rgba(13, 148, 136, 0.8));
        }

        .ksc-dot[data-hover] .tsuba-body { fill: #2DD4BF; }
        .ksc-dot[data-hover] .tsuba-rim  { stroke: #5EEAD4; }
      `}</style>
    </>
  )
}
