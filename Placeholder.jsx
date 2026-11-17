import { PageHeader, Card, Badge } from '../ui'
export default function Placeholder({ title, text, phase, icon: Icon }) {
  return (
    <>
      <PageHeader title={title} />
      <Card className="flex flex-col items-center gap-4 py-16 text-center">
        {Icon && <span className="grid h-16 w-16 place-items-center rounded-2xl bg-mimi text-spring"><Icon size={30} /></span>}
        <p className="max-w-md text-ink/80">{text}</p>
        {phase && <Badge tone="pink">Built in {phase}</Badge>}
      </Card>
    </>
  )
}
