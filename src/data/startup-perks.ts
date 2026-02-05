/**
 * Startup Perks Database
 * 
 * A comprehensive collection of startup credits, perks, discounts, and
 * non-dilutive funding programs available to early-stage companies.
 * 
 * Last updated: February 2026
 * Data sourced from official program pages and verified startup resources.
 * 
 * @example
 * ```ts
 * import { startupPerks, type StartupPerk } from '@/data/startup-perks';
 * 
 * // Filter by category
 * const cloudPerks = startupPerks.filter(p => p.category === 'cloud');
 * 
 * // Get featured perks
 * const featured = startupPerks.filter(p => p.featured);
 * ```
 */

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

/**
 * Categories of startup perks and credits programs
 */
export type PerkCategory =
  | 'cloud'      // Cloud infrastructure (AWS, GCP, Azure, etc.)
  | 'ai'         // AI/ML platforms and APIs
  | 'database'   // Database services
  | 'analytics'  // Analytics and monitoring tools
  | 'dev-tools'  // Developer tools and productivity
  | 'email'      // Email and communication services
  | 'design'     // Design and collaboration tools
  | 'other';     // Other services (CRM, legal, etc.)

/**
 * Represents a startup perk or credits program
 */
export interface StartupPerk {
  /** Unique kebab-case identifier (e.g., "cloudflare-startup-boost") */
  id: string;
  
  /** Company name (e.g., "Cloudflare") */
  company: string;
  
  /** Program name (e.g., "Cloudflare for Startups") */
  name: string;
  
  /** Category of the perk */
  category: PerkCategory;
  
  /** Credit value or discount description (e.g., "Up to $250,000") */
  credits?: string;
  
  /** Short 1-2 sentence summary of the offer */
  description: string;
  
  /** Brief eligibility requirements */
  eligibility: string;
  
  /** Direct link to apply or learn more */
  applyUrl: string;
  
  /** Optional extra information (e.g., "Expires in 1 year") */
  notes?: string;
  
  /** Flag for high-value or popular programs */
  featured?: boolean;
}

// -----------------------------------------------------------------------------
// Data
// -----------------------------------------------------------------------------

/**
 * Comprehensive list of startup perks, sorted by value/usefulness
 * (cloud credits first, then AI, then dev tools, etc.)
 */
