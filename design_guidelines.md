# IETNC Nursing College Website - Design Guidelines

## Design Philosophy
**Gen Z-Focused, Mobile-First, Motion-Heavy**
- Prioritize mobile experience with progressive enhancement for desktop
- Embrace bold, dynamic animations that engage younger audiences
- Balance professionalism with modern, energetic aesthetics
- Create emotional connections through motion and visual storytelling

## Color System

**Primary Colors:**
- Blue: #2563EB (trust, professionalism, medical authority)
- Teal: #14B8A6 (growth, healing, innovation)

**Semantic Colors:**
- Success: #10B981
- Warning: #F59E0B
- Error: #EF4444

**Backgrounds:**
- Light mode: #F9FAFB (main), #FFFFFF (cards)
- Dark mode: #0F172A (main), #1E293B (cards)
- Dark mode enabled globally with 300ms transitions

**Gradients:**
- Blue-to-Teal for CTAs, hero overlays, and accent sections

## Typography

**Font Family:** Inter (headings and body), Fira Code (code/technical content)

**Scale:**
- H1: 48px (bold) - Hero headlines
- H2: 36px (semibold) - Section headers
- H3: 28px (semibold) - Subsections
- H4: 24px (medium) - Card titles
- Body Large: 18px - Feature descriptions
- Body Regular: 16px - Standard content
- Body Small: 14px - Captions, metadata

**Hierarchy:** Use weight variations (400/500/600/700) to create visual distinction within text blocks

## Spacing System (Tailwind Units)

Use consistent spacing: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px
- Mobile sections: py-12 to py-16
- Desktop sections: py-20 to py-32
- Card padding: p-6 to p-8
- Grid gaps: gap-4 to gap-8

## Layout Patterns

**Breakpoints:**
- Mobile: 320px+ (single column)
- Tablet: 768px+ (2 columns)
- Desktop: 1024px+ (3-4 columns)
- Large: 1440px+ (max-width containers)

**Grid Configurations:**
- Statistics: 2 cols mobile → 4 cols desktop
- Programs: Vertical scroll mobile → 3 cols desktop
- Features: 2 cols mobile → 4 cols desktop
- Leadership: 1 col mobile → 3 cols desktop

## Animation Strategy

**Entry Animations:**
- Fade-in: 0.6s ease-out for hero content
- Slide-up: 0.6s with 0.2s delay for secondary elements
- Scale-entrance: 0.6s with 0.1s stagger for cards
- Rotate-entrance: 15deg rotation for program cards

**Scroll-Triggered:**
- Count-up: 2s duration for statistics (trigger at 50% viewport)
- Text reveal: 0.5s with 0.05s character stagger
- Parallax: Medium intensity on background images

**Interactive:**
- Card hover: translateY -4px, shadow increase, 0.3s duration
- Button pulse: 2s infinite for primary CTAs
- Gradient shift: 0.3s on hover for feature cards

**Continuous:**
- News ticker: Continuous horizontal scroll
- Gradient animation: 3s infinite on CTA banners
- Badge pulse: 1s red pulse on deadline indicators

## Component Design Patterns

**Hero Section (100vh):**
- Full-viewport image with 0.4 overlay darkness
- Centered content with headline + subheadline + dual CTAs
- Parallax background effect
- Blur background for buttons on images (no additional hover states needed)

**Statistics Cards:**
- Large animated numbers with count-up effect
- Icon above number, label below
- Bounce animation on icons
- 4-column grid on desktop

**Program Cards:**
- Rotate entrance animation
- Hover lift effect with shadow
- Display: Title, duration, seats, 3 key features, CTA
- Use gradient borders or backgrounds for differentiation

**Feature Grid:**
- Icon-first design with bounce entrance
- 8 features in 2×4 grid (mobile→desktop)
- Gradient shift on hover
- Icon color matches primary palette

**Carousels:**
- Faculty: 3 visible items, 5s auto-play
- Testimonials: 1 visible item, 6s auto-play
- Touch swipe enabled on all viewports
- Fade-slide transitions

**Forms:**
- Multi-step with progress indicator
- 1-column mobile → 2-column desktop
- Inline validation with semantic colors
- File upload with drag-drop support

## Images

**Hero Images (Essential):**
- Homepage: Full-width nursing students in modern hospital setting (100vh)
- About Us: Campus aerial or building facade (400px height)
- Programs: Lab/clinical environment backgrounds
- All hero images require 0.4 dark overlay for text contrast

**Supporting Images:**
- Faculty profiles: Professional headshots with consistent aspect ratio
- Testimonial photos: Circular crops with teal border
- Facilities gallery: High-quality lab, hostel, library interiors
- Success stories: Student photos with company logos

**Image Treatment:**
- Subtle parallax on background images
- Border radius: 12px for cards, 16px for featured images
- Lazy loading for performance
- Responsive srcset for multiple breakpoints

## Special Elements

**News Ticker:** Continuous auto-scroll, 4 items minimum, positioned above footer

**Admission CTA Banner:** Full-width gradient (blue→teal), animated, deadline badge with red pulse

**WhatsApp Button:** Floating bottom-right, green (#25D366), subtle bounce animation

**Dark Mode Toggle:** Header location, sun/moon icon, smooth transition

## Mobile-First Priorities

1. Touch-friendly tap targets (min 44px)
2. Vertical scrolling for carousels on mobile
3. Simplified navigation with hamburger menu
4. Optimized image sizes for mobile bandwidth
5. Reduced animation complexity on smaller screens
6. Single-column forms with clear visual hierarchy

**Critical:** Every section must feel complete and purposeful with rich content—no sparse, minimal layouts. Balance motion-heavy design with performance optimization for mobile devices.