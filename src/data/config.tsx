import { FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaEnvelope, FaFacebook, FaPhone } from 'react-icons/fa';
export const profileData = {
  name: "APEX RACING TEAM",
  tagline: "Racing • Engineering • Technology",
  avatarUrl: "/logo.png",
  status: "TRACK READY",
  racingNumber: "01",
  quote: "13 Cars. 8 Years. Still Racing.",
  achievements: [
    { icon: "🏆", logoUrl: "/ever.png", count: "2×", title: "EVER Egypt" },
    { icon: "🏆", logoUrl: "/gevc.png", count: "1×", title: "GEVC" },
    { icon: "🥈", logoUrl: "/shell.png", count: "1×", title: "Shell Eco-Marathon" },
    { icon: "🥉", logoUrl: "/shell.png", count: "1×", title: "Shell Eco-Marathon" },
    { icon: "🏎️", logoUrl: "/formula.png", count: "5×", title: "Formula Student UK" },
  ]
};

// Set to null to hide the featured link for now
export const featuredLink: any = null;

const TechneIcon = () => (
  <img src="/techne.webp" alt="Techne" className="h-6 w-auto object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" />
);

export const socialLinks = [
  {
    title: "Techne Summit",
    url: "https://technesummit.com/2026",
    icon: TechneIcon,
    color: "group-hover:text-blue-500 bg-black/40",
  },
  {
    title: "Facebook",
    url: "https://www.facebook.com/ApexRTe",
    icon: FaFacebook,
    color: "group-hover:text-blue-600",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/apexrte/",
    icon: FaInstagram,
    color: "group-hover:text-pink-500",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/apexrt-ev/ ",
    icon: FaLinkedin,
    color: "group-hover:text-blue-500",
  },
  {
    title: "Call Us",
    url: "tel:+201290067726",
    icon: FaPhone,
    color: "group-hover:text-green-400",
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/@ApexRacingTeamEV",
    icon: FaYoutube,
    color: "group-hover:text-racing-red",
  },
  {
    title: "Email",
    url: "mailto:apexracingteamhti@gmail.com",
    icon: FaEnvelope,
    color: "group-hover:text-racing-yellow",
  },
  {
    title: "WhatsApp",
    url: "https://wa.me/1272704632",
    icon: FaWhatsapp,
    color: "group-hover:text-green-500",
  }
];
