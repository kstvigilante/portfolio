import type {
  Achievement,
  Education,
  NavItem,
  Profile,
  Project,
  RecentProject,
  Role,
  SkillGroup,
} from './types.ts';

export const profile: Profile = {
  name: 'Kunwar Siddharth Thakur',
  shortName: 'Siddharth',
  role: 'Senior Frontend Engineer',
  location: 'Noida, India',
  email: 'kst85077@gmail.com',
  phone: '+91 9654210850',
  resumeUrl: '/Kunwar_Siddharth_Thakur_Resume.pdf',
  yearsOfExperience: 8,
  summary:
    'Senior Frontend Engineer with 8 years of building web and mobile products in React and TypeScript — from crypto-backed lending platforms to NFT marketplaces. I design reusable component systems, tame complex state, and ship features that measurably move the business.',
  // Add GitHub / LinkedIn here and they will appear in the hero and contact sections.
  links: [],
};

export const navItems: readonly NavItem[] = [
  { id: 'recent', label: 'Recent' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
];

export const recentProject: RecentProject = {
  name: 'SALT Lending',
  tagline: 'Crypto-backed loans',
  summary:
    'SALT lets borrowers use their crypto as collateral for cash and stablecoin loans. I develop and maintain the frontend across all three of its products — the web Borrower Portal, the iOS & Android app, and the internal Admin Portal.',
  contributions: [
    'Borrower-facing features and ongoing UI improvements',
    'Financed Interest Loans, Anchorage Digital integration and payout address whitelisting',
    'Brought key Borrower Portal capabilities to the mobile app',
    'Unit, integration and E2E test suites (Jest, React Testing Library, Cypress)',
  ],
  stack: ['React', 'TypeScript', 'Redux', 'GraphQL', 'React Native', 'Cypress'],
  surfaces: [
    {
      name: 'Borrower Portal',
      platform: 'Web app',
      description: 'Where borrowers apply for, manage and repay their crypto-backed loans.',
      stack: ['React', 'TypeScript', 'Redux'],
      link: { href: 'https://borrower.saltlending.com/', label: 'borrower.saltlending.com' },
    },
    {
      name: 'SALT Mobile App',
      platform: 'iOS & Android',
      description: 'Key Borrower Portal capabilities brought to iOS and Android.',
      stack: ['React Native', 'TypeScript'],
      link: {
        href: 'https://apps.apple.com/us/app/salt-crypto-loans/id1383851676',
        label: 'View on the App Store',
      },
    },
    {
      name: 'Admin Portal',
      platform: 'Internal tool',
      description:
        "SALT's internal administrative application — maintained and enhanced, with bug fixes that improved stability and usability.",
      stack: ['React', 'TypeScript'],
    },
  ],
};

export const projects: readonly Project[] = [
  {
    id: 'ach',
    title: 'ACH Payments Overhaul',
    client: 'SALT Lending',
    summary:
      'Rebuilt payment handling and automation so borrowers pay successfully the first time and ops stops chasing exceptions.',
    highlights: ['50% fewer manual ACH reviews', '40% fewer payment-related support tickets'],
    tags: ['Payments', 'Automation', 'React'],
    metric: { value: '95%+', label: 'successful payment rate' },
  },
  {
    id: 'anchorage',
    title: 'Anchorage Digital Integration',
    client: 'SALT Lending',
    summary:
      'Integrated Anchorage Digital into the product, unlocking crypto-backed lending for borrowers in the New York market.',
    highlights: ['Opened a new regulated market', 'Custody flows surfaced in the borrower UI'],
    tags: ['Integrations', 'Compliance', 'TypeScript'],
    metric: { value: 'NY', label: 'market unlocked' },
  },
  {
    id: 'financed-interest',
    title: 'Financed Interest Loan',
    client: 'SALT Lending',
    summary:
      'Shipped a third repayment option that lets borrowers finance their interest — directly contributing to loan book growth.',
    highlights: ['New loan product, end to end', 'Driven by borrower demand'],
    tags: ['Product', 'Fintech', 'Redux'],
    metric: { value: '3rd', label: 'payment option' },
  },
  {
    id: 'whitelisting',
    title: 'Payout Address Whitelisting',
    client: 'SALT Lending',
    summary:
      'Automated, secure verification of stablecoin payout addresses — faster disbursements and withdrawals with less manual work for Loan Ops.',
    highlights: ['Stronger transaction security', 'Faster loan disbursements'],
    tags: ['Security', 'Stablecoins', 'Web3'],
  },
  {
    id: 'pixelpark',
    title: 'PixelPark NFT Marketplace',
    client: 'PixelPark',
    summary:
      'Marketplace flows for listings, English and Dutch auctions, offers, collection offers and bidding — wired to Ethereum wallets and smart contracts.',
    highlights: [
      'MetaMask, WalletConnect & Coinbase Wallet',
      'Contract interactions via Web3.js and Ethers.js',
    ],
    tags: ['Ethereum', 'Ethers.js', 'Web3.js', 'React'],
  },
];

export const roles: readonly Role[] = [
  {
    company: 'Rapid Innovation',
    title: 'Senior Frontend Engineer',
    period: 'Jul 2019 — Present',
    location: 'Noida, India',
    current: true,
    summary:
      'Lead frontend work on fintech and Web3 products — owning features from requirements to release, reviewing code and mentoring engineers.',
    points: [
      'Designed and maintained production React + TypeScript apps with an emphasis on reusable components and maintainable UI architecture.',
      'Managed complex state and data flows with Redux; integrated REST and GraphQL APIs.',
      'Built and maintained the SALT Lending Borrower Portal, Admin Portal and React Native mobile app.',
      'Delivered Financed Interest Loans, Anchorage Digital integration, ACH payment optimisation and payout address whitelisting.',
      'Built NFT marketplace functionality for PixelPark with wallet and smart-contract integrations.',
      'Wrote unit, integration and E2E suites with Jest, React Testing Library and Cypress (~90% coverage).',
      'Contributed to technical decisions and code reviews; mentored fellow developers. AI-assisted workflow with ChatGPT and Claude Code.',
    ],
  },
  {
    company: 'Innotical Solutions',
    title: 'Software Intern',
    period: '2018 — 2019',
    location: 'Noida, India',
    summary: 'Smart contract development on EOS and Ethereum.',
    points: [
      'Developed and maintained smart contracts implementing on-chain business logic and dApp functionality.',
      'Supported blockchain transactions, asset management and on-chain operations.',
      'Implemented, tested and deployed contracts with blockchain tooling.',
    ],
  },
];

export const skillGroups: readonly SkillGroup[] = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS'] },
  {
    title: 'UI & Styling',
    items: [
      'Tailwind CSS',
      'styled-components',
      'Material UI',
      'Bootstrap',
      'Design systems',
      'Responsive design',
    ],
  },
  { title: 'State & Forms', items: ['Redux', 'Formik', 'Yup'] },
  { title: 'Data', items: ['REST', 'GraphQL', 'Frontend architecture'] },
  {
    title: 'Testing',
    items: ['Jest', 'React Testing Library', 'Cypress', 'Unit & integration', 'E2E'],
  },
  {
    title: 'Web3',
    items: ['Ethereum', 'EOS', 'Ethers.js', 'Web3.js', 'Wallet integrations', 'Smart contracts'],
  },
  { title: 'Mobile & AI', items: ['React Native', 'Claude Code', 'ChatGPT'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
];

export const achievements: readonly Achievement[] = [
  {
    title: 'Team lead',
    body: 'Led a cross-functional team of frontend, backend and smart-contract engineers — coordinating work, reviewing code and landing milestones on time.',
  },
  {
    title: 'End-to-end ownership',
    body: 'Owned features from requirement analysis and technical planning through development, testing and delivery.',
  },
  {
    title: 'Epic owner',
    body: 'Managed Jira epics and features: requirement breakdown, task allocation and tracking delivery.',
  },
  {
    title: 'Client-facing',
    body: 'Worked directly with clients and stakeholders to turn business needs into technical solutions.',
  },
  {
    title: 'Product partner',
    body: 'Partnered with product and design to find improvements and raise the overall user experience.',
  },
  {
    title: 'Employee of the Month',
    body: 'Recognised for contributions, performance and commitment to project delivery.',
  },
];

export const education: readonly Education[] = [
  {
    degree: 'B.Tech, Computer Science & Engineering',
    school: 'Galgotias University',
    year: '2018',
    location: 'Greater Noida',
  },
];
