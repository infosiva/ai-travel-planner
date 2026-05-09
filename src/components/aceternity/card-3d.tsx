'use client';
import { useRef, useState } from 'react';
export function CardContainer({ children, className='', containerClassName='' }: { children: React.ReactNode; className?: string; containerClassName?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rx, setRx] = useState(0); const [ry, setRy] = useState(0);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setRx(((e.clientY-r.top-r.height/2)/(r.height/2))*-10);
    setRy(((e.clientX-r.left-r.width/2)/(r.width/2))*10);
  };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={()=>{setRx(0);setRy(0);}} className={['flex items-center justify-center', containerClassName].join(' ')} style={{perspective:'1000px'}}>
      <div className={['transition-transform duration-200 ease-linear', className].join(' ')} style={{transform:`rotateX(${rx}deg) rotateY(${ry}deg)`,transformStyle:'preserve-3d'}}>{children}</div>
    </div>
  );
}
export function CardBody({ children, className='' }: { children: React.ReactNode; className?: string }) {
  return <div className={['[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]', className].join(' ')}>{children}</div>;
}
export function CardItem({ children, className='', translateZ=0, style }: { children: React.ReactNode; className?: string; translateZ?: number; style?: React.CSSProperties }) {
  return <div className={className} style={{transform:`translateZ(${translateZ}px)`,...(style||{})}}>{children}</div>;
}
