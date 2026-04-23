JearonWong.com VI & UI/UX System Brief v0.2_locked

### Status
- **Document Type:** Locked execution brief
- **Authority Level:** Subordinate to `Brand_Identity_Brief_v0.1`, superior to all page/UI implementation decisions
- **Applies To:** Homepage, shared layout system, typography, color system, portrait treatment, component language, and sitewide UI/UX hierarchy
- **Purpose:** Define a binding visual and experience system for JearonWong.com so that all later design and implementation work converges to a single recognizable brand surface

## 0. Authority and Canonical Rules

### 0.1 Canonical Brand Source
All design and interface decisions must inherit from the Brand Identity Brief.

### 0.2 Canonical Role Line
The only canonical visible role line is:
> **Protocol Architect for the Agent Era**

The following may appear only as auxiliary micro-label / eyebrow language, never as the primary role line:
> *Protocol Architect · AI Agent Systems*

### 0.3 Canonical Thesis Line
The canonical thesis line is:
> **Defining how AI agents reliably deliver real work.**

### 0.4 Canonical Proof Chain
The canonical proof chain is:
- MPLP
- Cognitive OS
- SoloCrew
- Validation Lab

### 0.5 Design Success Criteria
The site must achieve the following recognition outcomes:
- **3 seconds:** remember the person
- **5 seconds:** understand the thesis
- **10 seconds:** see the proof chain

If any design decision weakens these three outcomes, it is non-compliant.

## 1. Layer 2 — Visual Identity (VI)

### 1.1 Brand Visual Definition
The visual system must communicate:
- editorial-tech
- premium
- sharp
- intelligent
- modern
- high-contrast
- AI-era without cliché
- founder-grade, not generic founder-branding
- protocol/systems-oriented, not literary-blog oriented

**It must NOT feel like:**
- a legacy personal blog
- a literary essay site
- a soft beige editorial journal
- a generic AI SaaS landing page
- a startup template with neon gradients
- a generic founder personal site
- a consulting brochure site

### 1.2 Color System — Locked Direction
**Primary Surface Model**
The site uses a two-zone contrast model:
- **Hero / first-fold dominant zone:** near-black / deep charcoal
- **Main reading and content zones:** cool off-white / light neutral
- **Accent:** one restrained cool accent only

**Locked Palette Behavior**
- **Base Dark:** near-black with subtle warmth-neutral balance, not pure black
- **Base Light:** cool off-white, not paper beige
- **Accent:** one cool accent only, used for emphasis, interactive states, and small signal cues
- **Muted Text:** graphite / cool gray
- **Borders / Dividers:** soft low-contrast neutral lines
- **Card Surfaces:** slightly elevated from page background, but not glossy or glassmorphic

**Forbidden Color Behaviors**
- no warm beige as dominant site mood
- no multi-accent palette
- no rainbow or high-saturation system
- no purple-blue cyber gradient as the primary identity
- no heavy glassmorphism
- no generic "futuristic AI blob" palette logic

*Implementation Note: Exact hex values may be finalized in tokens, but the above behavioral constraints are locked. Color exploration may happen only within this bounded model.*

### 1.3 Typography System — Locked Direction
**Core Rule**
The site's primary brand voice must be led by a **modern sans / grotesk / neo-grotesk display system**, not by a dominant serif system.

**Typography Roles**
**A. Primary Display**
- *Used for:* homepage H1, major section titles, key thesis statements
- *Characteristics:* contemporary, sharp, high-confidence, architect-grade, strong rhythm and contrast, not soft, literary, or nostalgic

**B. Body / Interface Sans**
- *Used for:* supporting copy, cards, navigation, descriptions, UI labels where readability matters
- *Characteristics:* clean, neutral, highly readable, modern but not generic-template-feeling

**C. Monospace Micro Layer**
- *Used only for:* eyebrow micro-labels, metadata, system-like status / tags, protocol micro-signals
- *Characteristics:* restrained, sparse, never dominant

**D. Editorial Accent Serif**
- *Serif is optional and strictly secondary.*
- *Allowed uses:* selected quote styling, rare lead treatment, occasional essay editorial emphasis
- *Serif must not define:* homepage first fold, global brand mood, primary H1/H2 identity

**Forbidden Typography Behaviors**
- no serif-led homepage identity
- no default "startup sans + mono" executed without hierarchy distinction
- no typography system that could be mistaken for a generic SaaS template
- no typography that reads as literary-first rather than systems-first

