
import React, { useState, useEffect, useMemo } from 'react';

const Funnel3D: React.FC = () => {
  const [scrollIntensity, setScrollIntensity] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let timeout: number;
    const handleWheel = (e: WheelEvent) => {
      setScrollIntensity(prev => Math.min(prev + Math.abs(e.deltaY) * 0.2, 200));
      clearTimeout(timeout);
      timeout = window.setTimeout(() => setScrollIntensity(0), 1500);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  const particles = useMemo(() => Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    cx: 50 + Math.random() * 100,
    delay: `${Math.random() * 5}s`,
    duration: `${1.5 + Math.random() * 2.5}s`,
    size: 1 + Math.random() * 3,
    color: Math.random() > 0.3 ? '#F97316' : '#FFFFFF'
  })), []);

  return (
    <div 
      className="fixed bottom-8 left-8 w-48 md:w-80 z-20 pointer-events-none select-none hidden md:block transition-all duration-700 ease-out"
      style={{ 
        perspective: '1200px',
        transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px) rotateX(${mousePos.y * -0.2}deg) rotateY(${mousePos.x * 0.2}deg)`,
        opacity: 0.15 + (scrollIntensity * 0.005),
      }}
    >
      <svg viewBox="0 0 200 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
        <defs>
          <filter id="glow-heavy" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="glow-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <linearGradient id="funnel-surface" x1="100" y1="20" x2="100" y2="280" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F97316" stopOpacity={0.4 + (scrollIntensity * 0.002)} />
            <stop offset="0.5" stopColor="#F97316" stopOpacity="0.05" />
            <stop offset="1" stopColor="#7C2D12" stopOpacity="0.02" />
          </linearGradient>

          <radialGradient id="exit-beam" cx="100" cy="280" r="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F97316" stopOpacity={0.8} />
            <stop offset="1" stopColor="#F97316" stopOpacity="0" />
          </radialGradient>

          <style>
            {`
              @keyframes flow-lead {
                0% { transform: translateY(-30px) scale(1.2); opacity: 0; }
                10% { opacity: 0.8; }
                40% { transform: translateY(120px) scale(0.9); opacity: 0.4; }
                70% { transform: translateY(220px) scale(0.6); opacity: 1; filter: blur(0px); }
                100% { transform: translateY(300px) scale(0.2); opacity: 0; }
              }
              .particle { animation: flow-lead cubic-bezier(0.4, 0, 0.6, 1) infinite; }
              .pulse-glow { animation: aura-pulse 3s ease-in-out infinite; }
              @keyframes aura-pulse {
                0%, 100% { opacity: 0.3; stroke-width: 1px; }
                50% { opacity: 0.7; stroke-width: 2px; }
              }
              .scan-line { animation: scanning 4s linear infinite; }
              @keyframes scanning {
                0% { transform: translateY(0); opacity: 0; }
                100% { transform: translateY(240px); opacity: 0; }
              }
            `}
          </style>
        </defs>

        <ellipse cx="100" cy="40" rx="90" ry="35" fill="rgba(249,115,22,0.03)" stroke="#F97316" strokeWidth="0.5" strokeOpacity="0.2" />
        <path d="M10 40C10 40 10 90 100 90C190 90 190 40 190 40L125 280H75L10 40Z" fill="url(#funnel-surface)" stroke="#F97316" strokeWidth="1" strokeOpacity="0.1" />
        
        <g className="ring-stage">
          <ellipse cx="100" cy="100" rx="65" ry="18" stroke="#F97316" strokeWidth="1" strokeOpacity="0.3" className="pulse-glow" />
          <text x="175" y="105" fill="#F97316" fontSize="6" fontWeight="900" opacity="0.4" className="uppercase tracking-widest">AQUISIÇÃO</text>
          
          <ellipse cx="100" cy="180" rx="42" ry="12" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.5" />
          <text x="155" y="185" fill="#F97316" fontSize="6" fontWeight="900" opacity="0.6" className="uppercase tracking-widest">EDUCAÇÃO</text>

          <ellipse cx="100" cy="240" rx="28" ry="8" stroke="#F97316" strokeWidth="2" strokeOpacity="0.8" />
          <text x="140" y="245" fill="#F97316" fontSize="6" fontWeight="900" opacity="0.9" className="uppercase tracking-widest">LTV & LUCRO</text>
        </g>

        <line x1="20" y1="40" x2="180" y2="40" stroke="#F97316" strokeWidth="2" strokeOpacity="0.8" filter="url(#glow-soft)" className="scan-line" />

        {particles.map((p) => (
          <g key={p.id} className="particle" style={{ animationDelay: p.delay, animationDuration: p.duration }}>
            <circle cx={p.cx} cy="0" r={p.size} fill={p.color} />
          </g>
        ))}

        <g transform="translate(100, 280)">
          <ellipse cx="0" cy="0" rx="25" ry="10" fill="url(#exit-beam)" filter="url(#glow-heavy)" />
          <circle cx="0" cy="10" r="2" fill="#F97316" />
        </g>

        <g transform="translate(20, 310)" opacity="0.4">
          <text fill="white" fontSize="5" fontWeight="bold" className="uppercase tracking-tighter">Status: {scrollIntensity > 50 ? 'FIDELIZANDO' : 'OPERANDO'}</text>
          <text y="8" fill="#F97316" fontSize="5" fontWeight="bold" className="uppercase tracking-tighter">Retenção: 98.4%</text>
        </g>
      </svg>
    </div>
  );
};

export default Funnel3D;
