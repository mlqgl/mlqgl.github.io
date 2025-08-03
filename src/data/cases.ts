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
}]
