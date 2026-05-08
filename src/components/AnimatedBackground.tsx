'use client'
/* RoamPlan — drifting world dots + floating plane trails */
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
      {/* Sky gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(14,165,233,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(56,189,248,0.10) 0%, transparent 60%)',
      }} />

      {/* Animated flight paths */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="trail1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="trail2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Arc path 1 */}
        <path d="M -100 300 Q 400 50 900 250" stroke="url(#trail1)" strokeWidth="1.5" fill="none" strokeDasharray="8 12" opacity="0.5">
          <animate attributeName="stroke-dashoffset" from="0" to="-200" dur="8s" repeatCount="indefinite" />
        </path>
        {/* Arc path 2 */}
        <path d="M -50 500 Q 500 200 1100 400" stroke="url(#trail2)" strokeWidth="1" fill="none" strokeDasharray="6 14" opacity="0.35">
          <animate attributeName="stroke-dashoffset" from="0" to="-200" dur="12s" repeatCount="indefinite" />
        </path>
        {/* Arc path 3 */}
        <path d="M 200 -20 Q 600 150 1000 80" stroke="url(#trail1)" strokeWidth="1" fill="none" strokeDasharray="4 16" opacity="0.25">
          <animate attributeName="stroke-dashoffset" from="0" to="-200" dur="15s" repeatCount="indefinite" />
        </path>
      </svg>

      {/* Floating location pins */}
      {[
        { x: '15%', y: '25%', delay: '0s',  size: 20, op: 0.5 },
        { x: '72%', y: '18%', delay: '1.5s', size: 16, op: 0.4 },
        { x: '45%', y: '60%', delay: '3s',  size: 14, op: 0.3 },
        { x: '85%', y: '50%', delay: '2s',  size: 18, op: 0.45 },
        { x: '28%', y: '75%', delay: '4s',  size: 12, op: 0.25 },
      ].map((pin, i) => (
        <div key={i} style={{
          position: 'absolute', left: pin.x, top: pin.y,
          opacity: pin.op, fontSize: pin.size,
          animation: `float ${4 + i}s ease-in-out infinite`,
          animationDelay: pin.delay,
        }}>📍</div>
      ))}

      {/* World grid dots */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(14,165,233,0.25) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%)',
        opacity: 0.3,
      }} />

      {/* Orbs */}
      <div className="orb orb-1" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.22), rgba(56,189,248,0.1) 60%, transparent)', top: '-150px', left: '-100px' }} />
      <div className="orb orb-2" style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.15), transparent 70%)', top: '40%', right: '-100px' }} />
    </div>
  )
}
