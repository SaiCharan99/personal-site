/* Decorative swaying leaves anchored to the page edges — scroll-aware */
import { useEffect, useRef } from 'react'

const leaves = [
  // [x%, y%, size, delay, animDuration, rotation, side]
  { x: 2,  y: 15,  size: 60,  delay: 0,   dur: 4.5, rot: -30, side: 'left'  },
  { x: 1,  y: 40,  size: 45,  delay: 0.8, dur: 5.2, rot: -20, side: 'left'  },
  { x: 3,  y: 65,  size: 70,  delay: 1.5, dur: 3.8, rot: -40, side: 'left'  },
  { x: 1,  y: 85,  size: 38,  delay: 0.3, dur: 5.8, rot: -15, side: 'left'  },
  { x: 97, y: 10,  size: 55,  delay: 0.6, dur: 4.2, rot:  30, side: 'right' },
  { x: 96, y: 35,  size: 42,  delay: 1.2, dur: 5.5, rot:  25, side: 'right' },
  { x: 97, y: 58,  size: 65,  delay: 0.4, dur: 4.0, rot:  40, side: 'right' },
  { x: 96, y: 80,  size: 50,  delay: 1.8, dur: 5.0, rot:  20, side: 'right' },
]

/* A simple Quercus/tropical leaf shape */
function LeafSVG({ size, rotation, fill, side }) {
  const mirror = side === 'right' ? 'scale(-1,1)' : ''
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 60 84"
      fill="none"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Stem */}
      <line x1="30" y1="84" x2="30" y2="40" stroke={fill} strokeWidth="2" strokeOpacity="0.6" />
      {/* Main leaf body */}
      <path
        d="M30,40 C30,40 5,30 5,15 C5,5 15,0 30,2 C45,0 55,5 55,15 C55,30 30,40 30,40 Z"
        fill={fill}
        fillOpacity="0.55"
        stroke={fill}
        strokeWidth="0.5"
        strokeOpacity="0.4"
      />
      {/* Mid-vein */}
      <line x1="30" y1="40" x2="30" y2="2" stroke="white" strokeWidth="0.7" strokeOpacity="0.2" />
      {/* Side veins */}
      <line x1="30" y1="25" x2="12" y2="15" stroke="white" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="30" y1="25" x2="48" y2="15" stroke="white" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="30" y1="15" x2="18" y2="7"  stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
      <line x1="30" y1="15" x2="42" y2="7"  stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
    </svg>
  )
}

const LEAF_COLORS = ['#0D9488', '#059669', '#0F766E', '#047857', '#14B8A6']

export default function SwayingLeaves() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {leaves.map((l, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${l.x}%`,
            top: `${l.y}%`,
            transformOrigin: l.side === 'left' ? 'left top' : 'right top',
            animation: `leaf-sway-slow ${l.dur}s ${l.delay}s ease-in-out infinite`,
            opacity: 0.65,
          }}
        >
          <LeafSVG
            size={l.size}
            rotation={l.rot}
            fill={LEAF_COLORS[i % LEAF_COLORS.length]}
            side={l.side}
          />
        </div>
      ))}
    </div>
  )
}
