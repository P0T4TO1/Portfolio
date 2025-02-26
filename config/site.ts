export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Jaret Garcia Dev',
  description: 'Portfolio by Jaret Garcia',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Proyectos',
      href: '#projects',
    },
    {
      label: 'Skills',
      href: '#skills',
    },
    {
      label: 'Sobre mi',
      href: '#about',
    },
    {
      label: 'Contacto',
      href: '#contact',
    },
  ],
  navMenuItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Proyectos',
      href: '#projects',
    },
    {
      label: 'Skills',
      href: '#skills',
    },
    {
      label: 'Contacto',
      href: '#contact',
    },
    {
      label: 'Sobre mi',
      href: '#about',
    },
  ],
  links: {
    github: 'https://github.com/P0T4TO1',
    linkedin: 'https://www.linkedin.com/in/jaret-garcia/',
  },
};

export const skillsURLs = {
  Backend: [
    {
      alt: 'node',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/c_pad,w_1052,h_1052/v1740539580/portfolio%20images/ehjvlyzc82fsle3wfdvj.png',
      label: 'Node',
    },
    {
      alt: 'express',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/c_pad,w_1052,h_1052/v1740539611/portfolio%20images/ufssuj3sxozurfe4bcny.png',
      label: 'Express',
    },
    {
      alt: 'typescript',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/c_pad,w_1052,h_1052/v1740539572/portfolio%20images/fdfnylsvpeu6s5fi1mga.png',
      label: 'TypeScript',
    },
    {
      alt: 'next',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/v1740539635/portfolio%20images/eo4ttalbnfwvuwbex0tr.svg',
      label: 'Next',
    },
    {
      alt: 'php',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/c_pad,w_1052,h_1052/v1740539641/portfolio%20images/sisrzodl1fai1jb2vacf.png',
      label: 'PHP',
    },
    {
      alt: 'laravel',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/v1740539649/portfolio%20images/e3h8achainppqsmwbm9v.png',
      label: 'Laravel',
    },
    {
      alt: 'mysql',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/v1740543811/mysql-logo-pure_ugmkau.svg',
      label: 'MySQL',
    },
    {
      alt: 'postgres',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/v1740539666/portfolio%20images/m9dcgrpwtokj7ocdjpq2.png',
      label: 'Postgres',
    },
    {
      alt: 'mongo',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/v1740539685/portfolio%20images/zignntrp9ifqyqiq6mbr.svg',
      label: 'Mongo',
      bgColor: 'bg-black',
    },
    {
      alt: 'prisma',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/v1740539709/portfolio%20images/nxwxl9jbg4p4ux3upgfu.png',
      label: 'Prisma',
    },
  ],
  Frontend: [
    {
      alt: 'html',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/c_pad,w_1052,h_1052/v1740539473/portfolio%20images/pcmfo7binxxdajewcl7w.png',
      label: 'HTML',
    },
    {
      alt: 'css',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/c_pad,w_1052,h_1052/v1740539499/portfolio%20images/fh8hg0hewbyy2ocqwllh.png',
      label: 'CSS',
    },
    {
      alt: 'js',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/v1740539517/portfolio%20images/w9ctw75nd2qpma3rmakh.png',
      label: 'JavaScript',
    },
    {
      alt: 'react',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/c_pad,w_1052,h_1052/v1740539530/portfolio%20images/qdwwtepoqqp6i1mifyb8.png',
      label: 'React',
    },
    {
      alt: 'tailwind',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/c_pad,w_1052,h_1052/v1740539541/portfolio%20images/y3jrnsz4g90ted1xu0df.png',
      label: 'Tailwind',
    },
    {
      alt: 'bootstrap',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/c_pad,w_1052,h_1052/v1740539548/portfolio%20images/gocdobxfhuyouoim0jf2.png',
      label: 'Bootstrap',
    },
  ],
  Aprendiendo: [
    {
      alt: 'angular',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/v1740539709/portfolio%20images/iuqwhszm0xngfuoafeyg.png',
      label: 'Angular',
    },
    {
      alt: 'astro',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/v1740543670/astro-framework_ygf70q.svg',
      label: 'Astro',
    },
    {
      alt: 'phyton',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/v1740539744/portfolio%20images/ruifkex6xmnwfy2wdz28.png',
      label: 'Phyton',
    },
    {
      alt: 'django',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/c_pad,w_1052,h_1052/v1740539754/portfolio%20images/nvq56swm0xhc2isqwt6b.png',
      label: 'Django',
    },
    {
      alt: 'docker',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/v1740539777/portfolio%20images/n9fwgahwnjlvj7trpe6m.png',
      label: 'Docker',
    },
  ],
  Herramientas: [
    {
      alt: 'git',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/v1740539785/portfolio%20images/uuklrudngbcf9tllyz28.png',
      label: 'Git',
    },
    {
      alt: 'github',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/v1740539792/portfolio%20images/rtoijgxg8ksxhgtmpzj3.png',
      label: 'GitHub',
    },
    {
      alt: 'reactnative',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/v1740539800/portfolio%20images/kkocvmuamxqfoodlzvlm.svg',
      label: 'React Native',
    },
    {
      alt: 'vercel',
      src: 'https://res.cloudinary.com/dugkzbxjh/image/upload/v1740543779/logo-vercel_mzyih9.svg',
      label: 'Vercel',
    },
  ],
};
