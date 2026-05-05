import { useEffect, useState } from 'react'

/* Leaf SVG paths — various botanical shapes */
const LEAF_PATHS = [
  // Oval leaf
  "M10,30 C10,10 30,0 30,0 C30,0 50,10 50,30 C50,50 30,55 30,55 C30,55 10,50 10,30 Z M30,0 L30,55",
  // Pointed leaf
  "M25,0 C25,0 50,15 50,35 C50,50 35,60 25,60 C15,60 0,50 0,35 C0,15 25,0 25,0 Z M25,0 L25,60",
  // Wide leaf
  "M5,25 C5,5 25,0 40,5 C55,10 60,25 55,40 C50,55 30,60 15,55 C0,50 5,45 5,25 Z M5,25 L55,40",
  // Slim leaf
  "M20,0 C20,0 40,20 40,40 C40,55 30,65 20,65 C10,65 0,55 0,40 C0,20 20,0 20,0 Z M20,0 L20,65",
  // Asymmetric leaf
  "M0,20 C0,5 15,0 30,5 C45,10 55,25 50,42 C45,58 28,65 15,60 C2,55 0,38 0,20 Z",
]

const COLORS = [
  'rgba(13,148,136,', // teal
  'rgba(5,150,105,',  // emerald green
  'rgba(20,184,166,', // lighter teal
  'rgba(4,120,87,',   // deep green
  'rgba(6,182,212,',  // cyan-ish
]

function generateLeaf(id) {
  const animIndex = (id % 4) + 1
  const delay = (id * 3.7 + Math.random() * 4).toFixed(1)
  const duration = (14 + Math.random() * 8).toFixed(1)
  const top = (5 + Math.random() * 70).toFixed(1)
  const size = 22 + Math.floor(Math.random() * 28)
  const pathIndex = id % LEAF_PATHS.length
  const colorBase = COLORS[id % COLORS.length]
  const opacity = (0.45 + Math.random() * 0.35).toFixed(2)

  return { id, animIndex, delay, duration, top, size, pathIndex, colorBase, opacity }
}

export default function FloatingLeaves({ count = 12 }) {
  const [leaves] = useState(() => Array.from({ length: count }, (_, i) => generateLeaf(i)))
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Slight delay so page renders first
    const t = setTimeout(() => setVisible(true), 600)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 2,
      }}
    >
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          style={{
            position: 'absolute',
            top: `${leaf.top}%`,
            left: '-120px',
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            animation: `leaf-float-${leaf.animIndex} ${leaf.duration}s ${leaf.delay}s ease-in-out infinite`,
            willChange: 'transform',
          }}
        >
          <svg
            viewBox="0 0 60 70"
            width={leaf.size}
            height={leaf.size}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={LEAF_PATHS[leaf.pathIndex]}
              fill={`${leaf.colorBase}${leaf.opacity})`}
              stroke={`${leaf.colorBase}0.6)`}
              strokeWidth="0.8"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
