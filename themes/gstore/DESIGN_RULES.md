# Design & Layout Rules (Agent Reference)

This document serves as the ground truth for generating styles and layouts for the "GStore" WordPress block theme. It is based on the provided reference screenshots (styled like `drom.ru`).

## 1. Visual Identity & Color Palette

### Colors

- **Primary Accent (Action):** `Var: --color-primary-red` -> `#D0021B` (or standard Drom red: `#bf0000`). Used for: "Submit Ad" button, Main Price text on list items, active states.
- **Header Background:** `Var: --color-header-bg` -> `#000000` or `#1c1c1c`.
- **Page Background:** `Var: --color-page-bg` -> `#FFFFFF`.
- **Featured/Highlight Background:** `Var: --color-highlight-bg` -> `#FFF9E5` (Pale yellow/cream used for specific listing cards or premium blocks).
- **Text Main:** `Var: --color-text-main` -> `#000000` or `#333333`.
- **Text Secondary (Meta):** `Var: --color-text-meta` -> `#888888` or `#666666` (Used for dates, cities, less important specs).
- **Link Blue:** `Var: --color-link-blue` -> `#2a5885` (Standard distinct informational link color).
- **Badges:**
  - _Good Price:_ Light green bg (`#effaf3`) with Dark green text (`#00a651`).
  - _No Rating/Neutral:_ Light gray bg (`#f2f2f2`) with Gray text.

### Typography

- **Font Family:** System stack or equivalent Sans-Serif (Arial, Roboto, Helvetica). Clean, legible, utility-focused.
- **Nav Links:** Fighters, Frigates, Haulers, Destroyers, Shuttles.
- **Listing Titles:** Link colored (Blue) or Black depending on context, often Hover: Underline.
- **Price Tag:** Bold, Red, larger font size than surrounding text. Prices correlate with tech level (Advanced = Higher).

---

## 2. Layout Structure (Block Theme)

### General Container

- **Max Width:** Approx `1100px - 1200px`.
- **Padding:** Minimal horizontal padding on mobile, centered on desktop.

### Header Area

1.  **Top Bar (Black):**
    - Container: Flexbox, row, align-center.
    - Elements: Logo (Left) -> Geo Location (Sector/Planet) -> Nav Links (Civilian, Military, Empire, etc.) -> "More" Dropdown -> **Red CTA Button ("Sell Starship")** -> Login/Register (Right).
    - _Note:_ The Red Button is a prominent solid block.

2.  **Breadcrumbs / Sub-navigation:**
    - Simple text links, small size, located below the main header. Example: _Galaxy > Outer Rim > Tatooine > T-65 X-Wing_

### Listings Layout (Archive/Search)

- **Display Mode:** List View (Row based).
- **Card Structure:**
  - **Left:** Thumbnail Image (approx 250px width).
  - **Center:**
    - Title (Ship Model + Class + Year/Era).
    - Specs (Class, Hyperdrive Rating, Shielding, Crew Capacity, Cargo).
    - Badges (e.g., "Hyperdrive Ready", "Combat Tested").
    - Description excerpt (optional).
  - **Right:**
    - Price (Large, Bold). _Note: Advanced/Rare ships = Premium pricing._
    - Location (Planet/Starbase, bottom aligned).
    - Amount (Stock) or Distance (Light Years).
    - Date (Relative, e.g., "5 mins ago").
- **Borders:** Light separators between items.

### Single Product Page (Single Post)

- **Title Section:** H1 Title independent of the sidebar.
- **Main Grid:** 2 Columns (approx 60/40 or 50/50 split).
  - **Left Column:**
    - Image Gallery (Main image with thumbstrip).
    - "Report/Check" section (Green checkmarks).
  - **Right Column (Sticky preferred):**
    - Price Block (Very prominent).
    - Galactic Credit/Loan Calculator Link.
    - Key Specs Table (Label: Value). Light gray labels, dark values.
    - Seller Info Block (Species/Faction/Dealer).
- **Reviews Section:** Summary box with specific rating (e.g., "8.1" black box).

---

## 3. WordPress Block Implementation Guidelines

- **Buttons:** Core Button block. Style `fill`. Class `.is-style-fill`. Custom background `--color-primary-red`.
- **Grids/Columns:** Use `wp:columns`.
  - _List View:_ Columns block with restricted widths (e.g., 25% | 50% | 25%).
- **Cards:** Use `wp:group` with a border or shadow utility class.
- **Tables:** Use `wp:table` or customized `wp:group` rows for Specs to ensure responsive behavior.
- **Navigation:** `wp:navigation` with custom CSS for the dark background and white text.

## 4. Specific UI Details to Mimic

- **Horizontal Scrolling:** "Similar Items" or "Hottest Deals" often appear as a horizontal row of cards (Image Top, Price Red label, Title).
- **Tags:** Rounded pill tags for "Exchange", "Trade-in", etc.

---

_Use this file as a strict reference when generating `theme.json`, CSS, or Block Templates._
