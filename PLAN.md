# Workspace Designer - Technical Plan

## Project Overview

**monis.rent Workspace Designer** - An interactive 3D tool for digital nomads in Bali to visually design and rent their dream office setup.

- **Target Users**: Digital nomads and startups in Bali needing office equipment
- **Core Value**: "Cool, visual, fun experience" - build office visually, get excited, hit rent
- **Deployment**: Vercel with public URL
- **Code**: GitHub with desenct-bot collaborator

---

## Tech Stack

| Category      | Choice                      |
| ------------- | --------------------------- |
| Framework     | Next.js latest + TypeScript |
| Styling       | Tailwind CSS                |
| State         | Zustand                     |
| 3D            | React Three Fiber + Drei    |
| UI Animations | Framer Motion               |
| Icons         | Lucide React                |
| Deployment    | Vercel                      |

---

## Features

### Must-Haves (Required)

- [ ] Select desk from 2+ options
- [ ] Select chair from 2+ options
- [ ] Add accessories (monitors, lamps, plants)
- [ ] Live 3D preview updates as items change
- [ ] Checkout view with rental summary
- [ ] Deployed and accessible via URL

### Extended (Nice to Have)

- [ ] Rental duration selector
- [ ] Total price calculator
- [ ] Smooth camera transitions
- [ ] Item highlight on hover

---

## UI/UX Design

### Layout

```
┌─────────────────────────────────────────┐
│  Header: monis.rent + "Workspace Designer" │
├─────────────────────────────────────────┤
│                    │                     │
│                    │    Sidebar          │
│    3D Canvas       │    - Categories    │
│    (OrbitControls) │    - Products      │
│                    │    - Price Summary  │
│                    │                     │
└─────────────────────────────────────────┘
```

### Visual Style

- **Theme**: Clean, modern, tropical/Bali vibes
- **Colors**:
  - Primary: Emerald green (#10b981) - Bali tropical
  - Background: Neutral warm (#fafaf9)
  - Text: Slate (#1e293b)
- **3D Scene**: Soft ambient + directional lighting, soft shadows, rounded furniture primitives

### Interactions

- Orbit controls: rotate/zoom the workspace
- Click sidebar item → adds/selects item in scene
- Smooth animations when adding/removing items
- Checkout modal with summary

---

## Data Model

```typescript
interface Product {
  id: string;
  name: string;
  category: "desk" | "chair" | "monitor" | "lamp" | "plant" | "accessory";
  price: number;
  color?: string;
  dimensions?: { width: number; height: number; depth: number };
}

interface WorkspaceState {
  selectedDesk: Product | null;
  selectedChair: Product | null;
  accessories: Product[];
  rentalDays: number;
}
```

### Product Options

**Desks (2+)**

- Standing Desk ($150/mo)
- Classic Desk ($100/mo)

**Chairs (2+)**

- Ergonomic Chair ($80/mo)
- Simple Chair ($50/mo)

**Monitors (2+)**

- 27" Monitor ($60/mo)
- 32" Ultrawide ($90/mo)

**Lamps (2+)**

- Desk Lamp ($25/mo)
- Floor Lamp ($35/mo)

**Plants (2+)**

- Small Plant ($15/mo)
- Large Plant ($25/mo)

---

## File Structure

```
monis-workspace-designer/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── WorkspaceCanvas.tsx    # R3F Canvas
│   │   ├── Scene.tsx             # 3D scene content
│   │   ├── Desk.tsx              # Desk 3D model
│   │   ├── Chair.tsx             # Chair 3D model
│   │   ├── Monitor.tsx           # Monitor 3D model
│   │   ├── Lamp.tsx              # Lamp 3D model
│   │   ├── Plant.tsx              # Plant 3D model
│   │   ├── Sidebar.tsx           # Product selection
│   │   ├── CheckoutModal.tsx     # Rental summary
│   │   └── Header.tsx            # App header
│   ├── store/
│   │   └── workspaceStore.ts     # Zustand store
│   └── data/
│       └── products.ts           # Product catalog
├── public/
├── package.json
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

---

## Implementation Order

1. **Scaffold Next.js + dependencies**
2. **Create Zustand store + product data**
3. **Build 3D scene with basic primitives**
4. **Add sidebar with product selection**
5. **Wire up state → 3D scene updates**
6. **Add checkout modal**
7. **Polish: animations, shadows, colors**
8. **Deploy to Vercel**
9. **Push to GitHub + add desent-bot**

---

## Time Estimate

| Task                   | Estimated      |
| ---------------------- | -------------- |
| Setup + dependencies   | 30 min         |
| State + data layer     | 30 min         |
| 3D scene base          | 1 hour         |
| Sidebar + interactions | 1 hour         |
| Checkout modal         | 30 min         |
| Polish + deploy        | 1 hour         |
| **Total**              | **~4-5 hours** |

---

## Acceptance Criteria

- [ ] User can select desk (2+ options)
- [ ] User can select chair (2+ options)
- [ ] User can add multiple accessories
- [ ] 3D preview updates in real-time
- [ ] Checkout shows selected items + total price
- [ ] App is deployed to Vercel (public URL)
- [ ] Code is on GitHub with desent-bot added
