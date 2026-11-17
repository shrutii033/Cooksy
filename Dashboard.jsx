import { Link } from 'react-router-dom'
import { Plus, Compass, BookHeart, ChefHat, ShoppingBasket } from 'lucide-react'
import { Card, LinkCard, Badge, ExpiryBadge, Button } from '../../components/ui'

// SAMPLE DATA. Replaced by API data in Phase 3; the UI labels it as sample.
const USE_SOON = [
  { name: 'Spinach', qty: '250 g', days: 1, source: 'user', where: 'Refrigerator' },
  { name: 'Curd', qty: '400 g', days: 2, source: 'ocr', where: 'Refrigerator' },
  { name: 'Paneer', qty: '200 g', days: 3, source: 'estimated', where: 'Refrigerator' },
]
const SUGGESTED = [
  { title: 'Palak Paneer', origin: 'Punjab', have: 5, total: 7, min: 35, uses: ['Spinach', 'Paneer'] },
  { title: 'Vegetable Pulao', origin: 'Your recipe', have: 6, total: 7, min: 30, uses: ['Peas'], mine: true },
  { title: 'Curd Rice', origin: 'Tamil Nadu', have: 4, total: 5, min: 15, uses: ['Curd'] },
]
const SHORTCUTS = [
  { to: '/inventory', label: 'Add ingredients', hint: 'Photo, camera or manual', icon: Plus, dark: true },
  { to: '/discover', label: 'Explore recipes', hint: 'Search by dish or state', icon: Compass },
  { to: '/cookbook', label: 'My cookbook', hint: 'Your saved recipes', icon: BookHeart },
  { to: '/cook', label: 'Start cooking', hint: 'Guided or on your own', icon: ChefHat },
]

export default function Dashboard() {
  return (
    <div className="space-y-10">
      <section className="rounded-hero bg-mimi p-6 sm:p-10">
        <Badge tone="outline" className="bg-white/70">Sample data</Badge>
        <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">Good evening, Asha.<br className="hidden sm:block" /> 3 things need cooking soon.</h1>
        <p className="mt-3 max-w-lg text-ink/80">Spinach, curd and paneer are close to their dates. Here are dinners that use them.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/discover"><Button>See dinner ideas</Button></Link>
          <Link to="/inventory"><Button variant="soft" className="bg-white/80">Add groceries</Button></Link>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {SHORTCUTS.map(s => (
          <LinkCard as={Link} key={s.to} to={s.to} className={`flex flex-col gap-3 ${s.dark ? '!bg-spring text-white' : ''}`}>
            <s.icon size={22} className={s.dark ? '' : 'text-rose'} />
            <div><p className="font-semibold">{s.label}</p><p className={`text-sm ${s.dark ? 'text-mimi' : 'text-ink/65'}`}>{s.hint}</p></div>
          </LinkCard>
        ))}
      </section>

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-2">
          <h2 className="text-xl font-semibold">Use these soon</h2>
          <ul className="mt-4 divide-y divide-mimi">
            {USE_SOON.map(i => (
              <li key={i.name} className="flex items-center justify-between gap-3 py-3">
                <div><p className="font-semibold">{i.name}</p><p className="text-sm text-ink/65">{i.qty}, {i.where}</p></div>
                <ExpiryBadge days={i.days} source={i.source} />
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-ink/60">Dates marked Estimated come from general storage guidance. Check the pack to be sure.</p>
        </Card>

        <div className="space-y-3 lg:col-span-3">
          <h2 className="text-xl font-semibold">Cook with what you have</h2>
          {SUGGESTED.map(r => (
            <LinkCard key={r.title} className="flex items-center gap-4">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-asparagus/20 font-display text-2xl text-spring" aria-hidden>{r.title[0]}</div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{r.title}</p>
                <p className="text-sm text-ink/65">{r.origin}, {r.min} min</p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <Badge>{r.have} of {r.total} ingredients</Badge>
                  {r.uses.map(u => <Badge key={u} tone="pink">Uses {u}</Badge>)}
                  {r.mine && <Badge tone="rose">Your recipe</Badge>}
                </div>
              </div>
            </LinkCard>
          ))}
        </div>
      </div>

      <Card as={Link} to="/grocery" className="flex items-center justify-between transition hover:shadow-lift">
        <span className="flex items-center gap-3"><ShoppingBasket className="text-rose" /><span className="font-semibold">Grocery list: 6 items to buy</span></span>
        <span className="text-sm text-spring">Open list</span>
      </Card>
    </div>
  )
}
