# Decontext Protocol

A fully decentralized protocol for publishing, validating, and governing on-chain context schemas for agent-native dApps.

## 📦 Features

- DMCP (Decentralized Model Context Protocol) smart contract
- Agent-ready SDK in TypeScript
- Modular deployment with Hardhat
- Mocha/Chai tests
- ESM + .env support
- Deployable to any EVM chain (tested on Sepolia)

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

---

### 2. Create `.env` file

```env
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
PRIVATE_KEY=your_wallet_private_key_without_0x
ETHERSCAN_API_KEY=your_etherscan_api_key
```

---

### 3. Compile

```bash
npx hardhat compile
```

---

### 4. Deploy

```bash
npx hardhat run scripts/deploy.cjs --network sepolia
```

---

### 5. Test

```bash
npx hardhat test
```

---

## 🧠 SDK Usage (example)

```ts
import { connectDMCP } from "./sdk/index";
const contract = connectDMCP(provider, contractAddress, abi);
```

---

## 📂 Project Structure

- `contracts/` → Solidity source
- `scripts/deploy.cjs` → Deployment
- `sdk/` → JS/TS SDK
- `test/` → Mocha + Chai tests
- `docs/` → Protocol overview

---

## 🛡 License

MIT © 2025 Decontext Contributors
