import { useState } from 'react'
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV, MOBILE_TABS } from './nav.js'

const side = ({ isActive }) =>
  `flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[15px] font-medium transition-colors ${isActive ? 'bg-mimi text-spring' : 'text-white/85 hover:bg-white/10'}`

function Brand({ light }) {
  return (
    <Link to="/" className="block">
      <span className={`font-display text-3xl font-semibold ${light ? 'text-white' : 'text-spring'}`}>Cooksy</span>
      <span className={`block text-xs ${light ? 'text-mimi' : 'text-asparagus'}`}>Your kitchen. Your rules.</span>
    </Link>
  )
}

export default function AppShell() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  return (
    <div className="min-h-screen lg:flex">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col bg-spring p-5 lg:flex">
        <Brand light />
        <nav className="mt-8 flex flex-col gap-1" aria-label="Main">
          {NAV.map(n => <NavLink key={n.to} to={n.to} end={n.end} className={side}><n.icon size={19} />{n.label}</NavLink>)}
        </nav>
        <p className="mt-auto rounded-xl bg-white/10 p-3 text-xs text-mimi">Sample data is shown until you add your own ingredients.</p>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center justify-between bg-cream/95 px-4 py-3 backdrop-blur lg:hidden">
          <Brand />
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="rounded-xl p-2 text-spring hover:bg-mimi"><Menu /></button>
        </header>

        <AnimatePresence>
          {open && (
            <motion.div className="fixed inset-0 z-50 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="absolute inset-0 bg-ink/40" onClick={() => setOpen(false)} />
              <motion.nav initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.22 }}
                className="absolute right-0 top-0 flex h-full w-72 flex-col gap-1 bg-spring p-5" aria-label="Menu">
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="mb-4 self-end text-white"><X /></button>
                {NAV.map(n => <NavLink key={n.to} to={n.to} end={n.end} onClick={() => setOpen(false)} className={side}><n.icon size={19} />{n.label}</NavLink>)}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.main key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}
          className="mx-auto w-full max-w-6xl flex-1 px-4 pb-28 pt-4 sm:px-8 lg:pb-12 lg:pt-10">
          <Outlet />
        </motion.main>

        <nav className="fixed inset-x-0 bottom-0 z-30 flex justify-around border-t border-mimi bg-white px-2 pb-[env(safe-area-inset-bottom)] lg:hidden" aria-label="Tabs">
          {NAV.filter(n => MOBILE_TABS.includes(n.to)).map(n => (
            <NavLink key={n.to} to={n.to} end={n.end}
              className={({ isActive }) => `flex flex-1 flex-col items-center gap-0.5 py-2 text-[11px] font-medium ${isActive ? 'text-rose' : 'text-spring/70'}`}>
              <n.icon size={21} />{n.label.replace('My ', '')}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}
