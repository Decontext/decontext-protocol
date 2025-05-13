# Protocol Overview: Decontext DMCP

Decontext is an open protocol for publishing and consuming machine-readable **context schemas** on-chain. These contexts help intelligent agents (like AI wallets or DAO bots) interpret the state, permissions, and behavior of smart contracts.

---

## 🧠 What Is a Model Context?

A **Model Context** defines:
- Entities (e.g. contracts, roles, tokens)
- Relationships (e.g. owner-of, delegate-to)
- Permissions (e.g. canTransfer, canVote)
- States (e.g. locked, active, staked)

It enables agents to understand **what they’re interacting with** in Web3.

---

## 🔗 What Is DMCP?

DMCP = **Decentralized Model Context Protocol**

It is a Solidity-based contract and schema registry where:
- Anyone can publish a context schema (`id`, `uri`)
- All schemas are verifiable and timestamped
- Agents and dApps can fetch schemas to apply real-time logic

---

## 📦 Core Contract Features

- `publishContext(string id, string uri)`  
  Adds or updates a context schema

- `getContext(string id)`  
  Returns schema metadata

- `totalSchemas()`  
  Total number of schemas published

- `getSchemaId(index)`  
  Fetch schema ID by index

---

## 🧪 Agent Use Case Example

A wallet agent receives a command:
> “Send 1 ETH to my multisig, then stake the rest on Curve.”

Using DMCP:
1. Fetches `wallet-mcp` to interpret safe send rules
2. Fetches `erc20-mcp` to verify token interactions
3. Applies constraints defined by schemas before signing

✅ Trustless
✅ Composable
✅ Permission-aware

---

## 📈 DMCP Modules (in development)

| Module         | Purpose                            |
|----------------|-------------------------------------|
| `wallet-mcp`   | Sign/send validation for wallets    |
| `erc20-mcp`    | ERC-20 token handling + approvals   |
| `dao-mcp`      | Proposal + vote understanding       |
| `solc-mcp`     | Contract structure validation       |
| `chainlist-mcp`| Multichain context lookup           |

---

## 🛡 Security

- **Zero custody**: Keys never leave user
- **Verifiable logs**: On-chain audit trail
- **Governable**: Future DAO validation of schemas

---

## 🚀 Roadmap

- Q2 2025: Launch core schemas, deploy registry
- Q3 2025: Agent Factory + Marketplace
- Q4 2025: zkContext proofs + Enterprise tooling
- 2026+: Cross-chain AI context composability

---

## 📚 Summary

Decontext turns Web3 meaning into verifiable infrastructure. With DMCP, developers and agents can speak the same language — securely, intelligently, and trustlessly.

> Agents understand. Smart contracts execute. Users stay sovereign.
