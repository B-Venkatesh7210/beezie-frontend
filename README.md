# Collectible Marketplace Front-End

This project is a responsive front-end for a collectible trading card marketplace, built with Next.js (App Router), TypeScript, Tailwind CSS, and EVM/Web3 integration. It is designed to simulate a real-world NFT/collectible e-commerce experience, with a focus on clean UI, responsiveness, and blockchain integration.

## Features

- **Product Listing:**
  - Displays a grid of collectible trading cards fetched from an API.
  - Each card shows an image, name, price (in USDC), and a buy button.
  - Products are sorted by price (low to high or high to low) with a dropdown selector.

- **Filters Sidebar:**
  - Responsive sidebar for filtering products by various attributes (Status, Set Name, Language, Year, Grader, Grade, Edition, Card Number, Card Type).
  - Sidebar is always visible on desktop and becomes a full-screen drawer on mobile.

- **Web3 Integration:**
  - Connects to the Flow EVM Testnet using ethers.js and TypeChain.
  - Fetches and displays the user's USDC balance and wallet address.
  - Disables the buy button for products the user cannot afford.

- **Responsive Design:**
  - Fully responsive for desktop, tablet, and mobile views.
  - UI closely matches the provided Figma design.

- **Type Safety & Best Practices:**
  - Built with TypeScript and strict typing (no `any` or `unknown` casting).
  - Uses TanStack Query for data fetching and caching.
  - Code is formatted with Prettier and well-commented where needed.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ethers v6
- TypeChain
- TanStack Query
- pnpm

## Blockchain
- **Network:** Flow EVM Testnet
- **USDC Contract:** Connected via TypeChain and ethers.js

## Getting Started
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Run the development server:
   ```bash
   pnpm dev
   ```
3. Build for production:
   ```bash
   pnpm build
   ```

## Project Structure
- `src/components/` — UI components (cards, filters, etc.)
- `src/hooks/` — Custom hooks for products and web3
- `src/services/` — Web3 contract and provider setup
- `src/constants/` — Addresses and static data
- `src/types/` — TypeScript types
- `src/utils/` — Utility functions

## License
MIT
