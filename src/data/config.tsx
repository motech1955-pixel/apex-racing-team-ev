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

export const socialLinks = [
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

// Sponsors, Partners & Events
export const sponsorsList = [
  {
    name: "EGYPTAIR",
    logo: "/sponsors/egyptair.png",
  },
  {
    name: "AOI - الهيئة العربية للتصنيع",
    logo: "/sponsors/aoi.png",
  },
  {
    name: "SOLIDWORKS",
    logo: "/sponsors/solidworks.png",
  },
  {
    name: "Ansys",
    logo: "/sponsors/ansys.png",
  },
  {
    name: "MATLAB",
    logo: "/sponsors/matlab.png",
  },
  {
    name: "AUTOTECH",
    logo: "/sponsors/autotech.png",
  },
  {
    name: "Techne Summit",
    logo: "/sponsors/techne.png",
  },
  {
    name: "TCF",
    logo: "/sponsors/tcf.png",
  },
];

// Team Information & Full Track Journey (From Team Presentation)
export const teamInfo = {
  title: "WHO WE ARE",
  subtitle: "Higher Technological Institute (HTI) • 10th of Ramadan City",
  description: "Apex Racing Team EV is an Egyptian student motorsport team founded in 2018 at HTI. Since inception, we have built more than 13 competitive Electric Vehicles across 4 international and regional competitions (EVER, SEM, FS, GVEC).",
  mission: "To compete fiercely at the highest international level so we can transfer cutting-edge engineering expertise and empower future generations.",
  vision: "To spearhead automotive innovation, contribute directly to Egypt's Vision 2030, and pioneer the development of self-driving autonomous electric vehicles.",
  stats: [
    { value: "13+", label: "Vehicles Built", detail: "Urban Concept & Formula Student" },
    { value: "8+", label: "Years on Track", detail: "Founded in 2018" },
    { value: "4", label: "Competitions", detail: "EVER • SEM • FS • GEVC" },
    { value: "1st", label: "Worldwide & Local", detail: "Podiums & Victories" },
  ],
  journey: [
    {
      year: "2018",
      highlight: "Inception & First Podiums",
      events: [
        { title: "EVER Egypt", detail: "3rd Place Overall & 1st Business Plan" },
      ]
    },
    {
      year: "2019",
      highlight: "National Champions",
      events: [
        { title: "EVER Egypt", detail: "🏆 1st Place Overall Champion" },
        { title: "Formula Student UK", detail: "15th Place Overall" },
      ]
    },
    {
      year: "2020",
      highlight: "Endurance & Strategy Masters",
      events: [
        { title: "EVER Egypt", detail: "1st Business Plan & 1st Endurance" },
        { title: "Formula Student UK", detail: "🥉 3rd out of 32 International Teams" },
      ]
    },
    {
      year: "2021",
      highlight: "Global Supremacy",
      events: [
        { title: "GEVC", detail: "🏆 1st Place Worldwide" },
        { title: "Formula Student UK", detail: "🥇 1st in Cost & Manufacturing" },
      ]
    },
    {
      year: "2022",
      highlight: "The Quadruple Victory",
      events: [
        { title: "EVER Egypt", detail: "🏆 1st Overall, 1st Drag, 1st Autocross & Most Efficient" },
      ]
    },
    {
      year: "2023",
      highlight: "Shell Eco-marathon Debut",
      events: [
        { title: "Shell Eco-marathon", detail: "🥈 2nd Place Podium" },
      ]
    },
    {
      year: "2024",
      highlight: "Defending the Crown",
      events: [
        { title: "EVER Egypt", detail: "🏆 1st Place Overall" },
        { title: "Formula Student UK", detail: "14th in Concept Design" },
      ]
    },
    {
      year: "2026",
      highlight: "Silverstone Excellence",
      events: [
        { title: "Formula Student UK", detail: "🏎️ 7th Overall & 🥈 2nd in Cost & Manufacturing" },
      ]
    },
    {
      year: "2027?",
      highlight: "The Next Era",
      events: [
        { title: "Autonomous EV & Future Racing", detail: "⚡ To be written by us..." },
      ]
    },
  ]
};
