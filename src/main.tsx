import 'bootstrap-icons/font/bootstrap-icons.css'
import 'katex/dist/katex.min.css'
import './styles/theme.scss'
import './styles/motion.scss'
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'

export const createRoot = ViteReactSSG({ routes })