export const startupPerks: StartupPerk[] = [
  // ===========================================================================
  // CLOUD INFRASTRUCTURE (Highest value - up to $350k)
  // ===========================================================================
  {
    id: 'google-cloud-startups',
    company: 'Google Cloud',
    name: 'Google for Startups Cloud Program',
    category: 'cloud',
    credits: 'Up to $350,000',
    description:
      'Cloud credits over two years with additional perks for AI-focused startups. Includes access to Firebase, technical support, and Google Cloud training.',
    eligibility:
      'Early-stage startups (Pre-seed to Series A). AI startups can access up to $350k; standard tier offers $100-200k.',
    applyUrl: 'https://cloud.google.com/startup',
    notes:
      'Two-year structure (100% coverage Year 1, 20% Year 2). AI track often requires VC/partner referral.',
    featured: true,
  },
  {
    id: 'cloudflare-for-startups',
    company: 'Cloudflare',
    name: 'Cloudflare for Startups',
    category: 'cloud',
    credits: 'Up to $250,000',
    description:
      'Credits for Cloudflare\'s Developer Platform including Workers, Pages, R2 storage, D1 database, and enterprise-level security features for up to 3 domains.',
    eligibility:
      'Building a software product, raised at least $50k (use code "BOOTSTRAPPED" if not), active website required.',
    applyUrl: 'https://www.cloudflare.com/forstartups/',
    notes:
      'Credits valid for 1 year. Caps: $10k on R2/Cache Reserve, $50k on Workers AI. Four tiers: $5k, $25k, $100k, $250k.',
    featured: true,
  },
  {
    id: 'microsoft-for-startups',
    company: 'Microsoft',
    name: 'Microsoft for Startups Founders Hub',
    category: 'cloud',
    credits: 'Up to $150,000',
    description:
      'Azure credits plus free GitHub Enterprise (20 seats), Microsoft 365, Visual Studio, and OpenAI credits. Includes technical support and mentorship.',
    eligibility:
      'Early-stage startups. $150k tier requires Investor Network affiliation; bootstrapped startups can access up to $5k.',
    applyUrl: 'https://foundershub.startups.microsoft.com/',
    notes:
      'July 2025 restructure: $150k now requires Investor Network. Bootstrapped path caps at $5k (180-day validity).',
    featured: true,
  },
  {
    id: 'aws-activate',
    company: 'Amazon Web Services',
    name: 'AWS Activate',
    category: 'cloud',
    credits: 'Up to $100,000',
    description:
      'AWS credits covering EC2, S3, Lambda, RDS, DynamoDB, and most AWS services. Includes technical support, training, and business guidance.',
    eligibility:
      'Activate Portfolio (via VC/accelerator): up to $100k. Activate Founders (self-apply): up to $1k.',
    applyUrl: 'https://aws.amazon.com/activate/',
    notes:
      'Top-tier VCs (YC, Sequoia, a16z) typically secure full $100k. Credits usually valid for 2 years.',
    featured: true,
  },
  {
    id: 'digitalocean-hatch',
    company: 'DigitalOcean',
    name: 'DigitalOcean Hatch',
    category: 'cloud',
    credits: 'Up to $100,000',
    description:
      'Infrastructure credits for DigitalOcean\'s cloud platform, including Droplets, Kubernetes, managed databases, and Spaces object storage.',
    eligibility:
      'Early-stage startups, typically via accelerator or partner network.',
    applyUrl: 'https://www.digitalocean.com/hatch',
    notes: 'Includes prioritized support and access to founder community.',
  },
  {
    id: 'ovhcloud-startup',
    company: 'OVHcloud',
    name: 'OVHcloud Startup Program',
    category: 'cloud',
    credits: 'Up to €100,000',
    description:
      'Cloud credits for European infrastructure with 6 hours of 1:1 engineering support. Good for EU-local or dev/staging workloads.',
    eligibility: 'Start tier: €10k. Scale tier (up to €100k) via accelerators/enablers.',
    applyUrl: 'https://startup.ovhcloud.com/',
    notes: 'Start tier includes 12 months of credits with go-to-market support.',
  },
  {
    id: 'vercel-for-startups',
    company: 'Vercel',
    name: 'Vercel for Startups',
    category: 'cloud',
    credits: 'Varies by partner',
    description:
      'Credits and discounts for Vercel\'s frontend cloud platform. Automatic scaling, edge functions, and preview deployments included.',
    eligibility:
      'Via VC/accelerator partners. Vercel AI Accelerator offers $4M+ in combined credits.',
    applyUrl: 'https://vercel.com/startups',
    notes: 'Partner-gated program. Check if your VC/accelerator has a Vercel partnership.',
  },

  // ===========================================================================
  // AI & ML PLATFORMS
  // ===========================================================================
  {
    id: 'anthropic-startups',
    company: 'Anthropic',
    name: 'Anthropic Startup Program',
    category: 'ai',
    credits: '$25,000',
    description:
      'Claude API credits with priority rate limits and access to Anthropic technical resources. Includes invitations to exclusive founder events.',
    eligibility:
      'Via VC partners (Menlo Ventures Anthology Fund and others). Building commercial applications with Claude.',
    applyUrl: 'https://www.anthropic.com/startups',
    notes:
      'Anthology Fund ($100M initiative) provides $25k credits plus venture support from Menlo Ventures.',
    featured: true,
  },
  {
    id: 'openai-startup-credits',
    company: 'OpenAI',
    name: 'OpenAI Startup Credits',
    category: 'ai',
    credits: 'Up to $2,500',
    description:
      'API credits for GPT-4, GPT-4o, DALL-E, and other OpenAI models. Available through partner programs like Ramp.',
    eligibility: 'Via partner programs (Ramp, Microsoft Azure, accelerators).',
    applyUrl: 'https://ramp.com/rewards/openai',
    notes:
      'Microsoft for Startups includes OpenAI credits via Azure OpenAI Service.',
  },
  {
    id: 'elevenlabs-grants',
    company: 'ElevenLabs',
    name: 'ElevenLabs Grants Program',
    category: 'ai',
    credits: '33 million characters (~$4,000+)',
    description:
      '12 months of Scale-tier access for voice AI including text-to-speech, voice cloning, and conversational AI agents. Over 680 hours of generated audio.',
    eligibility:
      'Startups under 25 employees with monetized product use case. No short-term projects or products for minors.',
    applyUrl: 'https://elevenlabs.io/startup-grants',
    notes:
      'Includes high concurrency limits and priority support. One application per company.',
    featured: true,
  },
  {
    id: 'perplexity-startup-program',
    company: 'Perplexity AI',
    name: 'Perplexity Startup Program',
    category: 'ai',
    credits: '$5,000',
    description:
      'API credits for Perplexity\'s search and answer engine, enabling AI-powered research and information retrieval.',
    eligibility: 'Early-stage startups building AI-powered products.',
    applyUrl: 'https://www.perplexity.ai/hub/blog/introducing-the-perplexity-startup-program',
    notes: 'Launched in 2025. Growing program with additional partner benefits.',
  },

  // ===========================================================================
  // DATABASE & BACKEND SERVICES
  // ===========================================================================
  {
    id: 'mongodb-atlas-startups',
    company: 'MongoDB',
    name: 'MongoDB for Startups',
    category: 'database',
    credits: 'Up to $20,000',
    description:
      'Atlas credits for MongoDB\'s multi-cloud database platform. Includes technical support and free access to MongoDB University.',
    eligibility:
      'Early-stage startups. $3k initially with option to extend to $20k via Spark program.',
    applyUrl: 'https://www.mongodb.com/startups',
    notes: 'Via AWS Activate, Google Cloud Startups, or direct application.',
  },
  {
    id: 'supabase-startup-credits',
    company: 'Supabase',
    name: 'Supabase Startup Credits',
    category: 'database',
    credits: '$300',
    description:
      'Credits for Supabase\'s open-source Firebase alternative including Postgres database, authentication, storage, and edge functions.',
    eligibility: 'Via AWS Activate or Google Cloud Startups programs.',
    applyUrl: 'https://supabase.com/partners/integrations',
    notes: 'Credits valid for 12 months. Generous free tier also available.',
  },
  {
    id: 'planetscale-startups',
    company: 'PlanetScale',
    name: 'PlanetScale Startup Program',
    category: 'database',
    credits: 'Varies',
    description:
      'Credits for PlanetScale\'s serverless MySQL platform with branching, schema migrations, and infinite scale.',
    eligibility: 'Early-stage startups via partner programs.',
    applyUrl: 'https://planetscale.com/startups',
    notes: 'Includes dedicated support and technical guidance.',
  },
  {
    id: 'couchbase-startups',
    company: 'Couchbase',
    name: 'Couchbase Capella Starter Kit',
    category: 'database',
    credits: '$12,750 value',
    description:
      'Capella Credits, 3 virtual consulting days, and associate developer certification for modern AI-ready applications.',
    eligibility: 'Via AWS Activate program.',
    applyUrl: 'https://aws.amazon.com/startups/offers',
    notes: 'Limited time offer. Includes hands-on onboarding support.',
  },

  // ===========================================================================
  // ANALYTICS & MONITORING
  // ===========================================================================
  {
    id: 'mixpanel-startups',
    company: 'Mixpanel',
    name: 'Mixpanel for Startups',
    category: 'analytics',
    credits: '$50,000',
    description:
      'One year free of Mixpanel Growth plan including product analytics, session replay (500K sessions), and unlimited seats.',
    eligibility: 'Launched <2 years ago with <$5M in funding.',
    applyUrl: 'https://mixpanel.com/startups',
    notes: 'Includes 1B events and full analytics suite.',
    featured: true,
  },
  {
    id: 'posthog-startups',
    company: 'PostHog',
    name: 'PostHog for Startups',
    category: 'analytics',
    credits: '$50,000',
    description:
      'All-in-one platform with product analytics, session replay, feature flags, A/B testing, and surveys. Free tier covers 30M events/month.',
    eligibility: '<$5M raised and <50 employees. Must be new to PostHog.',
    applyUrl: 'https://posthog.com/startups',
    notes: '12-month credit window. Includes Slack community access.',
    featured: true,
  },
  {
    id: 'amplitude-startups',
    company: 'Amplitude',
    name: 'Amplitude Startup Scholarship',
    category: 'analytics',
    credits: '1 year free (Growth plan)',
    description:
      'Full access to Amplitude\'s paid Growth plan for product analytics, behavioral cohorts, and experimentation.',
    eligibility: 'Early-stage startups via partner programs.',
    applyUrl: 'https://amplitude.com/startups',
    notes: 'Growth plan typically costs $61k/year for 10M events.',
  },
  {
    id: 'datadog-startups',
    company: 'Datadog',
    name: 'Datadog for Startups',
    category: 'analytics',
    credits: '1 year free',
    description:
      'Comprehensive monitoring platform including APM, infrastructure monitoring, log management, and real-time observability.',
    eligibility: 'Early-stage startups via partner network.',
    applyUrl: 'https://www.datadoghq.com/partner/datadog-for-startups/',
    notes: 'Includes all core Datadog products for first year.',
    featured: true,
  },
  {
    id: 'sentry-startups',
    company: 'Sentry',
    name: 'Sentry Startup Program',
    category: 'analytics',
    credits: 'Free tier + discounts',
    description:
      'Error tracking and performance monitoring with detailed stack traces, breadcrumbs, and release tracking.',
    eligibility: 'Startups can start with generous free tier.',
    applyUrl: 'https://sentry.io/for/startups/',
    notes: 'Free tier covers small projects. Paid plans from $29/month.',
  },
  {
    id: 'segment-startups',
    company: 'Twilio Segment',
    name: 'Segment Startup Program',
    category: 'analytics',
    credits: '$25,000 value',
    description:
      'Full access to Segment\'s Team Plan for customer data platform connecting 450+ apps. Real-time data collection and analytics.',
    eligibility: '<$5M funding and <50 employees.',
    applyUrl: 'https://segment.com/industry/startups/',
    notes: 'Free for up to 2 years. Part of $1M+ software bundle.',
  },

  // ===========================================================================
  // DEVELOPER TOOLS & PRODUCTIVITY
  // ===========================================================================
  {
    id: 'retool-startups',
    company: 'Retool',
    name: 'Retool Startup Program',
    category: 'dev-tools',
    credits: 'Up to $60,000',
    description:
      'Build internal tools, admin panels, and dashboards without coding. 1 year free plus 25% off second year and $200k+ in partner offers.',
    eligibility: 'Series A or earlier with <$10M funding. Must upgrade to paid plan first.',
    applyUrl: 'https://retool.com/startups',
    notes: 'Includes their "Deal Book" with partner offers from AWS, Brex, Segment.',
    featured: true,
  },
  {
    id: 'github-for-startups',
    company: 'GitHub',
    name: 'GitHub for Startups',
    category: 'dev-tools',
    credits: '20 seats free (GitHub Enterprise)',
    description:
      'GitHub Enterprise for 12 months including advanced security, compliance tools, and project management features.',
    eligibility:
      'Series B or earlier. New to GitHub Enterprise. Via VC/accelerator partner or direct application.',
    applyUrl: 'https://github.com/enterprise/startups',
    notes: '50% off Advanced Security. 50% off Year 2.',
    featured: true,
  },
  {
    id: 'notion-startups',
    company: 'Notion',
    name: 'Notion for Startups',
    category: 'dev-tools',
    credits: 'Up to $1,000 (6 months free)',
    description:
      'All-in-one workspace for docs, wikis, and project management. 6 months free on Business Plan with Notion AI included.',
    eligibility:
      'Startups on free plan. $1k via partner codes (AWS Activate, Stripe Atlas). $500 via direct application.',
    applyUrl: 'https://www.notion.so/startups',
    notes: 'Partners like AWS, Stripe provide $1k codes. Direct applicants get $500.',
  },
  {
    id: 'linear-startups',
    company: 'Linear',
    name: 'Linear for Startups',
    category: 'dev-tools',
    credits: 'Up to 6 months free',
    description:
      'Modern issue tracking and project management built for software teams. Fast, keyboard-first interface.',
    eligibility: 'Early-stage startups via partner programs.',
    applyUrl: 'https://linear.app/startups',
    notes: 'Partner-gated. Check accelerator or VC for access.',
  },
  {
    id: 'algolia-startups',
    company: 'Algolia',
    name: 'Algolia Startup Program',
    category: 'dev-tools',
    credits: '$10,000',
    description:
      'Search and discovery platform credits for building fast, relevant search experiences in products.',
    eligibility: '<3 years old with <$5M funding.',
    applyUrl: 'https://www.algolia.com/startups/',
    notes:
      'Best-in-class search API. Note: Can be sticky—plan migration if needed long-term.',
  },
  {
    id: 'miro-startups',
    company: 'Miro',
    name: 'Miro for Startups',
    category: 'dev-tools',
    credits: '$1,000',
    description:
      'Online collaborative whiteboard for brainstorming, planning, and project management.',
    eligibility: 'Early-stage startups.',
    applyUrl: 'https://miro.com/startups/',
    notes: 'Good for remote teams doing design sprints and workshops.',
  },
  {
    id: 'atlassian-startups',
    company: 'Atlassian',
    name: 'Atlassian for Startups',
    category: 'dev-tools',
    credits: 'Free/discounted access',
    description:
      'Access to Jira, Confluence, Trello, and other Atlassian products for project management and documentation.',
    eligibility: 'Early-stage startups via partner programs.',
    applyUrl: 'https://www.atlassian.com/software/startups',
    notes: 'Includes cloud products for team collaboration.',
  },

  // ===========================================================================
  // EMAIL & COMMUNICATION
  // ===========================================================================
  {
    id: 'twilio-startups',
    company: 'Twilio',
    name: 'Twilio Startups',
    category: 'email',
    credits: '$500',
    description:
      'Communication APIs for voice, video, SMS, and messaging. Build customer engagement solutions globally.',
    eligibility: 'Early-stage startups.',
    applyUrl: 'https://www.twilio.com/startups',
    notes: 'Includes education, mentoring, and introductions to partners.',
  },
  {
    id: 'intercom-startups',
    company: 'Intercom',
    name: 'Intercom Early Stage Program',
    category: 'email',
    credits: 'Up to 95% off',
    description:
      'Customer messaging platform with live chat, bots, and customer support tools at startup-friendly pricing.',
    eligibility: '<$1M annual revenue. Via accelerator/partner programs.',
    applyUrl: 'https://www.intercom.com/early-stage',
    notes: 'Graduated pricing: 95% off Year 1, 75% Year 2, 50% Year 3.',
  },
  {
    id: 'hubspot-startups',
    company: 'HubSpot',
    name: 'HubSpot for Startups',
    category: 'email',
    credits: 'Up to 90% off',
    description:
      'CRM, marketing automation, sales, and customer service software at significant discounts.',
    eligibility: 'Via accelerator or VC partner (Stripe Atlas, etc.).',
    applyUrl: 'https://www.hubspot.com/startups',
    notes:
      'Discount applies to Professional/Enterprise tiers. Free-forever CRM tier also available.',
  },
  {
    id: 'zendesk-startups',
    company: 'Zendesk',
    name: 'Zendesk for Startups',
    category: 'email',
    credits: '6 months free',
    description:
      'Customer service, sales automation, and help desk software for building customer relationships.',
    eligibility: 'Early-stage startups.',
    applyUrl: 'https://www.zendesk.com/startups/',
    notes: 'Covers Suite Team plan. Good for scaling support operations.',
  },

  // ===========================================================================
  // DESIGN & COLLABORATION
  // ===========================================================================
  {
    id: 'figma-startups',
    company: 'Figma',
    name: 'Figma Startup Program',
    category: 'design',
    credits: '$1,000',
    description:
      'Collaborative design platform for UI/UX, prototyping, and design systems. Real-time collaboration.',
    eligibility: 'Early-stage startups via partner programs.',
    applyUrl: 'https://www.figma.com/startups/',
    notes:
      'Generous free tier also available. Professional plan for growing teams.',
  },
  {
    id: 'canva-startups',
    company: 'Canva',
    name: 'Canva for Teams',
    category: 'design',
    credits: 'Free tier + discounts',
    description:
      'Design platform for marketing materials, presentations, social media, and brand assets.',
    eligibility: 'Generous free tier available to all. Teams plan for collaboration.',
    applyUrl: 'https://www.canva.com/teams/',
    notes:
      'No formal startup program, but free tier is substantial. Canva Pro from $12.99/month.',
  },

  // ===========================================================================
  // OTHER SERVICES (PAYMENTS, LEGAL, HR)
  // ===========================================================================
  {
    id: 'stripe-atlas',
    company: 'Stripe',
    name: 'Stripe Atlas',
    category: 'other',
    credits: '$150 off incorporation + perks',
    description:
      'Delaware C-corp incorporation with tax ID, 83(b) filing, banking, and access to extensive partner perks and discounts.',
    eligibility: 'Founders anywhere in the world.',
    applyUrl: 'https://stripe.com/atlas',
    notes:
      'AWS Activate members get $150 off ($350 total). Unlocks HubSpot, Notion, and other partner deals.',
    featured: true,
  },
  {
    id: 'brex-startup-perks',
    company: 'Brex',
    name: 'Brex for Startups',
    category: 'other',
    credits: 'Exclusive partner deals',
    description:
      'Corporate card with no personal guarantee and extensive partner discounts through their deal book.',
    eligibility: 'Startups with VC backing or $100k+ in bank.',
    applyUrl: 'https://www.brex.com/startups',
    notes: 'Unlocks exclusive deals from AWS, Google Cloud, Notion, and 75+ partners.',
  },
  {
    id: 'ramp-startup-perks',
    company: 'Ramp',
    name: 'Ramp Partner Perks',
    category: 'other',
    credits: 'Extensive partner deals',
    description:
      'Corporate card and expense management with partner perks including OpenAI credits and software discounts.',
    eligibility: 'Startups and businesses.',
    applyUrl: 'https://ramp.com/rewards',
    notes: 'Includes OpenAI ($2,500), AWS, and many SaaS discounts.',
  },
  {
    id: 'freshworks-startups',
    company: 'Freshworks',
    name: 'Freshworks for Startups',
    category: 'other',
    credits: 'Up to $10,000',
    description:
      'Credits for Freshworks CRM, marketing automation, customer service, and IT service management tools.',
    eligibility: 'Early-stage startups.',
    applyUrl: 'https://www.freshworks.com/startups/',
    notes: 'Includes mentorship and access to Freshworks suite.',
  },
  {
    id: 'dropbox-startups',
    company: 'Dropbox',
    name: 'Dropbox for Startups',
    category: 'other',
    credits: '40-90% off',
    description:
      'Discounts on Dropbox, DocSend, and Dropbox Sign for secure file storage, pitch deck sharing, and e-signatures.',
    eligibility: 'Via affiliated partner (VC, accelerator, incubator).',
    applyUrl: 'https://www.dropbox.com/startups',
    notes: 'DocSend is great for tracking pitch deck engagement.',
  },
  {
    id: 'gusto-startups',
    company: 'Gusto',
    name: 'Gusto for Startups',
    category: 'other',
    credits: 'Discounted pricing',
    description:
      'Payroll, benefits, and HR platform designed for small businesses and startups.',
    eligibility: 'Via accelerator or partner programs.',
    applyUrl: 'https://gusto.com/partners',
    notes: 'First hires? Activate this early for streamlined payroll.',
  },
  {
    id: 'zoho-one-startups',
    company: 'Zoho',
    name: 'Zoho One for Startups',
    category: 'other',
    credits: '1 year free',
    description:
      'Bundle of 40+ applications including CRM, email, project management, finance, and HR tools.',
    eligibility: 'Early-stage startups meeting Zoho\'s criteria.',
    applyUrl: 'https://www.zoho.com/one/startups/',
    notes: 'Comprehensive alternative to piecing together multiple SaaS tools.',
  },
];

