import { LineChart, ShoppingCart, Users } from 'lucide-react'

type LucideIcon = React.FC<React.SVGProps<SVGSVGElement>>

interface Routes {
  label: string
  route: string
  icon: LucideIcon
}

export const MENU_ROUTES: Routes[] = [
  {
    label: 'Comercial',
    route: '/commercial',
    icon: ShoppingCart,
  },
  {
    label: 'Soporte',
    route: '/support',
    icon: Users,
  },
  {
    label: 'Facturación',
    route: '/billing',
    icon: LineChart,
  },
]
