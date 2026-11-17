import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Input } from '../../components/ui'
export default function Login() {
  const nav = useNavigate(); const [err, setErr] = useState({})
  const submit = e => {
    e.preventDefault(); const f = new FormData(e.target); const er = {}
    if (!/^\S+@\S+\.\S+$/.test(f.get('email'))) er.email = 'Enter a valid email address.'
    if ((f.get('password') || '').length < 8) er.password = 'Use at least 8 characters.'
    setErr(er); if (!Object.keys(er).length) nav('/') // Phase 3 swaps this for the real API call
  }
  return (
    <div className="grid min-h-screen place-items-center bg-mimi p-4">
      <Card className="w-full max-w-md p-8">
        <h1 className="font-display text-4xl font-semibold">Cooksy</h1>
        <p className="mb-6 text-asparagus">Your kitchen. Your rules.</p>
        <form onSubmit={submit} className="space-y-4" noValidate>
          <Input name="email" type="email" label="Email" error={err.email} autoComplete="email" />
          <Input name="password" type="password" label="Password" error={err.password} autoComplete="current-password" />
          <Button className="w-full">Log in</Button>
        </form>
      </Card>
    </div>
  )
}
