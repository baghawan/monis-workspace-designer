# Task 1: Scaffold Next.js Project

## Commands

### Step 1: Scaffold with create-next-app

```bash
yarn create next-app . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git
```

Expected: Scaffold creates all base files

### Step 2: Install additional dependencies

```bash
yarn add @react-three/fiber @react-three/drei three zustand lucide-react clsx tailwind-merge
```

Expected: All 3D and state packages installed

```bash
yarn add -D @types/three
```

Expected: TypeScript types installed

### Step 3: Commit

```bash
git init
git add .
git commit -m "feat: scaffold Next.js project"
```
