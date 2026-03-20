import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'
import { X, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'CodeRun{ }',
    desc: '학생을 위한 코드기반 타자연습 서비스',
    detail:
      '실제 코드 스니펫을 활용한 타자연습 서비스입니다. Monaco Editor를 기반으로 구문 하이라이팅과 자동완성을 지원하며, 정확도·속도·오타율 등의 통계를 실시간으로 제공합니다. 나르샤 프로젝트 PM으로서 기획부터 개발까지 주도했습니다.',
    tag: 'React · Tailwind · Monaco Editor',
    bg: '#e8e4dc',
    darkBg: '#2a2720',
    href: 'https://www.lnlp.dev/coderun',
    period: '2025.04 ~ 2025.11',
    role: 'PM / Frontend',
  },
  {
    title: '두깨비',
    desc: '교내 온라인 Judge 및 대회 서비스',
    detail:
      '교내 알고리즘 대회(DPC)를 위한 온라인 저지 플랫폼입니다. 문제 출제, 실시간 채점, 대회 랭킹 시스템을 구현했으며, React Query를 활용한 효율적인 서버 상태 관리와 실시간 업데이트를 적용했습니다.',
    tag: 'React · TypeScript · React Query',
    bg: '#dce4e8',
    darkBg: '#1e2a2f',
    href: 'https://www.lnlp.dev/dukkaebi',
    period: '2025.11 ~ 2026.02',
    role: 'Frontend',
  },
  {
    title: '아름아리',
    desc: '라이브러리 · 언어 정리 및 강의 서비스',
    detail:
      '다양한 프로그래밍 언어와 라이브러리의 핵심 개념을 정리하고 강의 형태로 제공하는 학습 플랫폼입니다. Styled-Components를 활용해 일관된 디자인 시스템을 구축했습니다.',
    tag: 'React · Styled-Components',
    bg: '#e4e8dc',
    darkBg: '#222a1e',
    href: '',
    period: '2024.11 ~ 2025.01',
    role: 'Frontend',
  },
  {
    title: 'Todate',
    desc: '신개념 기념일 축하 서비스',
    detail:
      '기념일을 등록하고 자동으로 축하 메시지를 전달하는 서비스입니다. Node.js 기반의 백엔드와 React 프론트엔드를 직접 설계·개발하며 풀스택 경험을 쌓았습니다.',
    tag: 'React · TypeScript · Node.js',
    bg: '#e8dce4',
    darkBg: '#2a1e27',
    href: '',
    period: '2025.02 ~ 현재',
    role: 'Full Stack',
  },
]

export default function Projects() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains('dark')
  )
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null)

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!selected) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [selected])

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
          <motion.div
            key={p.title}
            className="group block rounded-2xl overflow-hidden cursor-pointer"
            style={{ background: isDark ? p.darkBg : p.bg }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.01 }}
            onClick={() => setSelected(p)}
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
          </motion.div>
        ))}
      </div>

      {/* 모달 */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* 백드롭 */}
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setSelected(null)}
            />

            {/* 패널 — 아래에서 슬라이드업 */}
            <motion.div
              className="absolute inset-x-0 bottom-0 max-h-[85vh] rounded-t-3xl bg-white dark:bg-neutral-900 overflow-y-auto"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* 드래그 핸들 */}
              <div className="sticky top-0 z-10 flex justify-center pt-3 pb-2 bg-white dark:bg-neutral-900">
                <div className="w-10 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
              </div>

              {/* 콘텐츠 */}
              <div className="max-w-3xl mx-auto px-6 pb-10 md:px-10">
                {/* 타이틀 + 닫기 */}
                <div className="flex items-start justify-between gap-4 mt-2">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                      {selected.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                      {selected.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="shrink-0 mt-1 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* 메타 태그 */}
                <div className="flex flex-wrap items-center gap-2 mt-5">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 rounded-full px-3 py-1">
                    {selected.role}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1">
                    {selected.period}
                  </span>
                  {selected.tag.split(' · ').map((t) => (
                    <span
                      key={t}
                      className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* 구분선 */}
                <div className="border-t border-gray-100 dark:border-gray-800 mt-6 mb-6" />

                {/* 상세 설명 */}
                <p className="text-base text-gray-700 dark:text-gray-300 leading-[1.85]">
                  {selected.detail}
                </p>

                {/* 링크 버튼 */}
                {selected.href && (
                  <a
                    href={selected.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 rounded-full px-5 py-2.5 transition-colors"
                  >
                    프로젝트 보러가기
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
