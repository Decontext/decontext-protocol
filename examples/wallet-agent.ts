// examples/wallet-agent.ts

import { ethers } from "ethers";
import { connectDMCP } from "../sdk/index";

// Mocked natural language command from user
const userCommand = "Send 0.5 ETH to 0xDEADBEEF1234567890";

// Very basic NLP-style parser
function parseCommand(command: string) {
  const [_, amount, token, , recipient] = command.split(" ");
  return {
    action: "transfer",
    token,
    amount: parseFloat(amount),
    recipient
  };
}

async function executeCommand() {
  const parsed = parseCommand(userCommand);
  console.log("🧠 Parsed command:", parsed);

  const CONTRACT_ADDRESS = "0x661C815E467957Bf45fcE920BA35017184814925"; // DMCP on Sepolia
  const DMCP_ABI = [
    "function getContext(string id) view returns (tuple(string id, string uri, address publisher, uint256 timestamp))"
  ];

  const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/YOUR_INFURA_KEY");
  const dmcp = connectDMCP(provider, CONTRACT_ADDRESS, DMCP_ABI);

  try {
    const context = await dmcp.getContext("wallet-mcp");
    console.log("📦 Fetched context schema:", context);

    console.log(`✅ Agent is ready to send ${parsed.amount} ${parsed.token} to ${parsed.recipient}`);
    console.log("🚧 (simulated only — no actual transfer performed)");
  } catch (err) {
    console.error("❌ Failed to fetch schema from DMCP:", err);
  }
}

executeCommand().catch(console.error);
