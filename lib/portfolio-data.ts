export const profile = {
  name: 'Yeswanth Obillaneni',
  roles: ['React Developer', 'Digital Marketing', 'IT Project Manager'],
  location: 'Eluru, Andhra Pradesh',
  whatsapp: 'https://wa.me/919550690091',
  email: 'obillaneni.yeswanth5@gmail.com',
  github: 'https://github.com/',
  resume: '/Yeswanth_Resume.pdf',
  tagline:
    'I build websites that get customers, run ads that get leads, and lead teams that deliver on time.',
  intro:
    'React developer and digital marketer with hands-on experience managing 40-member teams and international clients. I bridge the gap between clean code, conversion-focused design, and on-time delivery.',
}

export type Service = {
  title: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    title: 'React Website Development',
    description:
      'Fast, responsive websites built with React and Next.js, delivered quickly and optimized for real business results.',
    points: ['Responsive, mobile-first builds', 'SEO & performance tuned', 'Contact forms & lead capture'],
  },
  {
    title: 'Digital Marketing & Ads',
    description:
      'Meta Ads strategy, content planning, and campaign management focused on followers, leads, and measurable ROI.',
    points: ['Meta & Instagram Ads', '30-day content calendars', 'Lead generation funnels'],
  },
  {
    title: 'IT Project Management',
    description:
      'End-to-end delivery for teams and clients — from scoping and planning to shipping on schedule.',
    points: ['Led 40-member teams', 'International client delivery', 'Agile sprint planning'],
  },
]

export type Project = {
  title: string
  category: string
  description: string
  image: string
  link: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: 'Ratnagiri Infologix',
    category: 'Company Website',
    description:
      'Responsive React website for an IT services company with services showcase, contact form, and a mobile-first design.',
    image: '/images/project-company.png',
    link: 'https://rathnagiriinfologix.site.je',
    tags: ['HTML', 'CSS3', 'Bootstrap', 'Responsive', 'PHP', 'Lead Form'],
  },
  {
    title: 'Admin Dashboard',
    category: 'Internal Tool',
    description:
      'Admin panel for data management and user control, built to streamline internal team operations.',
    image: '/images/project-dashboard.png',
    link: 'https://adminrathnagiriinfologix.site.je',
    tags: ['PHP', 'MySQL', 'Dashboard', 'CRUD'],
  },
  {
    title: 'Rysomultimedia',
    category: 'Agency Site',
    description:
      'Creative agency website with a portfolio gallery and a strong lead-generation focus.',
    image: '/images/project-agency.png',
    link: 'https://rysomultimedia.html-5.me',
    tags: ['Web Design', 'Portfolio', 'Branding'],
  },
  {
    title: 'Yeswanth UI Sesigner Portfolio',
    category: 'Design System',
    description:
      'A collection of reusable React UI components and landing page templates for fast client delivery.',
    image: '/images/project-uikit.png',
    link: 'https://yeswanth-ui.epizy.com',
    tags: ['HTML', 'CSS3', 'Bootstrap', 'Responsive', 'UI Kit', 'Templates'],
  },
  {
    title: 'Restaurant Social Growth',
    category: 'Marketing Case Study',
    description:
      '30-day AI content plan plus Meta Ads strategy. Goal: 1,000 followers and 200 leads — a sample case study.',
    image: '/images/project-marketing.png',
    link: '#contact',
    tags: ['Meta Ads', 'Content', 'Strategy'],
  },
]

export const stats = [
  { value: '40+', label: 'Team members led' },
  { value: '15+', label: 'Projects delivered' },
  { value: '5', label: 'Day avg. website turnaround' },
  { value: 'Global', label: 'Client experience' },
]

