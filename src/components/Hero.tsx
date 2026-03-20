import { motion } from 'motion/react'
import { Mail, Github, Linkedin, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'

type Segment = { text: string; className?: string; isEm?: boolean }

const LINES: Segment[][] = [
  [{ text: '세상을' }],
  [
    { text: 'UI로', className: 'text-blue-500 underline underline-offset-4 decoration-blue-300' },
    { text: ' 보고 ' },
    { text: 'UX로', className: 'text-blue-500 underline underline-offset-4 decoration-blue-300' },
    { text: ' 경험하는' },
  ],
  [
    {
      text: '프론트엔드',
      className: 'not-italic font-bold tracking-[-0.02em] text-blue-500 underline underline-offset-4 decoration-blue-300',
      isEm: true,
    },
    { text: ' 개발자' },
  ],
  [{ text: '차동규입니다.' }],
]

const TOTAL_CHARS = LINES.reduce(
  (sum, line) => sum + line.reduce((s, seg) => s + seg.text.length, 0),
  0,
)

const SPEED_MS = 50

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const contacts = [
  { label: 'Email', href: 'mailto:me@lnlp.dev', Icon: Mail },
  { label: 'Phone', href: `tel:${import.meta.env.VITE_PHONE}`, Icon: Phone },
  { label: 'GitHub', href: 'https://github.com/lnlp0', Icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/lnlp', Icon: Linkedin },
]

export default function Hero() {
  const [count, setCount] = useState(0)
  const typingDone = count >= TOTAL_CHARS

  useEffect(() => {
    if (count >= TOTAL_CHARS) return
    const t = setTimeout(() => setCount((c) => c + 1), SPEED_MS)
    return () => clearTimeout(t)
  }, [count])

  let remaining = count
  const renderedLines = LINES.map((line, li) => {
    const lineLen = line.reduce((s, seg) => s + seg.text.length, 0)
    if (remaining <= 0) return null

    const isLastRenderedLine = remaining <= lineLen
    const lineChars = Math.min(remaining, lineLen)
    remaining -= lineLen

    let charLeft = lineChars
    const segs = line.map((seg, si) => {
      if (charLeft <= 0) return null
      const visible = Math.min(charLeft, seg.text.length)
      charLeft -= seg.text.length
      const text = seg.text.slice(0, visible)
      if (!text) return null

      if (seg.isEm) return <em key={si} className={seg.className}>{text}</em>
      if (seg.className) return <span key={si} className={seg.className}>{text}</span>
      return <span key={si}>{text}</span>
    })

    return (
      <span key={li} className="block">
        {segs}
        {isLastRenderedLine && (
          <span className="animate-blink inline-block w-[3px] h-[0.82em] bg-current align-middle ml-[2px] rounded-[1px]" />
        )}
      </span>
    )
  })

  return (
    <section className="min-h-screen flex flex-col justify-center px-8 pt-24 pb-16 max-w-5xl mx-auto">
      {/* 헤드라인 */}
      <div className="mb-10">
        <div className="relative">
          {/* 공간 예약용 ghost */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.15] tracking-tight invisible"
            aria-hidden="true"
          >
            <span className="block">세상을</span>
            <span className="block">
              <span className="text-blue-500 underline underline-offset-4 decoration-blue-300">UI로</span>{' '}
              보고{' '}
              <span className="text-blue-500 underline underline-offset-4 decoration-blue-300">UX로</span>{' '}
              경험하는
            </span>
            <span className="block">
              <em className="not-italic font-bold tracking-[-0.02em] text-blue-500 underline underline-offset-4 decoration-blue-300">프론트엔드</em>{' '}
              개발자
            </span>
            <span className="block">차동규입니다.</span>
          </h1>
          {/* 타이핑 텍스트 */}
          <h1 className="absolute inset-0 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.15] tracking-tight">
            {renderedLines}
          </h1>
        </div>
      </div>

      {/* 서브텍스트 + 아이콘 */}
      <div className="flex items-center gap-10">
        <motion.p
          className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate={typingDone ? 'show' : 'hidden'}
          custom={0}
        >
          사용자의 시선으로 인터페이스를 설계하고,
          <br />
          경험으로 완성되는 프로덕트를 만들어갑니다.
        </motion.p>

        {/* 연락처 아이콘 버튼 */}
        <motion.div
          className="flex gap-3"
          variants={fadeUp}
          initial="hidden"
          animate={typingDone ? 'show' : 'hidden'}
          custom={1}
        >
          {contacts.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500 transition-colors"
            >
              <Icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* 구분선 */}
      <motion.div
        className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800"
        variants={fadeUp}
        initial="hidden"
        animate={typingDone ? 'show' : 'hidden'}
        custom={2}
      />
    </section>
  )
}
