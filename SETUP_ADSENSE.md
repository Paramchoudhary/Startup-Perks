# Google AdSense Setup Guide — Startup Perks

This guide walks you through connecting Google AdSense to the Startup Perks website so you can display ads and earn revenue.

---

## Prerequisites

- A deployed, publicly accessible website (e.g. `https://startupperks.xyz`)
- A Google account
- The site must have **original content** and comply with [AdSense Program Policies](https://support.google.com/adsense/answer/48182)

---

## Step 1: Sign Up for Google AdSense

1. Go to **[adsense.google.com](https://adsense.google.com)**
2. Click **Get Started**
3. Enter your website URL: `https://startupperks.xyz`
4. Select your payment country and accept the Terms of Service
5. Click **Start using AdSense**

Google will review your site. This typically takes **1–14 days**.

---

## Step 2: Get Your Publisher ID

Once your account is approved:

1. In the AdSense dashboard, go to **Account → Account information**
2. Copy your **Publisher ID** — it looks like: `ca-pub-1234567890123456`

---

## Step 3: Set the Environment Variable

Add your Publisher ID to your environment. The codebase reads it from `NEXT_PUBLIC_ADSENSE_PUB_ID`.

### Local development

Create a `.env.local` file in the project root (it's already in `.gitignore`):

```
NEXT_PUBLIC_ADSENSE_PUB_ID=ca-pub-1234567890123456
```

### Vercel (production)

1. Go to your Vercel project → **Settings → Environment Variables**
2. Add:
   - **Key:** `NEXT_PUBLIC_ADSENSE_PUB_ID`
   - **Value:** `ca-pub-1234567890123456`
   - **Environments:** Production (and optionally Preview)
3. **Redeploy** the site for the variable to take effect

---

## Step 4: Create Ad Units in AdSense

You need to create **7 ad units** in the AdSense dashboard. Each ad unit gets a unique **slot ID** (a numeric string like `1234567890`).

Go to **AdSense → Ads → By ad unit** and create the following:

| # | Ad Unit Name            | Recommended Type     | Used In                        |
|---|-------------------------|----------------------|--------------------------------|
| 1 | Home Banner             | Display ad (horizontal) | Home page — below stats section |
| 2 | Home Multiplex          | Multiplex ad         | Home page — above categories   |
| 3 | Perks Top Banner        | Display ad (horizontal) | Perks listing — top of results |
| 4 | Perks In-Feed           | In-feed ad           | Perks listing — every 8 cards  |
| 5 | Detail In-Article       | In-article ad        | Perk detail — mid-content      |
| 6 | Detail Bottom Banner    | Display ad (horizontal) | Perk detail — bottom of page   |
| 7 | Detail Sidebar          | Display ad (vertical)   | Perk detail — right sidebar (desktop) |

### How to create each ad unit:

1. Click **+ New ad unit**
2. Choose the ad type (Display, In-feed, In-article, or Multiplex)
3. Name it (e.g. "Home Banner")
4. Set size to **Responsive**
5. Click **Create**
6. Copy the **data-ad-slot** value (the numeric string)

---

## Step 5: Replace Slot Placeholders in Code

Open each file below and replace the placeholder slot strings with your real AdSense slot IDs:

### `app/page.tsx` (Home page)

| Placeholder            | Replace With                    |
|------------------------|---------------------------------|
| `HERO_BANNER_SLOT`     | Slot ID from "Home Banner"      |
| `HOME_MULTIPLEX_SLOT`  | Slot ID from "Home Multiplex"   |

### `app/perks/page.tsx` (Perks listing)

| Placeholder              | Replace With                      |
|--------------------------|-----------------------------------|
| `PERKS_TOP_BANNER_SLOT`  | Slot ID from "Perks Top Banner"   |
| `PERKS_INFEED_SLOT`      | Slot ID from "Perks In-Feed"      |

### `app/perks/[id]/page.tsx` (Perk detail)

| Placeholder                | Replace With                        |
|----------------------------|-------------------------------------|
| `DETAIL_INARTICLE_SLOT`    | Slot ID from "Detail In-Article"    |
| `DETAIL_BOTTOM_BANNER_SLOT`| Slot ID from "Detail Bottom Banner" |
| `DETAIL_SIDEBAR_SLOT`      | Slot ID from "Detail Sidebar"       |

**Example:** If your "Home Banner" ad unit has slot ID `3456789012`, change:

```tsx
<BannerAd slot="HERO_BANNER_SLOT" />
```

to:

```tsx
<BannerAd slot="3456789012" />
```

---

## Step 6: Update `ads.txt`

The file `public/ads.txt` must contain your real Publisher ID for AdSense verification.

Open `public/ads.txt` and replace:

```
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

with your actual publisher ID (numbers only, no `ca-` prefix):

```
google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0
```

This file is served at `https://yourdomain.com/ads.txt` and is required by Google to verify ad inventory ownership.

---

## Step 7: Deploy & Verify

1. Commit and push your changes
2. Deploy to Vercel (or your hosting provider)
3. Visit your live site and check:
   - Open **DevTools → Console** — you should see the `adsbygoogle.js` script loading
   - No errors related to AdSense in the console
4. In the AdSense dashboard, go to **Sites** and verify your domain shows as "Ready"

---

## Ad Placement Summary

Here's where ads appear on the site:

```
HOME PAGE (/)
├── Hero Section
├── Stats Section
├── 📢 Banner Ad (horizontal)
├── Featured Perks Grid
├── "Ready to Save?" CTA
├── 📢 Multiplex Ad (recommendation grid)
└── Categories Section

PERKS LISTING (/perks)
├── Page Header
├── Search & Filters
├── 📢 Banner Ad (horizontal)
├── Results Count
├── Perks Grid
│   ├── Card 1–8
│   ├── 📢 In-Feed Ad (full-width)
│   ├── Card 9–16
│   ├── 📢 In-Feed Ad (full-width)
│   └── ... (repeats every 8 cards)
└── Empty State (if no results)

PERK DETAIL (/perks/[id])
├── Back Link
├── ┌─────────────────────┬──────────────┐
│   │ Hero Card           │              │
│   │ Description         │  📢 Sidebar  │
│   │ Apply Button        │  Ad (sticky) │
│   ├─────────────────────┤  (desktop)   │
│   │ 📢 In-Article Ad    │              │
│   ├─────────────────────┤              │
│   │ Eligibility / Notes │              │
│   ├─────────────────────┤              │
│   │ Bottom CTA          │              │
│   ├─────────────────────┘              │
│   │ 📢 Bottom Banner Ad               │
│   └────────────────────────────────────┘
```

---

## Troubleshooting

### Ads not showing?

- **AdSense not approved yet** — Ads won't render until Google approves your site. Check status at [adsense.google.com](https://adsense.google.com).
- **Environment variable not set** — All ad components return `null` when `NEXT_PUBLIC_ADSENSE_PUB_ID` is missing. Verify it's set in your hosting environment and redeploy.
- **Slot IDs still placeholders** — Make sure you replaced all `*_SLOT` strings with real numeric slot IDs.
- **Ad blockers** — Disable any ad blocker extensions to test. The code silently catches errors from blocked scripts.
- **`ads.txt` not accessible** — Visit `https://yourdomain.com/ads.txt` directly. It must return the correct publisher ID.
- **Localhost** — AdSense does **not** serve real ads on `localhost`. You'll see blank spaces locally; this is normal. Test on your deployed domain.

### Ads showing but no revenue?

- Revenue appears in AdSense dashboard with a **24–48 hour delay**
- Ensure you're getting real traffic — AdSense needs actual visitors to generate impressions
- Never click your own ads — this violates AdSense policies and can get your account banned

### Console error: `adsbygoogle.push() error: No slot size for availableWidth=0`

This means the ad container has zero width when the ad tries to load. Usually happens with hidden elements. All ad components in this project handle this correctly, but if you add new placements, ensure the container is visible when the page renders.

---

## AdSense Policies — Important Reminders

- **Do NOT click your own ads** or encourage others to click them
- **Do NOT place ads on pages with no content** (e.g. blank error pages)
- **Maximum 3 display ads per page** is a soft guideline — Google's system auto-limits
- **Label ads properly** — the components already include "Advertisement" / "Sponsored" labels
- **Do NOT modify ad code** beyond what Google allows (the current implementation is compliant)
- Review the full [AdSense Program Policies](https://support.google.com/adsense/answer/48182) regularly

---

## Optional: Auto Ads (Alternative Approach)

Instead of manually placing ad units, you can enable **Auto Ads** in AdSense:

1. Go to **AdSense → Ads → By site**
2. Click the pencil icon next to your site
3. Toggle **Auto ads** on
4. Google will automatically place ads on your pages

With Auto Ads, you don't need the individual slot IDs — the `adsbygoogle.js` script in `layout.tsx` is enough. However, manual placements (what this project uses) give you full control over where ads appear.

You can use **both** — Auto Ads fills gaps, and manual units ensure ads appear exactly where you want them.

---

## Files Reference

| File | Purpose |
|------|---------|
| `components/AdSense.tsx` | Reusable ad components (`BannerAd`, `InFeedAd`, `SidebarAd`, `MultiplexAd`) |
| `app/layout.tsx` | Loads the AdSense script globally |
| `app/page.tsx` | Home page ad placements |
| `app/perks/page.tsx` | Perks listing ad placements |
| `app/perks/[id]/page.tsx` | Perk detail page ad placements |
| `app/globals.css` | Ad container styles (hide unfilled, mobile responsive) |
| `public/ads.txt` | AdSense domain verification file |
| `.env.example` | Template for environment variables |
