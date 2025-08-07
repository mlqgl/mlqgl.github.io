import { IGalleryImage } from '~/types';

export interface ISectionCase {
  title: string;
  description: string;
  description2: string;

  problemsSolved: string[];
  uniqueFeatures: string[];
  interestingCases: string[];

  quote: string;

  badges: string[];
  gallery: IGalleryImage[];
}

export const casesData: ISectionCase[] = [{
  title: 'Project: B2BCards (Cardpay)',
  description: 'White-label Card Issuance Platform',
  description2: 'B2BCards is a white-label platform that enables businesses to issue branded physical and virtual payment cards. The solution offers a seamless integration via REST API and a feature-rich dashboard, allowing clients to manage card issuance, user onboarding, and transactions under their own brand identity.',
  badges: [
    'API design and documentation',
    'Onboarding flow architecture',
    'White-label UI configuration',
    'Integration with KYC and card processors',
    'Role-based access control',
    'Client onboarding and UAT assistance'
  ],
  problemsSolved: [
    'Reduced time-to-market for launching branded financial products',
    'Simplified technical integration with banking infrastructure',
    'Eliminated manual client onboarding through automation'
  ],
  uniqueFeatures : [
    'Fully automated KYC and onboarding pipeline',
    'White-label architecture with customisable branding',
    'Unified API and dashboard for real-time card management'
  ],
  interestingCases: [
    'Integrated a fintech startup within 48 hours using rapid onboarding tools',
    'Enabled a loyalty platform to issue co-branded reward cards without any banking licenses',
    'Helped a SaaS company offer employee expense cards with custom spending rules'
  ],
  quote: 'B2BCards allowed us to launch our branded cards in days, not months. The integration was smooth, and the onboarding experience was incredibly fast. It’s like having a full banking product without the overhead.',
  gallery: [{
    src: '/img/b2bcards/b2bcards_thumbnail.png',
    alt: 'Thumbnail'
  }, {
    src: '/img/b2bcards/b2bcards_slide_01.jpg',
    alt: 'Slide 01'
  }, {
    src: '/img/b2bcards/b2bcards_slide_02.jpg',
    alt: 'Slide 02'
  }, {
    src: '/img/b2bcards/b2bcards_slide_03.jpg',
    alt: 'Slide 03'
  }, {
    src: '/img/b2bcards/b2bcards_slide_04.jpg',
    alt: 'Slide 04'
  }]
}, {
  title: 'Extreme waves',
  description: 'Motorsports News & Insights Portal',
  description2: 'Extreme Waves is a digital media platform dedicated to the world of automotive and motorsport culture. It delivers up-to-date coverage on races, car and bike reviews, track analyses, and exclusive event reports — all in one engaging, mobile-optimized portal.',
  badges: [
    'Information architecture and content modeling',
    'Custom CMS development',
    'Integration with external event data sources',
    'Content filtering and search system',
    'SEO optimization and structured data',
    'Automated publishing pipeline',
    'Performance optimization and QA'
  ],
  problemsSolved: [
    'Aggregates fragmented motorsport news into a single, user-friendly platform',
    'Provides enthusiasts with expert-level reviews and in-depth track breakdowns',
    'Bridges the gap between casual fans and professional racing communities'
  ],
  uniqueFeatures : [
    'Dynamic content system with rich media formats (videos, galleries, 3D car views)',
    'Interactive race calendar and live event coverage',
    'SEO-optimized article engine for better reach and discoverability'
  ],
  interestingCases: [
    'Covered real-time updates during a major international rally, doubling traffic in 24 hours',
    'Built a custom CMS module for technical track analytics used by racing schools',
    'Partnered with local racing events to deliver exclusive behind-the-scenes content'
  ],
  quote: 'Extreme Waves helped us engage a passionate audience with rich, immersive content. Their platform made it easy to scale our editorial team and deliver real-time coverage during high-stakes events.',
  gallery: [{
    src: '/img/ews/ews_slide_01.jpg',
    alt: 'Slide 01'
  }, {
    src: '/img/ews/ews_slide_02.jpg',
    alt: 'Slide 02'
  }, {
    src: '/img/ews/ews_slide_03.jpg',
    alt: 'Slide 03'
  }, {
    src: '/img/ews/ews_slide_04.jpg',
    alt: 'Slide 04'
  }, {
    src: '/img/ews/ews_slide_05.jpg',
    alt: 'Slide 05'
  }]
}, {
  title: 'Unlimint iBank',
  description: 'Neo bank',
  description2: 'iBank is one of the early neobanking platforms made for mid-sized and large enterprises. Designed with the clarity and elegance of Swiss financial software, it provides companies with a secure, scalable, and user-friendly environment to manage payments, documents, accounts, and financial analytics — all from a unified interface.',
  badges: [
    'UI/UX in functional Swiss-banking style',
    'Document templating and digital signature flow',
    'Mass payments and card top-up workflows',
    'Configurable widget dashboard implementation',
    'Spotlight-style command bar development',
    'Role and permission system design',
    'One-click transaction approval logic',
    'Financial workflow optimization',
    'System for bulk document and payment handling',
    'Testing and rollout for large enterprise clients'
  ],
  problemsSolved: [
    'Replaced outdated banking portals with a modern, intuitive interface',
    'Simplified complex payment workflows for enterprise finance teams',
    'Enabled full control and traceability over document approval and transaction processing'
  ],
  uniqueFeatures : [
    'Functional UI inspired by Swiss banking design principles',
    'Document template creation and signature flow engine',
    'Batch payments and card top-ups with a single unified approval',
    'Customizable dashboards with configurable widgets for real-time insights',
    'Advanced search panel with Spotlight-style command interface',
    'Multi-role support with fine-grained access control',
    'Full audit trail and compliance logging for all actions'
  ],
  interestingCases: [
    'Helped a multinational client reduce daily financial operations time by over 40% through batch execution tools',
    'Deployed custom widget dashboards for finance teams in 5 countries with tailored KPIs',
    'Integrated Spotlight-style search to streamline navigation across complex workflows'
  ],
  quote: 'iBank brought a level of clarity and control we hadn’t seen in any enterprise banking solution. The UI was elegant, the tools powerful, and everything just worked.',
  gallery: [{
    src: '/img/ibank/Accounts.png',
    alt: 'Slide 01'
  }, {
    src: '/img/ibank/Accounts - HelpDesk.png',
    alt: 'Slide 02'
  }, {
    src: '/img/ibank/Accounts - Usermenu.png',
    alt: 'Slide 03'
  }, {
    src: '/img/ibank/Accounts - Account details.png',
    alt: 'Slide 04'
  }, {
    src: '/img/ibank/Cards.png',
    alt: 'Slide 05'
  }, {
    src: '/img/ibank/Create exchange.png',
    alt: 'Slide 06'
  }, {
    src: '/img/ibank/Create payment - transfer to.png',
    alt: 'Slide 07'
  }, {
    src: '/img/ibank/Create payment.png',
    alt: 'Slide 08'
  }, {
    src: '/img/ibank/History.png',
    alt: 'Slide 09'
  }]
}, {
  title: 'Unlimint Mobile Banking',
  description: 'International money transfers',
  description2: 'Unlimint Mobile Banking is a mobile-first solution designed to give users full control over their international payments and account management. The app simplifies global money transfers with a sleek, intuitive interface, allowing individuals and businesses to send funds across borders in just a few taps.',
  badges: [
    'Mobile UX design for international transfers',
    'Integration with global payment rails',
    'Biometric login implementation',
    'Currency conversion logic and fee preview',
    'Push notification setup',
    'Transfer history and tracking interface',
    'Contact-based payment flow',
    'Security layer integration (2FA, session tokens)',
    'Performance optimization for mobile networks',
    'App Store / Google Play deployment pipeline'
  ],
  problemsSolved: [
    'Enabled fast, secure cross-border transfers from mobile devices',
    'Simplified the banking experience with an intuitive and minimal interface',
    'Reduced dependency on desktop platforms for international transactions',
    'Increased financial mobility for users in different time zones and regions'
  ],
  uniqueFeatures : [
    'Streamlined UI for quick and error-free money transfers',
    'Real-time currency conversion and fee calculation',
    'Secure biometric login and multi-factor authentication',
    'Transfer tracking with live status updates',
    'Recurring payment setup and contact-based transfers',
    'Push notifications for approvals and account activity',
    'Full integration with Unlimint’s core banking infrastructure'
  ],
  interestingCases: [
    'Used by global entrepreneurs to initiate and track payments while traveling',
    'Helped reduce time-to-transfer by over 50% compared to traditional interfaces',
    'Adopted by high-volume users to manage international payroll via mobile'
  ],
  quote: 'The Unlimint mobile app made international payments as easy as sending a text. It’s intuitive, fast, and always reliable.',
  gallery: [{
    src: '/img/mbank/thumbnail.jpg',
    alt: 'Thumbnail'
  }, {
    src: '/img/mbank/slide_01.jpg',
    alt: 'Slide 01'
  }, {
    src: '/img/mbank/slide_02.jpg',
    alt: 'Slide 02'
  }, {
    src: '/img/mbank/slide_03.png',
    alt: 'Slide 03'
  }, {
    src: '/img/mbank/slide_05.jpg',
    alt: 'Slide 04'
  }, {
    src: '/img/mbank/thumbnail-compressed.png',
    alt: 'Last'
  }]
}]
