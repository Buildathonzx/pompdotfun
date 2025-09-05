# TODO: pompdafun SPA (Next.js App Router)

Status legend: [ ] pending, [~] in progress, [x] done

## Foundation
- [x] App metadata, fonts, Tailwind CDN, base theme in `src/app/layout.tsx`
- [x] Global helpers (`.form-input`, `.glass-effect`) in `globals.css`
- [x] Shared components: `Header`, `Footer`, `GlassCard`, `Button`

## Pages (from stitch mocks)
- [x] Landing (stitch/1.html) → `src/app/page.tsx`
- [x] Explore (stitch/2.html) → `src/app/explore/page.tsx`
- [x] Token Detail/Trade (stitch/3.html) → `src/app/tokens/[slug]/page.tsx`
- [x] Create Wizard Layout → `src/app/create/layout.tsx`
- [x] Create: Metadata (stitch/4.html) → `src/app/create/metadata/page.tsx`
- [x] Create: Bonding Curve (stitch/5.html) → `src/app/create/curve/page.tsx`
- [x] Create: Fees & Splits (stitch/6.html) → `src/app/create/fees/page.tsx`
- [x] Create: Preview (stitch/7.html) → `src/app/create/preview/page.tsx`
- [x] Create: Launch (stitch/8.html) → `src/app/create/launch/page.tsx`
- [x] Connect Wallet (stitch/9.html) → `src/app/connect/page.tsx`
- [x] Sign Message (stitch/10.html) → `src/app/sign/page.tsx`
- [x] Wrong Network (stitch/11.html) → `src/app/wrong-network/page.tsx`

## Navigation
- [x] Link wiring between pages via `Header` and wizard steps

## Nice-to-haves / Next
- [ ] Extract hero, stats, trending token card into dedicated components
- [ ] Add basic mock state (Zustand/Context) for wizard data persistence
- [ ] Replace inline images with local assets where appropriate
- [ ] Add responsive tweaks and accessibility pass (aria labels, focus states)
- [ ] ESLint tidy and fix script
- [ ] Add Next.js metadata for each route
- [ ] Set up a simple mock API route for tokens listing and detail
- [ ] Add minimal unit tests for components (if desired)

## Integration backlog (post-UI)
- [ ] Wallet integration (OKX Wallet / MetaMask) via wagmi/ethers (no chain RPC yet)
- [ ] Network guard and switch-to-X-Layer logic
- [ ] Smart contract interface stubs (token creation, bonding curve pricing)
- [ ] Fee pool progress from on-chain/mock source
- [ ] DEX liquidity add flow (mock)

---

How to run:
- `npm run dev` to start the development server

Notes:
- This is a static UI implementation faithful to provided stitch mocks.
- Tailwind is loaded via CDN for speed. If you prefer JIT + config, we can switch to native Tailwind setup.
