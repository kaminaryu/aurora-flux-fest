

## Create a Visually Striking "About the Organization" Section

The previous plan was a basic centered photo + paragraph — too generic. Here's a more dynamic, editorial layout that matches the PS5 liquid glass world.

### Layout — Split Asymmetric

```text
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   ┌──────────────────────────────────────────────┐       │
│   │                                              │       │
│   │    3:1 cinematic photo (glass-framed,        │       │
│   │    with purple glow bleed + refraction        │       │
│   │    line across top edge)                      │       │
│   │                                              │       │
│   └──────────────────────────────────────────────┘       │
│                                                          │
│   ┌─────────────────┐  ┌────────────────────────┐       │
│   │  Glass stat card │  │                        │       │
│   │  "5 YEARS"       │  │  Org name (gradient)   │       │
│   ├─────────────────┤  │  Description paragraph  │       │
│   │  Glass stat card │  │  in muted text          │       │
│   │  "200K+ FANS"    │  │                        │       │
│   ├─────────────────┤  │  Small CTA link →       │       │
│   │  Glass stat card │  │                        │       │
│   │  "12 EDITIONS"   │  └────────────────────────┘       │
│   └─────────────────┘                                    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

Below the photo: a **two-column layout** (stacks on mobile) — left column has 3 small glass stat cards with key org numbers, right column has the org name, description, and a subtle "Learn more" link. This gives it editorial depth instead of a boring centered block.

### Files

**1. Create `src/components/sections/AboutOrg.tsx`**
- Full-width 3:1 aspect-ratio photo container inside a glass-panel with a glowing purple border and a refraction line across the top edge
- Photo slot uses a cinematic placeholder gradient (dark purple → cyan ambient) until a real image is added
- Below: two-column grid — left has 3 stacked glass-panel stat cards (years active, attendees, editions), right has org name as gradient text + 2-sentence description + subtle arrow link
- IntersectionObserver scroll animation, staggered entrance delays
- Background orb for depth

**2. Edit `src/pages/Index.tsx`**
- Import `AboutOrg` and place between `FestivalInfo` and `Events`

### Design Details
- Photo frame: `glass-panel` with stronger purple border (`rgba(168,85,247,0.3)`), inner glow via box-shadow, and a thin refraction gradient line positioned absolute across the top
- Stat cards: small glass panels with the number in large Orbitron gradient text and label in muted tracking
- Description text: Rajdhani, `text-muted-foreground`, `max-w-lg`
- Org name: Orbitron, purple→cyan gradient clip

