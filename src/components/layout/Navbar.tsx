'use client'

import * as React from 'react'
import {useTheme} from '@/components/ThemeProvider'
import {motion, AnimatePresence} from 'framer-motion'
import {Menu, X, Sun, Moon} from 'lucide-react'
import {Button} from '@/components/ui/Button'
import {cn} from '@/lib/utils'
import {NavLink} from '@/types'
import {usePathname} from 'next/navigation'

const navLinks: NavLink[] = [
  {label: 'Tentang', href: '#about'},
  {label: 'Layanan', href: '#services'},
  {label: 'Portfolio', href: '#portfolio'},
  {label: 'Stack', href: '#tech-stack'},
  {label: 'Kontak', href: '#contact'},
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState('')
  const {theme, setTheme} = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const pathname = usePathname()

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  React.useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)

      // ScrollSpy functionality
      const sections = navLinks.map((link) => link.href.substring(1))
      let current = ''
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section
            break
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const targetId = href.replace('#', '')
    const elem = document.getElementById(targetId)
    if (elem) {
      const offsetTop = elem.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[var(--bg-page)]/90 backdrop-blur-md border-b border-[var(--border-default)] shadow-sm'
          : 'bg-transparent',
      )}
    >
      <div className="container-custom h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => scrollTo(e, '#hero')}
          className="flex items-center gap-2 relative z-50"
        >
          <span className="text-xl font-extrabold text-brand-primary tracking-tight">
            Akasa
            <span className="text-text-primary">DevSign</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={cn(
                  'text-sm font-semibold transition-colors relative py-1',
                  isActive ? 'text-brand-primary' : 'text-text-primary hover:text-brand-primary',
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-amber rounded-full"
                    transition={{type: 'spring', stiffness: 300, damping: 30}}
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4 relative z-50">
          {/* Dark Mode Toggle */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}

          <Button
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) {
                window.scrollTo({top: el.offsetTop - 80, behavior: 'smooth'})
              }
            }}
          >
            Hubungi Kami
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{x: '100%'}}
              animate={{x: 0}}
              exit={{x: '100%'}}
              transition={{type: 'spring', damping: 25, stiffness: 200}}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[var(--bg-surface)] shadow-2xl z-40 p-6 flex flex-col md:hidden"
            >
              <div className="h-10" /> {/* Spacer for header */}
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-xl font-semibold text-text-primary hover:text-brand-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-auto pt-6 border-t border-[var(--border-default)]">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    const el = document.getElementById('contact')
                    if (el) window.scrollTo({top: el.offsetTop - 80, behavior: 'smooth'})
                  }}
                >
                  Mulai Proyek
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