// -----------------------------------------------------------------------------
// Utility Functions
// -----------------------------------------------------------------------------

/**
 * Get all perks for a specific category
 */
export const getPerksByCategory = (category: PerkCategory): StartupPerk[] =>
  startupPerks.filter((perk) => perk.category === category);

/**
 * Get all featured/high-value perks
 */
export const getFeaturedPerks = (): StartupPerk[] =>
  startupPerks.filter((perk) => perk.featured === true);

/**
 * Get a perk by its unique ID
 */
export const getPerkById = (id: string): StartupPerk | undefined =>
  startupPerks.find((perk) => perk.id === id);

/**
 * Search perks by company name or program name
 */
export const searchPerks = (query: string): StartupPerk[] => {
  const lowerQuery = query.toLowerCase();
  return startupPerks.filter(
    (perk) =>
      perk.company.toLowerCase().includes(lowerQuery) ||
      perk.name.toLowerCase().includes(lowerQuery) ||
      perk.description.toLowerCase().includes(lowerQuery)
  );
};

// -----------------------------------------------------------------------------
// Category Labels (for UI)
// -----------------------------------------------------------------------------

export const categoryLabels: Record<PerkCategory, string> = {
  cloud: 'Cloud Infrastructure',
  ai: 'AI & Machine Learning',
  database: 'Database Services',
  analytics: 'Analytics & Monitoring',
  'dev-tools': 'Developer Tools',
  email: 'Communication & Support',
  design: 'Design & Collaboration',
  other: 'Other Services',
};

// -----------------------------------------------------------------------------
// Default Export
// -----------------------------------------------------------------------------

export default startupPerks;