### 1.4 Image System — Portrait as Identity Anchor
**Portrait Requirement**
The homepage must include a first-fold portrait anchor. This is not decorative. It is a recognition device.

**Portrait Style Requirements**
The portrait must feel: high-contrast, editorial, premium, serious, founder / architect energy, modern, not casual. Visually memorable within first fold.

**Portrait Placement Rule**
The portrait must appear as a **major split-hero visual anchor**, not as a small side card, minor block, or decorative element.

**Portrait Fallback — Locked Requirement**
If no final portrait asset exists, the site must use a predefined fallback treatment:
- structured portrait frame
- monogram or identity placeholder
- subtle grid / signal / protocol texture
- premium editorial composition
- explicit drop-in replacement path for future real asset

**Forbidden Portrait States**
- no arbitrary placeholder photo
- no generic avatar illustration
- no decorative beige empty block
- no tiny portrait card disconnected from the hero
- no "profile image later" improvisation

### 1.5 Graphic Motifs
**Allowed motif families:**
- protocol/grid structures
- node/signal traces
- system fragments
- subtle diagrammatic overlays
- directional editorial lines
*(These must be: restrained, structural, supporting, not dominating, coherent with architecture/protocol thinking)*

**Forbidden motifs:**
- shiny AI blobs
- robot/circuit cliché illustrations
- decorative particle noise everywhere
- sci-fi chrome futurism
- decorative complexity without meaning

### 1.6 Layout Language — Locked Constraints
The site layout language must use:
- split hero structures
- strong asymmetry with control
- large intentional whitespace
- decisive section cadence
- clear hierarchy breaks
- fewer, stronger surfaces instead of many equal blocks

**Critical Hierarchy Rule**
The homepage must not flatten: person, thesis, proof. These three elements are top-priority hierarchy objects.

**Equal-Weight Cards Rule**
Equal-weight cards are allowed **only in lower grids** after the person-thesis-proof hierarchy has already been established.
- *Allowed use cases:* signature ideas grid, featured essays grid, playbook previews, lower proof grids
- *Forbidden use cases:* first fold, primary homepage hierarchy, top narrative band

## 2. Layer 3 — UI System

### 2.1 UI Philosophy
The UI system exists to express the brand identity, not to create generic interface consistency. Its job is to produce: strong recognition, stable hierarchy, repeatable premium surfaces, maintainable implementation.

### 2.2 Primitive Categories
**A. Structural Primitives:** Container, Section, Split Layout, Page Shell, Narrative Band, Section Header
**B. Identity Primitives:** Eyebrow, Lead, Portrait Frame, Role Line, Thesis Line, Proof Strip / Proof Pills
**C. Interaction Primitives:** Primary CTA, Secondary CTA, Text Link / Editorial Link, Quiet Footer CTA
**D. Content Primitives:** Signature Idea Card, Project Proof Card, Featured Essay Card, Playbook Preview Card, Metadata Row, Badge / Tag

### 2.3 Component Rules
- Every repeated UI pattern must be componentized.
- Tokens must drive spacing, radius, typography, and color.
- No one-off page drift.
- Reusable components must preserve hierarchy, not flatten it.
- Components must remain light, static-first, Astro-friendly.

**Forbidden Component Behaviors**
- no component explosion with no hierarchy purpose
- no page-specific hardcoded styling repeated everywhere
- no heavy UI framework adoption
- no generic card system that makes all content feel the same

### 2.4 Design Tokens — Behavioral Constraints
The token system must support:
- high contrast in first fold
- lighter, calmer reading surfaces below
- large display scale for thesis-level text
- smaller, disciplined metadata scale
- consistent vertical rhythm
- restrained radius system
- premium surface elevation without SaaS gloss
*(These tokens should be codified in CSS variables / global tokens, but the visual behavior above is the real contract.)*

## 3. Layer 4 — UX / Experience Flow

### 3.1 Homepage Narrative Flow — Locked
The homepage must follow this sequence:
1. The Person
2. The Thesis
3. Immediate Proof Signal
4. Signature Ideas
5. Why Now
6. Expanded Proof
7. Featured Writing
8. Playbooks
9. Subscribe / Contact Path

*Explanation: This replaces the v0.1 flow where proof appeared too late. Proof must be visible before the user is forced through a full conceptual stack.*

