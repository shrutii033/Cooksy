import { Routes, Route } from 'react-router-dom'
import AppShell from './AppShell.jsx'
import Dashboard from '../features/dashboard/Dashboard.jsx'
import Login from '../features/auth/Login.jsx'
import Placeholder from '../components/domain/Placeholder.jsx'
import { NAV } from './nav.js'
const PAGES = {
  '/inventory': ['Add by photo, camera or by hand, then review every detected item before it is saved.', 'Phases 3 and 4'],
  '/expiry': ['Fresh, expiring soon, expired and undated items. Your dates and estimated dates are always labelled differently.', 'Phase 4'],
  '/discover': ['Search recipes or a state, filter by diet and time, and explore all 36 states and union territories.', 'Phase 5'],
  '/cook': ['Cook on your own with an assistant, or follow a recipe one step at a time.', 'Phase 6'],
  '/cookbook': ['Write, edit and favourite your own recipes.', 'Phase 6'],
  '/grocery': ['Plan a shop, track a budget and move purchases into your kitchen after you confirm.', 'Phase 7'],
  '/insights': ['Charts built from what you actually cook, use and waste.', 'Phase 7'],
  '/profile': ['Diet, cuisines, skill level, household size and budget.', 'Phase 3'],
}
export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<AppShell />}>
        <Route index element={<Dashboard />} />
        {NAV.filter(n => PAGES[n.to]).map(n => (
          <Route key={n.to} path={n.to} element={<Placeholder title={n.label} text={PAGES[n.to][0]} phase={PAGES[n.to][1]} icon={n.icon} />} />
        ))}
        <Route path="*" element={<Placeholder title="Page not found" text="That page does not exist. Use the menu to get back to your kitchen." phase="" />} />
      </Route>
    </Routes>
  )
}
