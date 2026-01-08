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

2.  **Responsive / Mobile:**
    - On screens narrower than `768px`, elements should stack or simplify.
    - **Logo & Theme Toggle** should remain visible.
    - **Navigation** should become a horizontally a hamburger menu.
    - **Search/CTA** might move below the main bar or stack.

3.  **Breadcrumbs / Sub-navigation:**
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
- **Global CSS:** All general/global site styles MUST be written in `themes/gstore/assets/css/general.css`.

## 4. Specific UI Details to Mimic

- **Horizontal Scrolling:** "Similar Items" or "Hottest Deals" often appear as a horizontal row of cards (Image Top, Price Red label, Title).
- **Tags:** Rounded pill tags for "Exchange", "Trade-in", etc.

---

## 5. Responsive Design Rules (Site-wide)

### Breakpoints

- **Mobile:** `< 768px` (Stack elements, 100% width, simplified layouts).
- **Tablet:** `768px - 1024px` (Adaptive grids, standard padding).
- **Desktop:** `> 1024px` (Centered containers, max-widths applied).

### Global Layout Behavior

1.  **Containers:**
    - Mobile: 100% width with `15px` horizontal padding.
    - Desktop: Max-width `1200px`, centered.
2.  **Typography Scale:**
    - Reduce Heading sizes by ~20% on mobile.
3.  **Images:**
    - Always `max-width: 100%`, `height: auto` to prevent overflow.

### Component Specifics

1.  **Header:**
    - **Header Block:** Must remain visible.
    - **Navigation:** Transform to horizontal scroll (overflow-x) or Hamburger menu. DO NOT hide essential links.
    - **Search/Actions:** Stack vertically if space is tight.
2.  **Listings/Grid:**
    - Desktop: 4 columns.
    - Tablet: 2 or 3 columns.
    - Mobile: 1 column (Card view) or List view (1 item per row).
3.  **Tables:**
    - Must have standard horizontal scrolling wrapper on mobile.

---

_Use this file as a strict reference when generating `theme.json`, CSS, or Block Templates._
