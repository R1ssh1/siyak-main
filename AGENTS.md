# Siyak Steel Main Codebase Guide

Welcome to the Siyak Steel (`siyak-main`) React project. This project is a complex hybrid that merges a legacy HTML/CSS template (Neon Alloys aesthetic) with a modern React SPA architecture (Vite + React Router).

## ⚠️ Critical Rule: Styling and CSS Conflicts

**The most important rule in this codebase is managing CSS conflicts.**

1. **Legacy Styles are King**: The site relies heavily on a massive legacy stylesheet located at `public/css/main.min.css`. This file defines the global aesthetic (colors, typography, and a 12-column float-based grid system using `grid_12`, `grid_4`, etc.).
2. **Tailwind Danger**: TailwindCSS is installed but **must be used with extreme caution**. Applying Tailwind utility classes to legacy components will often result in catastrophic styling conflicts and break the layout. For legacy pages, **stick to the legacy CSS classes or use inline styles (`style={{...}}`)** for safe overrides.
3. **CSS Overrides**: When the legacy CSS behaves poorly (e.g., snagging floats, unequal card heights), the standard solution is to define specific overrides in `src/index.css` or use modern CSS Grid inline.

## Project Structure

*   `public/`: Contains static assets. Most importantly, `public/css/main.min.css` and `public/js/` (legacy scripts). Images referenced by legacy CSS/HTML are often expected to be in `public/img/`.
*   `src/converted-legacy/`: This folder contains the bulk of the application pages. These are pages that were directly ported from the legacy HTML template into JSX. They rely almost entirely on the legacy CSS classes.
*   `src/components/`: Reusable React components. Some are modern, some are legacy adaptations (like `Industries.jsx` and `ThirdPartyInspection.jsx`).
*   `src/index.css`: The global CSS file where we apply our patches, theme color standardizations, and flexbox/grid fixes to correct legacy layout bugs.

## Key Technical Decisions & Patterns

*   **Color Theme Standardizations**: The site's primary theme colors have been standardized. For example, headings and interactive elements often use `#005d65`, while body text is kept to a dark `#222` for maximum readability.
*   **The Equal Height Card Problem**: The legacy float-based grid system (`grid_4` columns inside `grid_12`) causes severe layout breakage (snagging) when cards have varying amounts of text.
    *   *Solution*: In pages like `Home.jsx` and `Products.jsx`, the nested columns have been **flattened** into a single `<div className="grid_12" style={{ display: 'grid', ... }}>` container. **Always use CSS Grid (`display: 'grid'`) when you need perfectly aligned, equal-height cards**, bypassing the legacy floats.
*   **Routing**: The app uses `react-router-dom` in `App.jsx`. External links or special catalog links (like the Nickel Alloy Catalogue) may be configured to open in new tabs.

## Current Project Phase (as of August 2026)

*   **Phase 1 & 2 (Complete)**: Visual standardization, fixing broken grid layouts, ensuring identical card heights, and aligning the UI with the required aesthetic.
*   **Phase 3 (Pending)**: Backend forms migration. The legacy site relied on PHP scripts (e.g., `download.php`) and outdated reCAPTCHA keys. These need to be replaced with a modern email service integration (e.g., Formspree, EmailJS, or custom endpoints).
*   **Phase 4 & 5 (Pending)**: Route cleanup (fixing broken sub-links in sidebars) and replacing low-res slider images in `Slider.jsx` with high-res assets.

## Workflow Tips for Agents

1.  **Don't Fight the Legacy CSS**: If something looks wrong, check `public/css/main.min.css` first. 
2.  **Use `view_file`**: If you need to edit a legacy converted page, use `view_file` extensively. The structure is often highly nested.
3.  **Use `replace_file_content` block-by-block**: When making structural changes (like flattening grids), be extremely precise with line numbers to avoid mangling the JSX. Overwriting the file completely after testing a Node script is also a valid and safer strategy for small files.
