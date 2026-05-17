// MOCK DATA
import {
  Star, FileText, Eye, BookOpen, Moon, Navigation,
  Baby, Layers, Clock, CalendarDays, Calendar, Info,
  Heart, GitMerge, Search, CheckCircle,
  Hash, Timer, Home, Ruler,
  HelpCircle, Zap, Bird, Feather,
  CircleDot, Flame, Sun, Gift, BookMarked,
} from 'lucide-react'

export const categoryData = [
  {
    title: 'ஜாதகம் & பலன்கள்',
    titleEn: 'Horoscope',
    colorHex: '#7b5ea7',
    modules: [
      { icon: Star,       label: 'ஜாதகம்',         sublabel: 'Full Horoscope',  href: '/horoscope',           badge: 'TOP' },
      { icon: FileText,   label: 'ஜாதகம் PDF',      sublabel: 'Sanjeevi',        href: '/horoscope/pdf' },
      { icon: Eye,        label: 'ஜாதக பலன்',      sublabel: 'Prediction',      href: '/horoscope/palan' },
      { icon: BookOpen,   label: 'புத்தக ஜாதகம்',  sublabel: 'Book PDF',        href: '/horoscope/book' },
      { icon: Moon,       label: 'நட்சத்திர பலன்', sublabel: 'Star',            href: '/horoscope/star' },
      { icon: Navigation, label: 'கோச்சார பலன்',   sublabel: 'Transit',         href: '/horoscope/transit' },
      { icon: Baby,       label: 'குழந்தை பெயர்',  sublabel: 'Names',           href: '/baby-names',          badge: 'PREMIUM' },
      { icon: Layers,     label: 'ஜாதகம் 4.0',     sublabel: 'Antharam',        href: '/horoscope/antharam',  badge: 'NEW' },
    ],
  },
  {
    title: 'பஞ்சாங்கம் & முகூர்த்தம்',
    titleEn: 'Panchangam',
    colorHex: '#2e7d6b',
    modules: [
      { icon: Clock,       label: 'கல் முகூர்த்தம்',  sublabel: 'Auspicious', href: '/panchangam/muhurtham' },
      { icon: CalendarDays,label: 'மாத பஞ்சாங்கம்',   sublabel: 'Monthly',    href: '/panchangam/monthly',   badge: 'PRO' },
      { icon: Calendar,    label: 'நாள் பஞ்சாங்கம்',  sublabel: 'Daily',      href: '/panchangam/daily',     badge: 'NEW' },
      { icon: Info,        label: 'பஞ்சாங்கம் தகவல்', sublabel: 'Info',       href: '/panchangam/info',      badge: 'NEW' },
    ],
  },
  {
    title: 'திருமண பொருத்தம்',
    titleEn: 'Marriage Matching',
    colorHex: '#b0415e',
    modules: [
      { icon: Heart,       label: 'நட்சத்திர பொருத்தம்', sublabel: 'Star Match',   href: '/matching/star' },
      { icon: GitMerge,    label: 'ஜாதக பொருத்தம்',      sublabel: 'Horoscope',    href: '/matching' },
      { icon: Search,      label: 'விரிவான பொருத்தம்',   sublabel: 'Detailed',     href: '/matching/detailed', badge: 'PRO' },
      { icon: CheckCircle, label: 'பொருத்தம் உண்மை',     sublabel: 'Premium',      href: '/matching/premium' },
    ],
  },
  {
    title: 'எண்கணிதம் & வாஸ்து',
    titleEn: 'Numerology & Vastu',
    colorHex: '#1e6fa8',
    modules: [
      { icon: Hash,    label: 'பெயர் எண்',     sublabel: 'Name Num.',    href: '/numerology/name' },
      { icon: Calendar,label: 'தேதி எண்',       sublabel: 'Date Num.',    href: '/numerology/date' },
      { icon: Timer,   label: 'வயது கணக்கிடு',  sublabel: 'Age Calc.',    href: '/numerology/age',  badge: 'FREE' },
      { icon: Home,    label: 'வாஸ்து நாட்கள்', sublabel: 'Vastu Days',   href: '/vastu/days' },
      { icon: Ruler,   label: 'மனையடி',         sublabel: 'Dimensions',   href: '/vastu/house' },
    ],
  },
  {
    title: 'பிரஸ்னம் & சாஸ்திரம்',
    titleEn: 'Prasnam',
    colorHex: '#a05c1a',
    modules: [
      { icon: HelpCircle, label: 'பிரஸ்னம் ஜாதகம்', sublabel: 'Chart',       href: '/prasnam' },
      { icon: Zap,        label: 'கடாரா பிரஸ்னம்',  sublabel: 'Katara',      href: '/prasnam/katara' },
      { icon: Bird,       label: 'பஞ்சபட்சி',        sublabel: 'Pancha',      href: '/prasnam/panchapakshi' },
      { icon: Feather,    label: 'பஞ்சி பலன் 1',     sublabel: 'Pakshi 1',    href: '/prasnam/pakshi1' },
      { icon: Feather,    label: 'பஞ்சி பலன் 2',     sublabel: 'Pakshi 2',    href: '/prasnam/pakshi2' },
    ],
  },
  {
    title: 'விசேஷ நாட்கள் & விரதங்கள்',
    titleEn: 'Special Days',
    colorHex: '#4a7c59',
    modules: [
      { icon: CircleDot,  label: 'அமாவாசை',           sublabel: 'Amavasai',    href: '/special/amavasai' },
      { icon: CircleDot,  label: 'தரவாசை',             sublabel: 'Tharpanam',   href: '/special/tharpanam' },
      { icon: CircleDot,  label: 'பௌர்ணமி',            sublabel: 'Pournami',    href: '/special/pournami' },
      { icon: Star,       label: 'சஷ்டி',              sublabel: 'Sashti',      href: '/special/sashti' },
      { icon: Flame,      label: 'கந்த விரதம்',        sublabel: 'Kantha',      href: '/special/kantha' },
      { icon: Star,       label: 'கிருத்திகை',         sublabel: 'Krithigai',   href: '/special/krithigai' },
      { icon: Sun,        label: 'உத்திரம்',            sublabel: 'Uthiram',     href: '/special/uthiram',   badge: 'NEW' },
      { icon: Gift,       label: 'சித்திரைப்பிறப்பு',  sublabel: 'Tamil NY',    href: '/special/newyear',   badge: 'NEW' },
      { icon: BookMarked, label: 'தமிழ்ப் பஞ்சாங்கம்', sublabel: 'Tamil Panch', href: '/special/tamil',     badge: 'NEW' },
      { icon: Flame,      label: 'ஜுவாலினி',           sublabel: 'Jwalini',     href: '/special/jwalini' },
    ],
  },
]