### 3.2 Immediate Proof Signal — Binding Rule
The proof chain must appear **in the first screenful or immediate post-hero zone**.
**Allowed forms:** proof strip, proof pills, compact proof cards, project name bar with short role cues.
This is the mechanism that satisfies the "10 second proof" goal.
*Important: Immediate Proof Signal is not the same as the full Projects section. The user must see evidence quickly, then be offered deeper proof below.*

### 3.3 Signature Ideas Rule
The signature ideas are: Reliable AI Agent Work Delivery, Protocol Engineering, Agent Governance.
These must be presented as three concise pillars, not as abstract essay blocks. Each pillar should answer: what it is, why it matters now, why this perspective is distinctive.

### 3.4 Why Now Rule
Why Now must be a **strong narrative band**, not a verbose explanatory block.
It should make clear that:
- the industry has focused on models, prompts, tools, and demos
- the missing layer is reliable work delivery
- your work defines that next layer
*(Must be visually compressed into a strong editorial/system statement, not a plain list dump.)*

### 3.5 Expanded Proof Rule
After the user has already seen the proof signal, the site may present fuller project proof cards for: MPLP, Cognitive OS, SoloCrew, Validation Lab.
These must be framed as: proof points, evidence of thinking made concrete, artifacts of a thesis.
They must NOT read like: a product portfolio, a company brochure, a sales deck.

### 3.6 Navigation Experience Rule
**Top Navigation Priority**
The top nav must prioritize clarity and brand recognition over IA completeness.
- *Preferred visible top nav language:* Essays, Ideas, Playbooks, Projects, About
- *Secondary / Lower-Priority Items:* Governance, Newsletter, Contact (These can live in secondary nav, hero micro-links, footer, mobile drawer)

**Route Rule**
Visible label may use *Ideas*, even if an internal route such as `/theories` remains in implementation. Brand language takes precedence over internal taxonomic wording.

### 3.7 Recognition Goals — Locked
- **3 seconds:** remember the person
- **5 seconds:** understand the thesis
- **10 seconds:** see the proof chain
*(If a homepage design cannot be reasonably argued to satisfy these three constraints, it is invalid.)*

### 3.8 Behavioral Goals
The UX system should lead users toward: continue reading, inspect proof artifacts, read flagship essay, explore idea pillars, subscribe to the stream, understand this as a thought platform, not a generic blog.

## 4. Forbidden Patterns
The following are explicitly non-compliant:
- homepage as knowledge index
- first fold dominated by boundary/disclaimer language
- literary-blog visual identity
- beige-paper primary mood
- serif-led homepage identity
- equal-weight top-level card flattening
- tiny or decorative portrait treatment
- generic SaaS AI aesthetic
- multi-accent visual noise
- placeholder portrait improvisation
- founder-branding that loses protocol specificity
- role line drift away from `Protocol Architect for the Agent Era`

## 5. Implementation Compliance Checklist
A design / implementation is compliant only if:
- [ ] the canonical role line remains intact
- [ ] the thesis line remains intact
- [ ] the first fold is person-first
- [ ] proof appears within the first screenful or immediate post-hero zone
- [ ] the portrait anchor exists with valid fallback
- [ ] the visual system is high-contrast, modern, premium, and not literary-blog
- [ ] serif is secondary, not dominant
- [ ] equal-weight cards do not govern top hierarchy
- [ ] the homepage reads as a personal brand front door, not a knowledge archive
- [ ] the project proof chain is visible and credible
- [ ] UI primitives remain componentized and token-driven

## 6. Change Control
Any later proposal that changes: role line, thesis line, proof chain visibility, portrait centrality, visual direction, hierarchy order **must be treated as a system-level change, not a local UI tweak.**

## 7. Appendix — Allowed Exploration Zone
The following may still be explored without violating the locked brief:
- exact accent hue within the cool-accent family
- final font family selection within the defined category constraints
- exact portrait crop once final photography exists
- exact grid/pattern treatment for signal/protocol motifs
- exact card elevation and border treatment within the defined system

The following may NOT be reopened without explicit revision of this brief:
- canonical role line
- canonical thesis line
- person-thesis-proof hierarchy
- proof visibility timing
- portrait requirement
- serif as secondary only
- prohibition of legacy blog / generic SaaS archetypes
