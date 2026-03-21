import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

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
    features: [
      'Monaco Editor 기반 코드 에디터에서 실시간 타이핑 연습',
      '정확도, WPM(분당 타수), 오타율 등 실시간 통계 대시보드',
      'JavaScript, Python, Java 등 다양한 언어의 코드 스니펫 제공',
      '구문 하이라이팅 및 자동완성 지원으로 실제 코딩 환경과 유사한 UX',
    ],
    contributions: [
      '프로젝트 전체 기획 및 일정 관리 (PM)',
      'Monaco Editor 커스터마이징 및 타이핑 이벤트 핸들링 구현',
      'Tailwind CSS 기반 반응형 UI 설계 및 개발',
      '팀원 4명과 협업하며 코드 리뷰 및 Git 브랜치 전략 수립',
    ],
    team: 5,
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
    features: [
      '문제 출제 및 관리 시스템 (마크다운 에디터 지원)',
      '코드 제출 후 실시간 채점 결과 확인',
      '대회 모드: 실시간 랭킹 보드 및 타이머',
      '사용자별 풀이 기록 및 통계 페이지',
    ],
    contributions: [
      'React Query를 활용한 서버 상태 관리 및 캐싱 전략 설계',
      '실시간 채점 결과를 폴링 방식으로 UI에 반영',
      '대회 랭킹 보드 컴포넌트 설계 및 구현',
      'TypeScript 기반 타입 안전한 API 통신 레이어 구축',
    ],
    team: 8,
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
    features: [
      '언어별·라이브러리별 카테고리 분류 및 탐색',
      '마크다운 기반 강의 콘텐츠 렌더링',
      '반응형 레이아웃으로 모바일 환경 지원',
      '테마 컬러를 활용한 일관된 디자인 시스템',
    ],
    contributions: [
      'Styled-Components 기반 디자인 시스템 및 공통 컴포넌트 설계',
      '강의 목록·상세 페이지 UI 구현',
      '카테고리 필터링 및 검색 기능 개발',
      '컴포넌트 재사용성을 고려한 폴더 구조 설계',
    ],
    team: 3,
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
    features: [
      '기념일 등록 및 D-day 카운트다운',
      '기념일 당일 자동 축하 메시지 발송',
      '캘린더 뷰로 기념일 한눈에 확인',
      'RESTful API 설계 및 사용자 인증 시스템',
    ],
    contributions: [
      'Node.js + Express 기반 백엔드 API 설계 및 구현',
      'React 프론트엔드 전체 UI/UX 설계',
      'JWT 기반 사용자 인증 및 세션 관리',
      '프론트엔드-백엔드 간 API 명세 설계 및 연동',
    ],
    team: 2,
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
                  {p.role}
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* 백드롭 */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />

            {/* 센터 모달 */}
            <motion.div
              className="relative w-[90vw] max-w-5xl h-[80vh] bg-white dark:bg-neutral-900 rounded-xl shadow-2xl overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* 상단 비주얼 영역 */}
              <div
                className="relative h-[25%] shrink-0 flex items-center justify-center"
                style={{ background: isDark ? selected.darkBg : selected.bg }}
              >
                <span className="text-6xl md:text-7xl font-black text-black/10 dark:text-white/10">
                  {selected.title}
                </span>

                {/* 닫기 버튼 */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-white/60 dark:bg-black/40 backdrop-blur-md hover:bg-white/90 dark:hover:bg-black/60 text-gray-600 dark:text-gray-300 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* 콘텐츠 영역 */}
              <div className="flex-1 flex overflow-hidden">
                {/* 왼쪽: 스크롤되는 본문 */}
                <div className="flex-1 overflow-y-auto px-10 md:px-14 py-10" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    {selected.title}
                  </h3>
                  <p className="text-base text-gray-400 dark:text-gray-500 mt-1">
                    {selected.desc}
                  </p>

                  <div className="w-12 h-0.5 bg-gray-200 dark:bg-gray-700 my-6" />

                  <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selected.detail}
                  </p>

                  {/* 주요 기능 */}
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-3 uppercase tracking-wider">
                    주요 기능
                  </h4>
                  <ul className="space-y-2">
                    {selected.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-1.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* 기여 내용 */}
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-3 uppercase tracking-wider">
                    기여 내용
                  </h4>
                  <ul className="space-y-2">
                    {selected.contributions.map((c, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-1.5" />
                        {c}
                      </li>
                    ))}
                  </ul>

                  {/* 기술 태그 */}
                  <div className="flex flex-wrap gap-2 mt-8">
                    {selected.tag.split(' · ').map((t) => (
                      <span
                        key={t}
                        className="text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-1.5 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

                {/* 오른쪽: 고정 메타 정보 */}
                <div className="hidden md:flex shrink-0 w-52 flex-col justify-between border-l border-gray-100 dark:border-gray-800 px-8 py-10">
                  <div className="flex flex-col gap-5">
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider font-medium">기간</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 font-medium">{selected.period}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider font-medium">역할</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 font-medium">{selected.role}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider font-medium">팀 규모</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 font-medium">{selected.team}명</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider font-medium">기술 스택</p>
                    <div className="flex flex-col gap-1 mt-1">
                      {selected.tag.split(' · ').map((t) => (
                        <p key={t} className="text-sm text-gray-700 dark:text-gray-300 font-medium">{t}</p>
                      ))}
                    </div>
                  </div>

                  </div>

                  {/* 링크 버튼 */}
                  {selected.href && (
                    <a
                      href={selected.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-full hover:opacity-80 transition-opacity"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
