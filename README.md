# Startup Perks Database

A searchable, filterable directory of startup credits, perks, and programs built with Next.js 15, Tailwind CSS, and shadcn/ui components styled with **Neo-Brutalism** design.

![Startup Perks Database](https://via.placeholder.com/1200x630/facc15/000000?text=Startup+Perks+Database)

## Features

- **40+ Startup Perks** - Cloud credits, AI APIs, developer tools, and more
- **Neo-Brutalism Design** - Bold, high-contrast UI with thick borders and hard shadows
- **Full-text Search** - Search by company, program name, or description
- **Category Filters** - Filter by cloud, AI, database, analytics, dev-tools, email, design, other
- **Featured Perks** - Highlight high-value programs
- **Sorting Options** - Sort by value, alphabetical, or company
- **Dark Mode** - Full dark mode support with next-themes
- **Responsive** - Mobile-first design that works on all devices
- **SEO Optimized** - Metadata, titles, and descriptions for each page

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Design Style**: Neo-Brutalism
- **Icons**: Lucide React
- **Theme**: next-themes
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd startup-perks-database
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page (hero, stats, featured)
│   ├── globals.css         # Global styles + Tailwind
│   ├── not-found.tsx       # 404 page
│   └── perks/
│       ├── page.tsx        # Perks directory with search/filter
│       ├── loading.tsx     # Loading skeleton
│       └── [id]/
│           ├── page.tsx    # Perk detail page
│           └── not-found.tsx
├── components/
│   ├── ui/                 # shadcn/ui components (brutalist)
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   └── Checkbox.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx
│   ├── ThemeToggle.tsx
│   ├── PerkCard.tsx
│   ├── SearchFilter.tsx
│   ├── FeaturedGrid.tsx
│   └── StatsSection.tsx
├── src/
│   ├── data/
│   │   └── startup-perks.ts  # All perk data + types
│   └── lib/
│       └── utils.ts          # Utility functions (cn, extractCreditValue)
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Neo-Brutalism Design

This project uses Neo-Brutalism design principles:

- **Thick Borders**: 4px solid black borders
- **Hard Shadows**: Offset box shadows (no blur)
- **Bold Typography**: Extra-bold and black font weights
- **High Contrast**: Strong color palette with black, white, and vibrant accents
- **Sharp Corners**: No border radius (or minimal)
- **Vibrant Colors**: Primary yellow (#facc15), with accent colors per category

### Custom CSS Classes

```css
.brutal-shadow     /* 4px 4px 0 black */
.brutal-shadow-sm  /* 2px 2px 0 black */
.brutal-shadow-lg  /* 6px 6px 0 black */
.brutal-shadow-xl  /* 8px 8px 0 black */
.brutal-hover      /* Hover animation: translate + larger shadow */
```

## Data Source

All perk data is in `src/data/startup-perks.ts`. Each perk includes:

- `id` - Unique identifier
- `company` - Company name
- `name` - Program name
- `category` - One of: cloud, ai, database, analytics, dev-tools, email, design, other
- `credits` - Value/discount description
- `description` - Program summary
- `eligibility` - Requirements
- `applyUrl` - Direct application link
- `notes` - Additional information (optional)
- `featured` - Boolean flag for high-value perks

## Adding New Perks

Edit `src/data/startup-perks.ts`:

```typescript
{
  id: 'new-perk-id',
  company: 'Company Name',
  name: 'Program Name',
  category: 'cloud', // or ai, database, etc.
  credits: 'Up to $X,XXX',
  description: 'Short description...',
  eligibility: 'Requirements...',
  applyUrl: 'https://...',
  notes: 'Optional notes',
  featured: true, // if high-value
}
```

## License

MIT License - feel free to use this for your own projects!

## Contributing

Contributions are welcome! Please open an issue or PR for:
- Adding new perks
- Fixing outdated information
- UI improvements
- Bug fixes

---

**Last Updated**: February 2026

Data sourced from official program pages and verified startup resources.
