

## Wrap the Organization Section in a Glass Container

Right now the org section content (photo, stats, description) floats directly on the dark background with no enclosing container. The plan is to wrap the entire inner content in a single large `glass-panel` so it feels cohesive and elevated — matching the premium glass aesthetic of other sections.

### Changes

**Edit `src/components/sections/AboutOrg.tsx`**
- Wrap the content inside the `container` div (heading, photo frame, two-column grid) in a single `glass-panel` div with:
  - `backdrop-blur-xl`, the frosted glass background (`rgba(255,255,255,0.04)`)
  - Purple-tinted border (`rgba(168,85,247,0.25)`)
  - Rounded corners (`rounded-2xl`), generous padding (`p-8 md:p-12`)
  - Subtle outer glow via `box-shadow`
- The section heading ("The Organization") stays above/outside the glass panel so it anchors the section
- Photo frame, stat cards, and description all live inside the glass container

