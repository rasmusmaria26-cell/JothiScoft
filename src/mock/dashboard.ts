// MOCK
import { Star, FileText, Eye, BookOpen, Moon, Navigation, Baby, Layers, Calendar, CalendarDays, Clock, Info, Heart, GitMerge, Search, CheckCircle, Hash, Timer, Home, Ruler, HelpCircle, Zap, Bird, Feather, Droplets, Circle, Flame, Sparkles, Sun, Gift, BookMarked, LucideIcon } from 'lucide-react';

export interface ModuleCardProps {
  icon: LucideIcon;
  label: string;          // Tamil label
  sublabel?: string;      // English sublabel (optional)
  badge?: 'NEW' | 'PRO' | 'PREMIUM' | 'FREE';
  categoryColor: string;  // CSS var or hex
  href: string;
  gradient: string;       // tailwind gradient classes or inline style
}

export interface CategoryData {
  title: string;
  emoji: string;
  color: string;
  modules: Omit<ModuleCardProps, 'categoryColor'>[];
  gradient: string;
}

export const categoryData: CategoryData[] = [
  {
    title: "ஜாதகம் & பலன்கள் (Horoscope)",
    emoji: "✨",
    color: "var(--cat-horoscope)",
    gradient: "linear-gradient(90deg, rgba(123,94,167,0.08) 0%, transparent 100%)",
    modules: [
      { label: "ஜாதகம்", sublabel: "Full Horoscope", icon: Star, href: "/horoscope", gradient: "radial-gradient(circle, rgba(123,94,167,0.25), rgba(123,94,167,0.05))" },
      { label: "ஜாதகம் PDF", sublabel: "Sanjeevi PDF", icon: FileText, href: "/horoscope/pdf", gradient: "radial-gradient(circle, rgba(123,94,167,0.25), rgba(123,94,167,0.05))" },
      { label: "ஜாதக பலன்", sublabel: "Brief Prediction", icon: Eye, href: "/horoscope/palan", gradient: "radial-gradient(circle, rgba(123,94,167,0.25), rgba(123,94,167,0.05))" },
      { label: "புத்தக ஜாதகம்", sublabel: "Book Format PDF", icon: BookOpen, href: "/horoscope/book", gradient: "radial-gradient(circle, rgba(123,94,167,0.25), rgba(123,94,167,0.05))" },
      { label: "நட்சத்திர பலன்", sublabel: "Star Predictions", icon: Moon, href: "/horoscope/star", gradient: "radial-gradient(circle, rgba(123,94,167,0.25), rgba(123,94,167,0.05))" },
      { label: "கோச்சார பலன்", sublabel: "Transit Palan", icon: Navigation, href: "/horoscope/transit", gradient: "radial-gradient(circle, rgba(123,94,167,0.25), rgba(123,94,167,0.05))" },
      { label: "குழந்தை பெயர்", sublabel: "Baby Names", icon: Baby, href: "/baby-names", badge: "PREMIUM", gradient: "radial-gradient(circle, rgba(123,94,167,0.25), rgba(123,94,167,0.05))" },
      { label: "ஜாதகம் 4.0", sublabel: "Antharam", icon: Layers, href: "/horoscope/antharam", badge: "NEW", gradient: "radial-gradient(circle, rgba(123,94,167,0.25), rgba(123,94,167,0.05))" },
    ]
  },
  {
    title: "பஞ்சாங்கம் & முகூர்த்தம் (Panchangam)",
    emoji: "🌙",
    color: "var(--cat-panchangam)",
    gradient: "linear-gradient(90deg, rgba(46,125,107,0.08) 0%, transparent 100%)",
    modules: [
      { label: "கல் முகூர்த்தம்", sublabel: "Auspicious Times", icon: Calendar, href: "/panchangam/muhurtham", gradient: "radial-gradient(circle, rgba(46,125,107,0.25), rgba(46,125,107,0.05))" },
      { label: "மாத பஞ்சாங்கம்", sublabel: "Monthly PRO", icon: CalendarDays, href: "/panchangam/monthly", badge: "PRO", gradient: "radial-gradient(circle, rgba(46,125,107,0.25), rgba(46,125,107,0.05))" },
      { label: "நாள் பஞ்சாங்கம்", sublabel: "Daily PRO", icon: Clock, href: "/panchangam/daily", badge: "NEW", gradient: "radial-gradient(circle, rgba(46,125,107,0.25), rgba(46,125,107,0.05))" },
      { label: "பஞ்சாங்கம் தகவல்", sublabel: "Panchangam Info", icon: Info, href: "/panchangam/info", badge: "NEW", gradient: "radial-gradient(circle, rgba(46,125,107,0.25), rgba(46,125,107,0.05))" },
    ]
  },
  {
    title: "திருமண பொருத்தம் (Marriage Matching)",
    emoji: "💍",
    color: "var(--cat-marriage)",
    gradient: "linear-gradient(90deg, rgba(176,65,94,0.08) 0%, transparent 100%)",
    modules: [
      { label: "நட்சத்திர பொருத்தம்", sublabel: "Star Matching", icon: Heart, href: "/matching/star", gradient: "radial-gradient(circle, rgba(176,65,94,0.25), rgba(176,65,94,0.05))" },
      { label: "ஜாதக பொருத்தம்", sublabel: "Horoscope Match", icon: GitMerge, href: "/matching", gradient: "radial-gradient(circle, rgba(176,65,94,0.25), rgba(176,65,94,0.05))" },
      { label: "ஜாதக பொருத்தம்", sublabel: "Detailed", icon: Search, href: "/matching/detailed", badge: "PRO", gradient: "radial-gradient(circle, rgba(176,65,94,0.25), rgba(176,65,94,0.05))" },
      { label: "பொருத்தம் உண்மை", sublabel: "True Matching", icon: CheckCircle, href: "/matching/premium", gradient: "radial-gradient(circle, rgba(176,65,94,0.25), rgba(176,65,94,0.05))" },
    ]
  },
  {
    title: "எண்கணிதம் & வாஸ்து (Numerology & Vastu)",
    emoji: "🔢",
    color: "var(--cat-numerology)",
    gradient: "linear-gradient(90deg, rgba(30,111,168,0.08) 0%, transparent 100%)",
    modules: [
      { label: "பெயர் எண்", sublabel: "Name Numerology", icon: Hash, href: "/numerology/name", gradient: "radial-gradient(circle, rgba(30,111,168,0.25), rgba(30,111,168,0.05))" },
      { label: "தேதி எண்", sublabel: "Date Numerology", icon: Calendar, href: "/numerology/date", gradient: "radial-gradient(circle, rgba(30,111,168,0.25), rgba(30,111,168,0.05))" },
      { label: "வயது கணக்கிடு", sublabel: "Age Calculator", icon: Timer, href: "/numerology/age", badge: "FREE", gradient: "radial-gradient(circle, rgba(30,111,168,0.25), rgba(30,111,168,0.05))" },
      { label: "வாஸ்து நாட்கள்", sublabel: "Vastu Days", icon: Home, href: "/vastu/days", gradient: "radial-gradient(circle, rgba(30,111,168,0.25), rgba(30,111,168,0.05))" },
      { label: "மனையடி", sublabel: "Vastu Dimensions", icon: Ruler, href: "/vastu/house", gradient: "radial-gradient(circle, rgba(30,111,168,0.25), rgba(30,111,168,0.05))" },
    ]
  },
  {
    title: "பிரஸ்னம் & சாஸ்திரம் (Prasnam)",
    emoji: "🔮",
    color: "var(--cat-prasnam)",
    gradient: "linear-gradient(90deg, rgba(160,92,26,0.08) 0%, transparent 100%)",
    modules: [
      { label: "பிரஸ்னம் ஜாதகம்", sublabel: "Prasnam Chart", icon: HelpCircle, href: "/prasnam", gradient: "radial-gradient(circle, rgba(160,92,26,0.25), rgba(160,92,26,0.05))" },
      { label: "கடாரா பிரஸ்னம்", sublabel: "Katara Prasnam", icon: Zap, href: "/prasnam/katara", gradient: "radial-gradient(circle, rgba(160,92,26,0.25), rgba(160,92,26,0.05))" },
      { label: "பஞ்சபட்சி", sublabel: "Pancha Pakshi", icon: Bird, href: "/prasnam/panchapakshi", gradient: "radial-gradient(circle, rgba(160,92,26,0.25), rgba(160,92,26,0.05))" },
      { label: "பஞ்சி பலன் 1", sublabel: "Pakshi Palan 1", icon: Feather, href: "/prasnam/pakshi1", gradient: "radial-gradient(circle, rgba(160,92,26,0.25), rgba(160,92,26,0.05))" },
      { label: "பஞ்சி பலன் 2", sublabel: "Pakshi Palan 2", icon: Feather, href: "/prasnam/pakshi2", gradient: "radial-gradient(circle, rgba(160,92,26,0.25), rgba(160,92,26,0.05))" },
    ]
  },
  {
    title: "விசேஷ நாட்கள் & விரதங்கள் (Special Days)",
    emoji: "🌿",
    color: "var(--cat-special)",
    gradient: "linear-gradient(90deg, rgba(74,124,89,0.08) 0%, transparent 100%)",
    modules: [
      { label: "அமர்ந்திருத்திதம்", sublabel: "Amavasai", icon: Moon, href: "/special/amavasai", gradient: "radial-gradient(circle, rgba(74,124,89,0.25), rgba(74,124,89,0.05))" },
      { label: "தரவாசை", sublabel: "Tharpanam", icon: Droplets, href: "/special/tharpanam", gradient: "radial-gradient(circle, rgba(74,124,89,0.25), rgba(74,124,89,0.05))" },
      { label: "பௌர்ணமி", sublabel: "Pournami", icon: Circle, href: "/special/pournami", gradient: "radial-gradient(circle, rgba(74,124,89,0.25), rgba(74,124,89,0.05))" },
      { label: "சஷ்டி", sublabel: "Sashti", icon: Star, href: "/special/sashti", gradient: "radial-gradient(circle, rgba(74,124,89,0.25), rgba(74,124,89,0.05))" },
      { label: "கந்த விரதம்", sublabel: "Kantha Viratham", icon: Flame, href: "/special/kantha", gradient: "radial-gradient(circle, rgba(74,124,89,0.25), rgba(74,124,89,0.05))" },
      { label: "கிருத்திகை", sublabel: "Krithigai", icon: Sparkles, href: "/special/krithigai", gradient: "radial-gradient(circle, rgba(74,124,89,0.25), rgba(74,124,89,0.05))" },
      { label: "உத்திரம்", sublabel: "Uthiram", icon: Sun, href: "/special/uthiram", badge: "NEW", gradient: "radial-gradient(circle, rgba(74,124,89,0.25), rgba(74,124,89,0.05))" },
      { label: "சித்திரைப்பிறப்பு", sublabel: "Tamil New Year", icon: Gift, href: "/special/newyear", badge: "NEW", gradient: "radial-gradient(circle, rgba(74,124,89,0.25), rgba(74,124,89,0.05))" },
      { label: "தமிழ்ப் பஞ்சாங்கம்", sublabel: "Tamil Panchangam", icon: BookMarked, href: "/special/tamil", badge: "NEW", gradient: "radial-gradient(circle, rgba(74,124,89,0.25), rgba(74,124,89,0.05))" },
      { label: "ஜுவாலினி", sublabel: "Jwalini", icon: Flame, href: "/special/jwalini", gradient: "radial-gradient(circle, rgba(74,124,89,0.25), rgba(74,124,89,0.05))" },
    ]
  }
];
