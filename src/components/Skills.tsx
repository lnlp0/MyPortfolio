import { motion } from 'motion/react'
import {
  SiReact, SiTypescript, SiVuedotjs, SiNextdotjs, SiHtml5, SiCss, SiJavascript,
  SiKotlin, SiPython, SiSpring, SiNodedotjs, SiFigma, SiGithub, SiGit, SiSlack,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import type { IconType } from 'react-icons'

type Skill = { name: string; Icon?: IconType; color?: string }

const skills: { category: string; items: Skill[] }[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React',       Icon: SiReact,       color: '#61DAFB' },
      { name: 'TypeScript',  Icon: SiTypescript,  color: '#3178C6' },
      { name: 'Vue.js',      Icon: SiVuedotjs,    color: '#42B883' },
      { name: 'Next.js',     Icon: SiNextdotjs                     },
      { name: 'HTML',        Icon: SiHtml5,       color: '#E34F26' },
      { name: 'CSS',         Icon: SiCss,         color: '#1572B6' },
      { name: 'JavaScript',  Icon: SiJavascript,  color: '#F7DF1E' },
    ],
  },
  {
    category: 'App',
    items: [
      { name: 'React Native', Icon: SiReact,   color: '#61DAFB' },
      { name: 'Kotlin',       Icon: SiKotlin,  color: '#7F52FF' },
      { name: 'Java',         Icon: FaJava,    color: '#007396' },
    ],
  },
  {
    category: 'Others',
    items: [
      { name: 'Python',      Icon: SiPython,   color: '#3776AB' },
      { name: 'Spring Boot', Icon: SiSpring,   color: '#6DB33F' },
      { name: 'Node.js',     Icon: SiNodedotjs, color: '#339933' },
      { name: 'C' },
      { name: 'SQL' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Figma',  Icon: SiFigma,  color: '#F24E1E' },
      { name: 'GitHub', Icon: SiGithub                   },
      { name: 'Git',    Icon: SiGit,    color: '#F05032' },
      { name: 'Slack',  Icon: SiSlack,  color: '#4A154B' },
    ],
  },
]

export default function Skills() {
  return (
    <section className="px-8 pb-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-2xl font-bold mb-8 dark:text-gray-100">기술 스택</h2>
        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {skills.map((s, i) => (
            <motion.div
              key={s.category}
              className="flex gap-8 py-5 items-start"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="w-24 shrink-0 text-sm text-gray-400 dark:text-gray-500 pt-0.5">
                {s.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {s.items.map(({ name, Icon, color }) => (
                  <span
                    key={name}
                    className="flex items-center gap-1.5 text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {Icon && <Icon size={13} style={{ color }} className="shrink-0" />}
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
