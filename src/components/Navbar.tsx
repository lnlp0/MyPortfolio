interface NavbarProps {
  isDark: boolean
  onToggleTheme: () => void
}

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-8 py-6">
      <button
        onClick={onToggleTheme}
        className="w-10 h-10 rounded-full flex items-center justify-center text-lg transition-colors
          bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300
          dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
        aria-label="테마 전환"
      >
        {isDark ? '☀︎' : '☾'}
      </button>
    </nav>
  )
}
