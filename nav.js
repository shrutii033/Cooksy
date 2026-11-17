import { LayoutDashboard, Refrigerator, TimerReset, Compass, ChefHat, BookHeart, ShoppingBasket, BarChart3, UserRound } from 'lucide-react'
export const NAV = [
  { to: '/', label: 'Home', icon: LayoutDashboard, end: true },
  { to: '/inventory', label: 'My kitchen', icon: Refrigerator },
  { to: '/expiry', label: 'Expiry', icon: TimerReset },
  { to: '/discover', label: 'Discover', icon: Compass },
  { to: '/cook', label: 'Cook', icon: ChefHat },
  { to: '/cookbook', label: 'My cookbook', icon: BookHeart },
  { to: '/grocery', label: 'Grocery list', icon: ShoppingBasket },
  { to: '/insights', label: 'Insights', icon: BarChart3 },
  { to: '/profile', label: 'Profile', icon: UserRound },
]
export const MOBILE_TABS = ['/', '/inventory', '/discover', '/cook', '/cookbook']
