import { useRef, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const TEXT = '세상을 UI로 보고 UX로 경험하는 프론트엔드 개발자 차동규입니다.'

interface CharData {
  char: string
  tx: number
  ty: number
  rotate: number
}

export default function ScatterText() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const chars: CharData[] = useMemo(() => {
    return TEXT.split('').map(() => {
      const angle = Math.random() * Math.PI * 2
      const distance = 300 + Math.random() * 500
      return {
        char: '',
        tx: Math.cos(angle) * distance,
        ty: Math.sin(angle) * distance,
        rotate: (Math.random() - 0.5) * 720,
      }
    })
  }, [])

  return (
    <div ref={containerRef} style={{ height: '300vh' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            fontWeight: 700,
            lineHeight: 1.6,
            textAlign: 'center',
            maxWidth: '80vw',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.05em',
          }}
        >
          {TEXT.split('').map((char, i) => (
            <Char
              key={i}
              char={char}
              tx={chars[i].tx}
              ty={chars[i].ty}
              rotate={chars[i].rotate}
              progress={scrollYProgress}
            />
          ))}
        </p>
      </div>
    </div>
  )
}

function Char({
  char,
  tx,
  ty,
  rotate,
  progress,
}: {
  char: string
  tx: number
  ty: number
  rotate: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const x = useTransform(progress, [0, 1], [0, tx])
  const y = useTransform(progress, [0, 1], [0, ty])
  const r = useTransform(progress, [0, 1], [0, rotate])
  const opacity = useTransform(progress, [0, 0.7, 1], [1, 0.3, 0])

  if (char === ' ') return <span style={{ width: '0.4em' }} />

  return (
    <motion.span
      style={{
        display: 'inline-block',
        x,
        y,
        rotate: r,
        opacity,
      }}
    >
      {char}
    </motion.span>
  )
}
