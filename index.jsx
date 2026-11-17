import { forwardRef } from 'react'
const cx = (...a) => a.filter(Boolean).join(' ')

const VARIANTS = {
  primary: 'bg-spring text-white hover:bg-[#2b6249] shadow-card',
  accent: 'bg-rose text-white hover:bg-[#d4628a]',
  soft: 'bg-mimi text-spring hover:bg-amaranth/50',
  ghost: 'text-spring hover:bg-mimi',
}
export const Button = forwardRef(function Button({ variant = 'primary', size = 'md', className, loading, children, ...p }, ref) {
  return (
    <button ref={ref} disabled={loading || p.disabled} {...p}
      className={cx('inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition active:scale-[.98] disabled:opacity-60',
        size === 'sm' ? 'px-3 py-1.5 text-sm' : 'px-5 py-2.5 text-[15px]', VARIANTS[variant], className)}>
      {loading ? 'Please wait…' : children}
    </button>
  )
})

export const Card = ({ className, as: T = 'div', ...p }) =>
  <T {...p} className={cx('rounded-card bg-white p-5 shadow-card', className)} />

export const LinkCard = ({ className, ...p }) =>
  <Card {...p} className={cx('transition hover:-translate-y-0.5 hover:shadow-lift', className)} />

const TONES = { green: 'bg-asparagus/15 text-spring', pink: 'bg-mimi text-[#a8436a]', rose: 'bg-rose text-white', outline: 'border border-asparagus/50 text-spring' }
export const Badge = ({ tone = 'green', className, ...p }) =>
  <span {...p} className={cx('inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold', TONES[tone], className)} />

export const Chip = ({ active, className, ...p }) =>
  <button {...p} className={cx('rounded-full px-4 py-1.5 text-sm font-medium transition',
    active ? 'bg-spring text-white' : 'bg-white text-spring shadow-card hover:bg-mimi', className)} />

export const Input = forwardRef(function Input({ label, error, className, ...p }, ref) {
  return (
    <label className="block text-sm font-medium text-spring">
      {label}
      <input ref={ref} {...p} className={cx('mt-1 w-full rounded-xl border bg-white px-4 py-2.5 text-ink placeholder:text-asparagus/80',
        error ? 'border-rose' : 'border-mimi focus:border-asparagus', className)} />
      {error && <span className="mt-1 block text-xs text-[#a8436a]">{error}</span>}
    </label>
  )
})

export const PageHeader = ({ title, subtitle, action }) => (
  <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
    <div><h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
      {subtitle && <p className="mt-1 max-w-xl text-ink/75">{subtitle}</p>}</div>
    {action}
  </div>
)

// Expiry rule: an estimated date is always labelled, never shown as a printed expiry date.
export function ExpiryBadge({ days, source }) {
  const tone = days < 0 ? 'rose' : days <= 3 ? 'pink' : 'green'
  const text = days < 0 ? `Expired ${-days}d ago` : days === 0 ? 'Expires today' : `${days}d left`
  return (
    <span className="inline-flex items-center gap-1.5">
      <Badge tone={tone}>{text}</Badge>
      {source === 'estimated' && <Badge tone="outline" title="Estimated from general storage guidance, not the packaging">Estimated</Badge>}
    </span>
  )
}
