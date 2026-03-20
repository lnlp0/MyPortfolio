import { motion } from 'motion/react'

const activities = [
  { title: '28회 알파코 디지털 새싹 캠프 앱잼 장려상', sub: '치매 예방 및 치료 서비스', period: '2024.12' },
  { title: '2025 교내 나르샤 프로젝트 PM 참여', sub: '코드 기반 타자연습 서비스 CodeRun', period: '2025.03 ~ 11' },
  { title: '교내 알고리즘 대회 DPC 운영 및 문제 출제', period: '2025.07' },
  { title: '제 24회 TOPCIT', sub: '389점, 2수준', period: '2025.11' },
  { title: '교내 동아리 프로젝트 "두깨비" 프론트엔드 참여', period: '2025.11' },
  { title: '2026년 겨울방학 실리콘밸리 온라인 인턴십 참여', period: '2026.01 ~ 03' },
]

const certificates = [
  { title: 'AI 코딩 활용 능력 1급', period: '2025.12' },
  { title: '프로그래밍 기능사', period: '2026.03 (예정)' },
]

export default function Activities() {
  return (
    <section className="px-8 pb-24 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* 주요 활동 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-2xl font-bold mb-8 dark:text-gray-100">주요 활동</h2>
          <div className="flex flex-col gap-5">
            {activities.map((a, i) => (
              <motion.div
                key={i}
                className="flex justify-between items-start gap-4"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{a.title}</p>
                  {a.sub && <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{a.sub}</p>}
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0">{a.period}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 자격증 + 학력 */}
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-2xl font-bold mb-8 dark:text-gray-100">자격증</h2>
            <div className="flex flex-col gap-5">
              {certificates.map((c, i) => (
                <motion.div
                  key={i}
                  className="flex justify-between items-center"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{c.title}</p>
                  <span className="text-xs text-gray-400 dark:text-gray-500">{c.period}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-2xl font-bold mb-8 dark:text-gray-100">학력</h2>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">대구소프트웨어마이스터고등학교</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">소프트웨어개발과</p>
              </div>
              <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0">2024.03 ~ 2027.02 (졸업 예정)</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
