# Workspace Designer Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Build an interactive 3D workspace designer for monis.rent where users can visually design their dream office and rent it

**Architecture:** React Three Fiber 3D scene with sidebar controls. Zustand for state management. Products stored as static data. Single-page app with checkout modal.

**Tech Stack:** Next.js (latest), Tailwind CSS, Zustand, React Three Fiber + Drei, Lucide React

---

## Progress Checklist

- [ ] **Task 1:** Scaffold Next.js Project
- [ ] **Task 2:** Create Product Data
- [ ] **Task 3:** Create Zustand Store
- [ ] **Task 4:** Create Header Component
- [ ] **Task 5:** Create 3D Desk Component
- [ ] **Task 6:** Create 3D Chair Component
- [ ] **Task 7:** Create Monitor, Lamp, Plant Components
- [ ] **Task 8:** Create Scene Component
- [ ] **Task 9:** Create Workspace Canvas
- [ ] **Task 10:** Create Sidebar Component
- [ ] **Task 11:** Create Checkout Modal
- [ ] **Task 12:** Update Main Page
- [ ] **Task 13:** Update Layout and Styles
- [ ] **Task 14:** Build and Test
- [ ] **Task 15:** Deploy to Vercel
- [ ] **Task 16:** GitHub + Add Bot

---

## Task 1: Scaffold Next.js Project

**Files:**
- Scaffold: `src/app/layout.tsx`, `src/app/page.tsx`, `package.json`, etc.
- Modify: `package.json` (add dependencies)

**Template:** [templates/task1-scaffold.md](./templates/task1-scaffold.md)

**Steps:**
1. Run create-next-app scaffold command
2. Install base dependencies
3. Install 3D/state dependencies
4. Commit

---

## Task 2: Create Product Data

**Files:**
- Create: `src/data/products.ts`

**Template:** [templates/task2-products.md](./templates/task2-products.md)

**Steps:**
1. Write products.ts with Product interface and product catalog
2. Commit

---

## Task 3: Create Zustand Store

**Files:**
- Create: `src/store/workspaceStore.ts`

**Template:** [templates/task3-store.md](./templates/task3-store.md)

**Steps:**
1. Write workspaceStore.ts with state management
2. Commit

---

## Task 4: Create Header Component

**Files:**
- Create: `src/components/Header.tsx`

**Template:** [templates/task4-header.md](./templates/task4-header.md)

**Steps:**
1. Write Header.tsx
2. Commit

---

## Task 5: Create 3D Desk Component

**Files:**
- Create: `src/components/Desk.tsx`

**Template:** [templates/task5-desk.md](./templates/task5-desk.md)

**Steps:**
1. Write Desk.tsx 3D component
2. Commit

---

## Task 6: Create 3D Chair Component

**Files:**
- Create: `src/components/Chair.tsx`

**Template:** [templates/task6-chair.md](./templates/task6-chair.md)

**Steps:**
1. Write Chair.tsx 3D component with position prop
2. Commit

---

## Task 7: Create Monitor, Lamp, Plant Components

**Files:**
- Create: `src/components/Monitor.tsx`
- Create: `src/components/Lamp.tsx`
- Create: `src/components/Plant.tsx`

**Templates:**
- [templates/task7a-monitor.md](./templates/task7a-monitor.md)
- [templates/task7b-lamp.md](./templates/task7b-lamp.md)
- [templates/task7c-plant.md](./templates/task7c-plant.md)

**Steps:**
1. Write Monitor.tsx
2. Write Lamp.tsx
3. Write Plant.tsx
4. Commit

---

## Task 8: Create Scene Component

**Files:**
- Create: `src/components/Scene.tsx`
- Modify: `src/components/Chair.tsx` (add position prop)

**Template:** [templates/task8-scene.md](./templates/task8-scene.md)

**Steps:**
1. Write Scene.tsx with 3D scene setup
2. Ensure Chair has position prop (update from Task 6 if needed)
3. Commit

---

## Task 9: Create Workspace Canvas

**Files:**
- Create: `src/components/WorkspaceCanvas.tsx`

**Template:** [templates/task9-canvas.md](./templates/task9-canvas.md)

**Steps:**
1. Write WorkspaceCanvas.tsx
2. Commit

---

## Task 10: Create Sidebar Component

**Files:**
- Create: `src/components/Sidebar.tsx`

**Template:** [templates/task10-sidebar.md](./templates/task10-sidebar.md)

**Steps:**
1. Write Sidebar.tsx with product selection
2. Commit

---

## Task 11: Create Checkout Modal

**Files:**
- Create: `src/components/CheckoutModal.tsx`

**Template:** [templates/task11-checkout.md](./templates/task11-checkout.md)

**Steps:**
1. Write CheckoutModal.tsx
2. Commit

---

## Task 12: Update Main Page

**Files:**
- Modify: `src/app/page.tsx`

**Template:** [templates/task12-page.md](./templates/task12-page.md)

**Steps:**
1. Write page.tsx with all components
2. Commit

---

## Task 13: Update Layout and Styles

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

**Templates:**
- [templates/task13a-globals.md](./templates/task13a-globals.md)
- [templates/task13b-layout.md](./templates/task13b-layout.md)

**Steps:**
1. Write globals.css
2. Ensure layout.tsx is correct
3. Commit

---

## Task 14: Build and Test

**Template:** [templates/task14-build.md](./templates/task14-build.md)

**Steps:**
1. Run build
2. Run dev server
3. Commit

---

## Task 15: Deploy to Vercel

**Template:** [templates/task15-deploy.md](./templates/task15-deploy.md)

**Steps:**
1. Deploy to Vercel
2. Commit deployment

---

## Task 16: GitHub + Add Bot

**Template:** [templates/task16-github.md](./templates/task16-github.md)

**Steps:**
1. Create GitHub repo
2. Add desent-bot collaborator
3. Push code
