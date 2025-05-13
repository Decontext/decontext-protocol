# Decontext: The Decentralized Model Context Protocol

![License](https://img.shields.io/github/license/decontextai/decontext-protocol)
![Issues](https://img.shields.io/github/issues/decontextai/decontext-protocol)
![Stars](https://img.shields.io/github/stars/decontextai/decontext-protocol)
![Forks](https://img.shields.io/github/forks/decontextai/decontext-protocol)

🚀 Open, modular, and fully decentralized context infrastructure for agent-native Web3.
---

## 🌐 What is Decontext?

Decontext enables trustless, verifiable, and composable **Model Contexts** on-chain — structured data that AI agents use to interpret Web3 systems.

It transforms centralized MCPs into a decentralized public good, unlocking a new generation of agent-native dApps.

---

## 🧠 Core Features

- ✅ DMCP (Decentralized Model Context Protocol)
- ✅ Verifiable context schemas on-chain
- ✅ Agent SDK (TypeScript)
- ✅ Secure MetaMask/LLM integrations
- ✅ Modular, forkable architecture

---

## ⚙️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Setup `.env` file

```env
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
PRIVATE_KEY=your_wallet_private_key_without_0x
ETHERSCAN_API_KEY=your_etherscan_key
```

### 3. Compile contracts

```bash
npx hardhat compile
```

### 4. Deploy to Sepolia

```bash
npx hardhat run scripts/deploy.cjs --network sepolia
```

### 5. Run tests

```bash
npx hardhat test
```

---

## 📦 Project Structure

| Folder         | Description                                 |
|----------------|---------------------------------------------|
| `contracts/`   | DMCP Solidity contract                      |
| `scripts/`     | Deployment scripts                          |
| `sdk/`         | TypeScript SDK to interact with DMCP        |
| `examples/`    | Agent-driven usage examples                 |
| `test/`        | Mocha + Chai unit tests                     |
| `docs/`        | Protocol documentation                      |

---

## 📜 License

MIT © 2025 Decontext Contributors
