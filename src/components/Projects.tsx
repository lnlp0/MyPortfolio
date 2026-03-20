import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const projects = [
  {
    title: 'CodeRun{ }',
    desc: '학생을 위한 코드기반 타자연습 서비스',
    tag: 'React · Tailwind · Monaco Editor',
    bg: '#e8e4dc',
    darkBg: '#2a2720',
    href: 'https://www.lnlp.dev/coderun',
    period: '2025.04 ~ 2025.11',
  },
  {
    title: '두깨비',
    desc: '교내 온라인 Judge 및 대회 서비스',
    tag: 'React · TypeScript · React Query',
    bg: '#dce4e8',
    darkBg: '#1e2a2f',
    href: 'https://www.lnlp.dev/dukkaebi',
    period: '2025.11 ~ 2026.02',
  },
  {
    title: '아름아리',
    desc: '라이브러리 · 언어 정리 및 강의 서비스',
    tag: 'React · Styled-Components',
    bg: '#e4e8dc',
    darkBg: '#222a1e',
    href: '#',
    period: '2024.11 ~ 2025.01',
  },
  {
    title: 'Todate',
    desc: '신개념 기념일 축하 서비스',
    tag: 'React · TypeScript · Node.js',
    bg: '#e8dce4',
    darkBg: '#2a1e27',
    href: '#',
    period: '2025.02 ~ 현재',
  },
]

export default function Projects() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="px-8 pb-32 max-w-5xl mx-auto">
      <motion.h2
        className="text-2xl font-bold mb-8 dark:text-gray-100"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        프로젝트
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            target={p.href !== '#' ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="group block rounded-2xl overflow-hidden cursor-pointer"
            style={{ background: isDark ? p.darkBg : p.bg }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.01 }}
          >
            {/* 썸네일 영역 */}
            <div className="h-56 flex items-center justify-center">
              <span className="text-4xl font-bold text-black/10 dark:text-white/10 group-hover:text-black/20 dark:group-hover:text-white/20 transition-colors">
                {p.title}
              </span>
            </div>

            {/* 카드 하단 */}
            <div className="px-6 py-5 bg-white/50 dark:bg-black/40 backdrop-blur-sm flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">{p.title}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{p.desc}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs text-gray-500 dark:text-gray-300 bg-white/70 dark:bg-white/10 rounded-full px-3 py-1">
                  {p.tag}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {p.period}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
